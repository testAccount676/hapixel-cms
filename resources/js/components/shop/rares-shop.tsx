import { Card, CardContent } from "@/components/ui/card";
import { TabsContent } from "@radix-ui/react-tabs";

export default function RaresShop() {
  return (
    <TabsContent value="rares">
      <Card>
        <CardContent className="flex items-center gap-x-2">
          <img src="https://www.habboassets.com/assets/images/dump/com/web_promo_small/habbopresentsmallpromo.png" alt="sla" />

          <p>Ainda não está pronto... Volte daqui algum tempo</p>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
