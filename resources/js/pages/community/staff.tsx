import StaffCard from "@/components/community/staff/staff-card";
import StaffSection from "@/components/community/staff/staff-section";
import { TitleBox } from "@/components/title-box";
import AppLayout from "@/layouts/app-layout";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

type StaffsData = {
  id: number;
  name: string;
  badge: string;
  description: string;
  users: StaffUser[];
};

export type StaffUser = {
  id: number;
  username: string;
  figure: string;
  rank: number;
  hidden_staff: number;
  online: string;
  motto: string;
};

interface StaffPageProps {
  staffs: StaffsData[];
}

export default function StaffPage({ staffs }: StaffPageProps) {
  return (
    <>
      <AppLayout>
        <Head title="Equipe Staff" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="col-span-12 gap-y-2 lg:col-span-9 lg:w-[95%]"
        >
          <div className="mb-4">
            <TitleBox
              title="Equipe Staff"
              image="https://www.habboassets.com/assets/badges/TC983.gif"
              description="Todos os membros que compõem nossa equipe."
              imageIsBadge={true}
            />
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-4">
            {staffs
              .slice()
              .reverse()
              .map((staff, i) => (
                <StaffSection oneStaffInThisRole={staff.users.length === 1} title={staff.name} badge={staff.badge} underTitle={staff.description}>
                  <div className="flex flex-col gap-1">
                    {staff.users.map((staffUser, i) => (
                      <StaffCard user={staffUser} />
                    ))}
                  </div>

                  {staff.users.length === 0 && (
                    <div className="text-center text-sm text-zinc-700 dark:text-gray-400">
                      Não há ninguém ainda ocupando este cargo.
                      <br /> Quem sabe um dia seja você?
                    </div>
                  )}
                </StaffSection>
              ))}

            <StaffSection oneStaffInThisRole={false} title={"Equipe Hapixel"} badge={"STAFF"} underTitle={"Sobre nossa Equipe"}>
              <div className="flex flex-col gap-1">
                <p className="text-center text-left text-sm text-zinc-700 dark:text-gray-400">
                  A Equipe do Hapixel está sempre à sua disposição em prol de ajudar o máximo de usuários possíveis em meio a quaisquer tipo de
                  desafio acontecido dentro da comunidade.
                </p>
              </div>
            </StaffSection>
          </div>
        </motion.div>
      </AppLayout>
    </>
  );
}
