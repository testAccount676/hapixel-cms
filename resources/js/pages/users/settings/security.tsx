import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLayout from "@/layouts/app-layout";
import SettingsLayout from "@/layouts/settings-layout";
import { SharedData } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { Loader2 } from "lucide-react";
import { FormEventHandler, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function UserSecurityPage() {
  const passwordInput = useRef<HTMLInputElement>(null);
  const currentPasswordInput = useRef<HTMLInputElement>(null);

  const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const handleUpdatePassword: FormEventHandler = (e) => {
    e.preventDefault();

    put("/users/me/settings/security", {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current?.focus();
        }

        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current?.focus();
        }
      },
    });
  };

  const {flash} = usePage<SharedData>().props

  useEffect(() => {
    if (flash.message) {
        toast.success(flash.message, {richColors: true})
    }
  }, [flash])
  return (
    <>
      <AppLayout>
        <SettingsLayout>
          <div className="rounded-md bg-white p-6 shadow-sm">
                    

                    <form onSubmit={handleUpdatePassword} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="current_password">Senha atual</Label>

                            <Input
                                id="current_password"
                                ref={currentPasswordInput}
                                value={data.current_password}
                                onChange={(e) => setData('current_password', e.target.value)}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                placeholder="Senha atual"
                            />

                           
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Nova senha</Label>

                            <Input
                                id="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                placeholder="Nova senha"
                            />

                            
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">Confirmar senha</Label>

                            <Input
                                id="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                placeholder="Confirmar senha"
                            />

                            
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save password</Button>

                            
                        </div>
                    </form>
                </div>
        </SettingsLayout>
      </AppLayout>
    </>
  );
}
