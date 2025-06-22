<?php

namespace App\Http\Controllers;

use App\Models\Vip;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Exceptions\MPApiException;

class MercadoPagoController extends Controller
{
    public function generatePayment(Request $request)
    {
        $request->validate([
            "vip_id" => "required|integer",
            "user_id" => "required|integer"
        ]);

        try {
            MercadoPagoConfig::setAccessToken(env("MERCADOPAGO_ACCESS_TOKEN"));
            MercadoPagoConfig::setRuntimeEnviroment(MercadoPagoConfig::LOCAL);

            $vip_id = $request->get("vip_id");
            $user_id = $request->get("user_id");

            $vip = Vip::find($vip_id);
            $user = User::find($user_id);

            if (!$vip | !$user) {
                return back()->with("message", "Invalid request.");
            }

            Log::debug('VIP Price:', ['price' => $vip->vip_price, 'type' => gettype($vip->vip_price)]);

            $client = new PaymentClient();

            $createRequest = [
                "additional_info" => [
                    "items" => [
                        [
                            "title" => $vip->vip_name,
                            "description" => $vip->vip_desc,
                            "picture_url" => "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium2x.png",
                            "quantity" => 1,
                            "unit_price" => $vip->vip_price,
                        ]
                    ],
                    "payer" => [
                        "first_name" => $user->username,
                        "last_name" => $user->username,  
                    ],
                ],
                "description" => $vip->vip_desc,
                "external_reference" => "MP0001",
                "metadata" => null,
                "payer" => [
                    "entity_type" => "individual",
                    "type" => "customer",
                    "email" => $user->email,
                ],
                "payment_method_id" => "pix",
                "transaction_amount" => (float) $vip->vip_price,
            ];

            $payment = $client->create($createRequest);

            return response()->json($payment);
        } catch (MPApiException $e) {
            return response()->json([
                'message' => 'Internal server error.',
                'error' => $e->getApiResponse(),
                'details' => $e->getApiResponse()->getContent(),
            ], 500);
        }
    }
}
