import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler, useState } from "react";
import Turnstile from "react-turnstile";
import { toast } from "sonner";

interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: "M" | "F";
}

export default function Register() {
  const { data, setData, processing, errors, reset, post } = useForm<Required<RegisterFormProps>>({
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    gender: "M",
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleRegister: FormEventHandler = (e) => {
    e.preventDefault();

    if (data.password !== data.password_confirmation) {
      toast.warning("As senhas não coincidem");
      return;
    }

    // console.log(data);
    post("/auth/register");
  };

  return (
    <>
      <AppLayout>
        <Head title={"Registrar"}></Head>
        <div className="flex w-full items-center justify-center gap-8">
          <div className={"mt-2 rounded-md bg-white p-2 shadow-sm"}>
            <div className="mb-2 flex w-full items-center justify-center">
              <div className={"rounded-md bg-emerald-500 p-2 text-zinc-100"}>
                <h1 className={"text-xl font-semibold"}>Crie sua conta</h1>
                <p className={"text-sm"}>Crie uma conta grátis, e seja parte do nosso maravilhoso hotel!</p>
              </div>
            </div>

            <form onSubmit={handleRegister}>
              <div className={"flex flex-col gap-y-2"}>
                <p className={"text-xs"}>Você usará este nome de usuário para entrar no Hotel.</p>
                <Input
                  placeholder={"Nome de usuário"}
                  required
                  id="username"
                  disabled={processing}
                  onChange={(e) => setData("username", e.target.value)}
                  autoFocus
                  value={data.username}
                />
                {errors.username && <span className="text-sm text-red-500">{errors.username}</span>}
              </div>
              <div className={"mt-2 flex flex-col gap-y-2"}>
                <p className={"text-xs"}>Insira um e-mail válido para caso perca sua senha.</p>
                <Input
                  required
                  id="email"
                  disabled={processing}
                  onChange={(e) => setData("email", e.target.value)}
                  autoFocus
                  value={data.email}
                  placeholder={"johndoe@gmail.com"}
                />
                {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
              </div>

              <div className={"mt-2 flex flex-col gap-y-2"}>
                <p className={"text-xs"}>Sua senha é importante, pense em algo criativo e seguro.</p>
                <Input
                  id="password"
                  required
                  disabled={processing}
                  value={data.password}
                  autoFocus
                  onChange={(e) => setData("password", e.target.value)}
                  type="password"
                  placeholder={"******"}
                />
                {errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
              </div>
              <div className={"mt-2 flex flex-col gap-y-2"}>
                <p className={"text-xs"}>Confirme sua senha antes de prosseguir.</p>
                <Input
                  type="password"
                  required
                  disabled={processing}
                  autoFocus
                  value={data.password_confirmation}
                  onChange={(e) => setData("password_confirmation", e.target.value)}
                  placeholder={"******"}
                />
                {errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
              </div>

              <div className="mt-4 flex gap-2">
                <label className="flex w-32 cursor-pointer items-center justify-center rounded-sm bg-blue-300 p-4 duration-200 hover:bg-blue-400">
                  <input
                    checked={data.gender === "M"}
                    onChange={(e) => setData("gender", e.target.value as "M")}
                    value="M"
                    type="radio"
                    name="gender"
                    className="hidden"
                  />
                  <img src="/assets/images/male.png" alt="Homem" />
                </label>

                <label className="flex w-32 cursor-pointer items-center justify-center rounded-sm bg-pink-300 p-4 duration-200 hover:bg-pink-400">
                  <input
                    checked={data.gender === "F"}
                    name="gender"
                    onChange={(e) => setData("gender", e.target.value as "F")}
                    type="radio"
                    value="F"
                    className="hidden"
                  />
                  <img src="/assets/images/female.png" alt="Mulher" />
                </label>
                {errors.gender && <span className="text-sm text-red-500">{errors.gender}</span>}
              </div>

              <div className={"mt-3"}>
                <Turnstile
                  sitekey="0x4AAAAAABex1nmnNCd-eLvD"
                  onVerify={(token) => {
                    fetch("/auth/register", {
                      method: "POST",
                      body: JSON.stringify({ token }),
                    }).then((response) => {
                      console.log(response);
                    });
                  }}
                />
                <Button type="submit" className={"cursor-pointer bg-emerald-500 p-5 text-zinc-100 duration-200 hover:bg-emerald-600"}>
                  Criar conta
                </Button>
              </div>
            </form>
          </div>

          <div className="hidden md:block">
            <img src={"/assets/images/register-img.png"} alt={"Register"} />
          </div>
        </div>
      </AppLayout>
    </>
  );
}
