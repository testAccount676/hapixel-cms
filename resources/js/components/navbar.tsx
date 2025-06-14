import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SharedData } from "@/types";
import { Link, router, usePage } from "@inertiajs/react";
import React from "react";
import { toast } from "sonner";

export default function Navbar() {
  const { authenticated, auth, setting } = usePage<SharedData>().props;

  return (
    <nav className="mb-1 w-full bg-white p-5 shadow-sm">
      <ul className={"flex items-center justify-center gap-x-5 text-sm font-[580] text-zinc-700 uppercase"}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer font-semibold uppercase">
                <img src="/assets/images/home.png" className="mr-2" alt={"Home"} />
                <Link href={authenticated ? "/users/me" : "/"}>{authenticated ? auth.user.username : "Início"}</Link>
              </NavigationMenuTrigger>

              {authenticated ? (
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="/users/me/settings"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">Olá jogador!</div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Caso precise alterar qualquer configuração ou dados clique aqui.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/users/me/settings" title="Suas preferências">
                      Altere configurações importantes
                    </ListItem>
                    <ListItem
                      onClick={() => {
                        router.post("/logout");
                        toast.success("Bye bye!");
                      }}
                      href="#"
                      title="Sair da conta"
                    >
                      Você irá encerrar a atual sessão
                    </ListItem>
                    <ListItem href="/users/me/profile" title="Seu perfil">
                      Acesse informações do seu usuário
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              ) : null}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer font-semibold uppercase">
                <img alt={"Community"} src="/assets/images/community.png" className="mr-2" />
                Comunidade
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/community/staff" title="Equipe Staff">
                    Todos os membros da equipe
                  </ListItem>
                  <ListItem href="/community/photos" title="Fotos">
                    Fotos dos usuários
                  </ListItem>
                  <ListItem href="/community/news" title="Notícias">
                    Notícias recentes do servidor
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/community/leaderboard" className="cursor-pointer font-semibold uppercase">
                <div className="flex items-center">
                  <img alt={"Leaderboards"} src="/assets/images/leaderboards.png" className="mr-2" />
                  Hall
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/shop" className="cursor-pointer font-semibold uppercase">
                <div className="flex">
                  <img alt={"Credits"} src="/assets/images/currencies/credits.gif" className="mr-2" />
                  <div>Loja</div>
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {authenticated && auth.user.rank >= setting.dashboard_min_rank && (
              <NavigationMenuItem>
                <NavigationMenuLink className="cursor-pointer font-semibold uppercase">
                  <div className="flex">
                    <div>
                      <span className="text-red-400">
                        <a href={setting.dashboard_url} target="_blank">
                          Dashboard
                        </a>
                      </span>
                    </div>
                  </div>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </ul>
    </nav>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
