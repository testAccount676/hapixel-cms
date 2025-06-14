import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import Turnstile, { useTurnstile } from "react-turnstile";

export interface LoginFormProps {
  username: string;
  password: string;
}
export default function LoginDialog() {
  const { processing, post, errors, data, setData } = useForm<Required<LoginFormProps>>({
    username: "",
    password: "",
  });
  const handleLoginUser: FormEventHandler = (e) => {
    e.preventDefault();

    post("/auth/login");
  };

  const turnstile = useTurnstile();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="flex cursor-pointer items-center justify-center gap-x-1 px-7 py-3 duration-500 hover:bg-gray-100">Login</li>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="p-2">
          <DialogTitle>Faça login no Hapixel</DialogTitle>
          <DialogDescription>Olá! Nós sentimos sua falta, que bom que voltou.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleLoginUser}>
          <div className="grid gap-4 py-4">
            <div className="relative w-96">
              <Input
                disabled={processing}
                value={data.username}
                onChange={(e) => setData("username", e.target.value)}
                placeholder="Nome de usuário"
                className="pr-10"
              />

              <div>
                <img
                  src={
                    "https://avatar.habbocity.me/?figure=hr-3260-1427.cc-3405-73-66.hd-180-1.ha-3129-100.fa-1206-1427.lg-285-73.sh-290-92&direction=2&head_direction=2&headonly=1"
                  }
                  className="absolute top-1/2 -right-2 -translate-y-1/3 transform object-cover text-gray-400"
                  alt="logo"
                />
              </div>
            </div>

            <div className="relative w-96">
              <Input
                disabled={processing}
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                placeholder="Sua senha de acesso"
                type="password"
                className="pr-10"
              />

              <div>
                <img
                  src={"/assets/images/password.png"}
                  className="absolute top-1/2 right-3 -translate-y-1/2 transform object-cover text-gray-400"
                  alt="logo"
                />
              </div>
            </div>

            <div className="cursor-pointer text-sm text-blue-500 hover:underline">
              <p>Esqueceu sua senha?</p>
            </div>
          </div>

          <Turnstile
            sitekey="0x4AAAAAABex1nmnNCd-eLvD"
            onVerify={(token) => {
              fetch("/login", {
                method: "POST",
                body: JSON.stringify({ token }),
              }).then((response) => {
                console.log(response);
              });
            }}
          />
          <Button
            type="submit"
            disabled={processing}
            className={"w-full cursor-pointer bg-emerald-600 p-6 duration-200 hover:bg-emerald-500 disabled:bg-emerald-500"}
          >
            {processing ? "Processando..." : "Entrar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
