import { useForm, usePage } from "@inertiajs/react";
import { FormEventHandler, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircleIcon } from "lucide-react";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SharedData } from "@/types";
import { toast } from "sonner";

export default function DeleteUser({ processingEditForm }: { processingEditForm: boolean }) {
  const passwordInput = useRef<HTMLInputElement>(null);
  const { data, setData, delete: destroy, processing, reset, errors, clearErrors } = useForm<Required<{ password: string }>>({ password: "" });

  const deleteUser: FormEventHandler = (e) => {
    e.preventDefault();

    destroy("/users/me/settings", {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current?.focus(),
      onFinish: () => reset(),
    });
  };

  const { flash } = usePage<SharedData>().props;

  const closeModal = () => {
    clearErrors();
    reset();
  };

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message, { richColors: true });
    }
  }, [flash]);

  return (
    <div className="space-y-6">
      <div className="w-full space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
        <div className="relative space-y-0.5 text-red-600 dark:text-red-100">
          <p className="flex items-center gap-x-1 font-medium">
            <AlertCircleIcon /> AVISO
          </p>
          <p className="text-sm">Favor, proceda com cautela. Esta ação não poderá ser desfeita.</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button disabled={processingEditForm} variant="destructive">
              Deletar conta
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Tem certeza que deseja deletar sua conta?</DialogTitle>
            <DialogDescription>
              Assim que sua conta for excluída, todos os seus recursos e dados também serão excluídos permanentemente. Digite sua senha para confirmar
              que você deseja excluir sua conta permanentemente.
            </DialogDescription>
            <form className="space-y-6" onSubmit={deleteUser}>
              <div className="grid gap-2">
                <Label htmlFor="password" className="sr-only">
                  Senha
                </Label>

                <Input
                  id="password"
                  type="password"
                  name="password"
                  ref={passwordInput}
                  value={data.password}
                  onChange={(e) => setData("password", e.target.value)}
                  placeholder="Senha"
                />
              </div>

              <DialogFooter className="gap-2">
                <DialogClose asChild>
                  <Button variant="secondary" onClick={closeModal}>
                    Cancelar
                  </Button>
                </DialogClose>

                <Button variant="destructive" disabled={processing} asChild>
                  <button type="submit">Deletar conta</button>
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
