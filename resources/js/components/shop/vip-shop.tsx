import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Vip } from "@/pages/shop";
import { SharedData } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import { TabsContent } from "@radix-ui/react-tabs";
import { FormEventHandler, useState } from "react";

type Props = {
  vips: Vip[];
};

interface BuyVipFormProps {
  player: string;
  amount: number;
  description: string;
  player_email: string;
}

export default function VipShop({ vips }: Props) {
  const { auth } = usePage<SharedData>().props;
  const [vipId, setVipId] = useState<number>();
  const { data, setData, processing, post } = useForm<Required<BuyVipFormProps>>({
    amount: 0,
    player: auth.user.username,
    player_email: auth.user.email,
    description: "",
  });

  const handleBuyVip: FormEventHandler = (e) => {
    e.preventDefault();
    post("/shop/payment");
  };

  return (
    <TabsContent value="vip">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {vips.map((vip, i) => (
          <Card key={i} className="duration-300 hover:scale-105">
            <form onSubmit={handleBuyVip}>
              <CardHeader>
                <CardTitle>{vip.name}</CardTitle>
                <CardDescription>{vip.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-y-1">
                <img src={"https://www.habboassets.com/assets/badges/DE86K.gif"} className="h-10 w-10" />
                <ol className="text-muted-foreground list-disc space-y-1 pl-5 text-sm">
                  <li>450x diamantes</li>
                  <li>100x pixels</li>
                  <li>5x pixel coin</li>
                  <li>450x pontos de conquista</li>
                  <li>2x caixas premiadas</li>
                  <li>2x emblemas exclusivos</li>
                </ol>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setVipId(vip.id)} className="cursor-pointer">
                  Adquirir (R$ {vip.price})
                </Button>
              </CardFooter>
            </form>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
}
