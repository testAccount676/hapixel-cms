import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { BsCartCheck } from "react-icons/bs";
import { IoIosAlert } from "react-icons/io";

export default function Shop() {
  return (
    <>
      <AppLayout>
        <Head title="Loja" />
        <div className="mx-auto px-2 py-4 md:!px-6">
          <div className="flex flex-col gap-[30px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex h-[190px] w-[1000px] flex-row items-center justify-center gap-[60px] rounded-md bg-center"
              style={{
                backgroundImage: "url(/assets/images/shop-bg.png)",
                paddingInline: "30px",
                paddingBlock: "20px",
              }}
            >
              <div className="flex max-w-[262px] flex-col">
                <h1 className="text-lg font-semibold text-white">Seja um jogador VIP</h1>
                <span className="text-sm text-white">Mesmo com nosso plano mais barato você garante uma experiência fantástica.</span>
              </div>

              <img src="/assets/images/hc.png" className="hidden duration-300 hover:scale-90 lg:block" />

              <div className="flex max-w-[262px] flex-col">
                <h1 className="text-lg font-semibold text-white">Raros exclusivos</h1>
                <span className="text-sm text-white">Adquira coleções de raros com poucos lotes e esbanje sua riqueza no servidor!</span>
              </div>
            </motion.div>

            <div className="flex w-full flex-row flex-wrap gap-[22px] lg:!flex-nowrap">
              <div className="flex w-full max-w-none flex-col gap-[12px] md:!w-auto md:!max-w-[286px]">
                <div className="flex flex-col gap-[12px]">
                  <div className="flex flex-row items-center gap-[12px]">
                    <img src="https://www.habboassets.com/assets/badges/SGO01.gif" alt="" className="" />
                    <h2 className="text-xl font-semibold">Planos VIP's</h2>
                  </div>
                  <span className="border-b border-zinc-300 text-sm text-zinc-500" style={{ paddingBottom: "12px" }}>
                    Nossos planos VIP's foram feitos para um perfeito equilíbrio em seus privilégios, concedendo a usuários que os adquirirem
                    vantagens fantásticas, verifique!
                  </span>
                  <div className="flex flex-row items-center gap-[12px]">
                    <img alt="" src="https://www.habboassets.com/assets/badges/FRH97.gif" />
                    <h2 className="text-lg font-semibold">Benefícios VIP's</h2>
                  </div>

                  <Accordion type="single" collapsible className="flex w-full flex-col gap-y-2" defaultValue="item-1">
                    <AccordionItem value="item-4" className="rounded-md bg-white px-2.5 shadow-md">
                      <AccordionTrigger className="flex items-center gap-2 py-2">
                        <p className="flex items-center gap-2">
                          <img src="https://www.habboassets.com/assets/badges/DE50J.gif" className="h-8 w-8" /> Espólios
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-sm">
                        <ul className="flex flex-col gap-y-2">
                          <li className="flex flex-row items-center gap-[4px] text-[13px] text-zinc-500">
                            <ShieldCheck size={17} />
                            450 diamantes
                          </li>
                          <li className="flex flex-row items-center gap-[4px] text-[13px] text-zinc-500">
                            {" "}
                            <ShieldCheck size={17} />
                            100 pixels{" "}
                          </li>
                          <li className="flex flex-row items-center gap-[4px] text-[13px] text-zinc-500">
                            {" "}
                            <ShieldCheck size={17} />5 PixelCoin{" "}
                          </li>
                          <li className="flex flex-row items-center gap-[4px] text-[13px] text-zinc-500">
                            {" "}
                            <ShieldCheck size={17} />
                            450 pontos de conquistas
                          </li>
                          <li className="flex flex-row items-center gap-[4px] text-[13px] text-zinc-500">
                            {" "}
                            <ShieldCheck size={17} />2 caixas premiadas
                          </li>
                          <li className="flex flex-row items-center gap-[4px] text-[13px] text-zinc-500">
                            {" "}
                            <ShieldCheck size={17} />2 emblemas exclusivos
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1" className="rounded-md bg-white px-2.5 shadow-md">
                      <AccordionTrigger className="flex items-center gap-2 py-2">
                        <p className="flex items-center gap-2">
                          <img src="/assets/images/vip2.gif" className="h-8 w-8" /> In-game
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers
                          unparalleled performance and reliability.
                        </p>
                        <p>
                          Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and
                          experts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="rounded-md bg-white px-2.5 shadow-md">
                      <AccordionTrigger className="flex items-center gap-2 py-2">
                        <p className="flex items-center gap-2">
                          <img src="https://www.habboassets.com/assets/badges/HHE06.gif" className="h-8 w-8" /> Comandos exclusivos
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers
                          unparalleled performance and reliability.
                        </p>
                        <p>
                          Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and
                          experts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="rounded-md bg-white px-2.5 shadow-md">
                      <AccordionTrigger className="flex items-center gap-2 py-2">
                        <p className="flex items-center gap-2">
                          <img src="https://www.habboassets.com/assets/badges/FRH43.gif" className="h-8 w-8" /> Discord
                        </p>
                      </AccordionTrigger>
                      <AccordionContent className="flex flex-col gap-4 text-balance">
                        <p>
                          Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers
                          unparalleled performance and reliability.
                        </p>
                        <p>
                          Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and
                          experts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <div className="flex h-fit w-full flex-row flex-wrap gap-x-4 gap-y-1">
                <motion.div
                  className="w-[45%]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="border-none">
                    <CardHeader>
                      <CardTitle>
                        <p className="flex items-center gap-x-2">
                          VIP 1 - Plano Básico <img className="h-8 w-8" src="https://www.habboassets.com/assets/badges/DE88K.gif" />{" "}
                        </p>
                      </CardTitle>
                      <CardDescription>O plano ideal para começar</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[90px]">
                        <h2 className="text-3xl font-bold">R$ 19.90</h2>

                        <Button className="mt-3.5 flex cursor-pointer items-center gap-x-2">
                          Adquirir <BsCartCheck />
                        </Button>
                      </div>
                    </CardContent>

                    <CardFooter className="text-sm">
                      <p className="flex items-center gap-x-2">
                        Detalhes do Plano <IoIosAlert size={18} />
                      </p>
                    </CardFooter>
                  </Card>
                </motion.div>

                <motion.div
                  className="w-[45%]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="border-none">
                    <CardHeader>
                      <CardTitle>
                        <p className="flex items-center gap-x-2">
                          VIP 2 - Plano Premium <img className="h-8 w-8" src="https://www.habboassets.com/assets/badges/DE89K.gif" />{" "}
                        </p>
                      </CardTitle>
                      <CardDescription>O plano ideal para tryhardar</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[90px]">
                        <h2 className="text-3xl font-bold">R$ 29.90</h2>
                        <Button className="mt-3.5 flex cursor-pointer items-center gap-x-2">
                          Adquirir <BsCartCheck />
                        </Button>
                      </div>
                    </CardContent>

                    <CardFooter className="text-sm">
                      <p className="flex items-center gap-x-2">
                        Detalhes do Plano <IoIosAlert size={18} />
                      </p>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
