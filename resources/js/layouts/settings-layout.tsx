import { TitleBox } from "@/components/title-box";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { type NavItem } from "@/types";
import { Link } from "@inertiajs/react";
import { Lock, Palette, Settings2, UserRoundPen } from "lucide-react";
import { type PropsWithChildren } from "react";

const sidebarNavItems: NavItem[] = [
  {
    title: "Perfil",
    href: "/users/me/settings",
    icon: UserRoundPen,
  },
  {
    title: "Preferências",
    href: "/users/me/settings/preferences",
    icon: Settings2,
  },
  {
    title: "Segurança",
    href: "/users/me/settings/security",
    icon: Lock,
  },
  {
    title: "Aparência",
    href: "/users/me/settings/appearance",
    icon: Palette,
  },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
  // When server-side rendering, we only render the layout on the client...
  if (typeof window === "undefined") {
    return null;
  }

  const currentPath = window.location.pathname;

  return (
    <div className="w-full px-4 py-6">
      <div className="mb-4">
        <TitleBox
          title={"Suas Configurações"}
          image={"https://www.habboassets.com/assets/badges/US597.gif"}
          imageIsBadge
          description={"Altere sua senha, tema e preferências in-game."}
        />
      </div>
      <div className="flex w-full flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
        <aside className="w-full max-w-xl lg:w-48">
          <nav className="flex flex-col space-y-1 rounded-md bg-white p-6 shadow-sm">
            {sidebarNavItems.map((item, index) => (
              <Button
                key={`${item.href}-${index}`}
                size="sm"
                variant="ghost"
                asChild
                className={cn("w-full justify-start gap-2", currentPath === item.href && "bg-muted")}
              >
                <Link href={item.href} prefetch className="w-full">
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.title}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </aside>

        <Separator className="my-6 md:hidden" />

        <div className="flex-1 md:max-w-2xl">
          <section className="w-xl max-w-xl space-y-12">{children}</section>
        </div>
      </div>
    </div>
  );
}
