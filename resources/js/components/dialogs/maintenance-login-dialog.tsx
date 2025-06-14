import { LoginFormProps } from "@/components/dialogs/login-dialog";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "@inertiajs/react";
import { motion, MotionValue } from "framer-motion";
import { FormEventHandler } from "react";
import Turnstile from "react-turnstile";

interface MaintenanceLoginDialogProps {
  border: MotionValue<string>;
  boxShadow: MotionValue<string>;
}

export default function MaintenanceLoginDialog({ border, boxShadow }: MaintenanceLoginDialogProps) {
  const { processing, data, setData, post } = useForm<Required<LoginFormProps>>({
    username: "",
    password: "",
  });

  const handleLoginUser: FormEventHandler = (e) => {
    e.preventDefault();

    post("/auth/login");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          style={{
            border,
            boxShadow,
          }}
          whileTap={{
            scale: 0.985,
          }}
          whileHover={{
            scale: 1.05,
          }}
          className="group relative flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-sm text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Login Staff
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="p-2">
          <DialogTitle>Login Staff</DialogTitle>
          <DialogDescription>Acesso totalmente restrito à membros da equipe.</DialogDescription>
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
