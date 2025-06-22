import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import AppLayout from "@/layouts/app-layout";
import SettingsLayout from "@/layouts/settings-layout";
import { SharedData } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

type Preference = {
  allow_follow: "1" | "0";
  hide_online: "1" | "0";
  allow_friend_requests: "1" | "0";
  allow_trade: "1" | "0";
  follow_friend_mode: "EVERYBODY" | "FRIENDS" | "NOBODY";
  allow_mimic: "1" | "0";
  mention_type: "ALL" | "FRIENDS" | "NONE";
};

interface UserPreferencesPageProps {
  preferences: Preference[];
}

export default function UserPreferencesPage({ preferences }: UserPreferencesPageProps) {
  const preference = preferences[0];

  const { data, setData, processing, put, reset } = useForm({
    allow_follow: preference.allow_follow === "1",
    hide_online: preference.hide_online === "1",
    allow_friend_requests: preference.allow_friend_requests === "1",
    allow_trade: preference.allow_trade === "1",
    allow_mimic: preference.allow_mimic === "1",
    follow_friend_mode: preference.follow_friend_mode,
    mention_type: preference.mention_type,
  });

  function handleUpdatePreferences(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    put("/users/me/settings/preferences", {
      onSuccess: () => reset(),
    });
  }

  const { flash } = usePage<SharedData>().props;

  useEffect(() => {
    if (flash.message) {
      toast.success(flash.message, {
        richColors: true,
      });
    }
  }, [flash]);
  return (
    <>
      <AppLayout>
        <SettingsLayout>
          <div className="rounded-md bg-white p-6 shadow-sm">
            <form onSubmit={handleUpdatePreferences}>
              <div className="mb-6 space-y-6">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="allow_follow">Permitir que outros usuários do hotel te sigam?</Label>
                  <Switch id="allow_follow" checked={data.allow_follow} onCheckedChange={(checked) => setData("allow_follow", checked)} />
                </div>

                <div className="flex items-center space-x-2">
                  <Label htmlFor="hide_online">Deseja ficar com status oculto de outros jogadores?</Label>
                  <Switch id="hide_online" checked={data.hide_online} onCheckedChange={(checked) => setData("hide_online", checked)} />
                </div>

                <div className="flex items-center space-x-2">
                  <Label htmlFor="allow_friend_requests">Permitir solicitações de amizades de outros jogadores?</Label>
                  <Switch
                    id="allow_friend_requests"
                    checked={data.allow_friend_requests}
                    onCheckedChange={(checked) => setData("allow_friend_requests", checked)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Label htmlFor="allow_trade">Permitir que iniciem trocas/negociações com você?</Label>
                  <Switch id="allow_trade" checked={data.allow_trade} onCheckedChange={(checked) => setData("allow_trade", checked)} />
                </div>

                <div className="flex items-center space-x-2">
                  <Label htmlFor="allow_mimic">Habilitar cópia do seu visual por outros jogadores?</Label>
                  <Switch id="allow_mimic" checked={data.allow_mimic} onCheckedChange={(checked) => setData("allow_mimic", checked)} />
                </div>
              </div>

              <div className="mb-4 flex flex-col gap-y-2">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="follow_friend_mode">Quem pode te seguir no hotel?</Label>
                  <Select
                    defaultValue={data.follow_friend_mode}
                    onValueChange={(e) => setData("follow_friend_mode", e as "EVERYBODY" | "FRIENDS" | "NOBODY")}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="EVERYBODY">TODOS</SelectItem>
                        <SelectItem value="FRIENDS">AMIGOS</SelectItem>
                        <SelectItem value="NOBODY">NINGUÉM</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col space-y-2">
                  <Label htmlFor="mention_type">Quem pode te mencionar no hotel?</Label>
                  <Select defaultValue={data.mention_type} onValueChange={(e) => setData("mention_type", e as "FRIENDS" | "ALL" | "NONE")}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="FRIENDS">AMIGOS</SelectItem>
                        <SelectItem value="ALL">TODOS</SelectItem>
                        <SelectItem value="NONE">NINGUÉM</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
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
          </div>
        </SettingsLayout>
      </AppLayout>
    </>
  );
}
