import MainLayout from "@/main/components/layout/mainLayout/MainLayout";
import GameStats from "@/main/components/modules/home/GameStats";
import UsersInformation from "@/main/components/modules/home/UsersInformation";
import { fetcher } from "@/main/lib/fetcher";
import useSWR from "swr";

export default function Home() {
  return (
    <MainLayout>
      <GameStats />
      <UsersInformation />
    </MainLayout>
  );
}
