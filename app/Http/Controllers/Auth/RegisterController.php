<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;
use Kra8\Snowflake\Snowflake;

class RegisterController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Password::defaults()],
            'gender' => 'required',
        ]);

        if ($this->checkIfUserExists($request->username)) {
            throw ValidationException::withMessages([
                'username' => __('user.exists'),
            ]);
        }

        $snowflake = app(Snowflake::class);
        $public_id = $snowflake->next();

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'gender' => $request->gender,
            'public_id' => $public_id,
            'auth_ticket' => $this->generateSSO(),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return to_route('users.me');
    }

    private function checkIfUserExists($username): bool
    {
        return DB::table('players')->where('username', $username)->exists();
    }

    private function generateSSO(): string
    {
        $randomNumber = str_pad(mt_rand(0, 999999), 6, '0', STR_PAD_LEFT);
        return 'SSO-' . $randomNumber;
    }
}
