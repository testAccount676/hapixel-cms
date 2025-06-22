import DeleteUser from "@/components/delete-user";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SettingsLayout from "@/layouts/settings-layout";
import { SharedData } from "@/types";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import AppLayout from "../../layouts/app-layout";

interface EditProfileFormProps {
  username: string;
  email: string;
  motto: string;
}

export default function UserSettingsPage() {
  const { auth, flash } = usePage<SharedData>().props;
  const { data, processing, setData, reset, patch } = useForm<Required<EditProfileFormProps>>({
    email: auth.user.email,
    motto: auth.user.motto,
    username: auth.user.username,
  });

  function handleEditUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    patch("/users/me/settings", {
      onSuccess: () => {
        reset();
      },
    });
  }

  useEffect(() => {
    if (flash?.message) {
      toast.success(flash.message, {
        richColors: true,
      });
    }
  }, [flash]);

  return (
    <>
      <AppLayout>
        <Head title="Suas Configurações" />

        <SettingsLayout>
          <div className="space-y-6 rounded-md bg-white p-6 shadow-sm">
            <form onSubmit={handleEditUser} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Nome de Usuário</Label>

                <Input
                  id="username"
                  disabled={processing || auth.user.rank < 2}
                  onChange={(e) => setData("username", e.target.value)}
                  value={data.username}
                  className="mt-1 block w-full"
                  required
                  autoComplete="username"
                  placeholder="Einstein"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>

                <Input
                  id="email"
                  disabled={processing}
                  onChange={(e) => setData("email", e.target.value)}
                  value={data.email}
                  type="email"
                  className="mt-1 block w-full"
                  required
                  autoComplete="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="motto">Missão</Label>

                <Input
                  disabled={processing}
                  id="motto"
                  onChange={(e) => setData("motto", e.target.value)}
                  value={data.motto}
                  type="motto"
                  className="mt-1 block w-full"
                  required
                  placeholder="Nova missão"
                />
              </div>

              <div>
                <p className="text-muted-foreground -mt-4 text-sm">
                  Seu endereço de e-mail não foi verificado.{" "}
                  <Link
                    href={"/"}
                    method="post"
                    as="button"
                    className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                  >
                    Clique aqui para enviar um link de verificação.
                  </Link>
                </p>

                <div className="mt-2 text-sm font-medium text-green-600">Um novo link de verificação foi enviado para você.</div>
              </div>

              <div className="flex items-center gap-4">
                <Button disabled={processing}>
                  {processing ? (
                    <span className="flex items-center gap-x-1">
                      Salvando <Loader2 className="animate-spin" />
                    </span>
                  ) : (
                    <span>Salvar</span>
                  )}
                </Button>
              </div>
            </form>
            <DeleteUser processingEditForm={processing} />
          </div>
        </SettingsLayout>
      </AppLayout>
    </>
  );
}
