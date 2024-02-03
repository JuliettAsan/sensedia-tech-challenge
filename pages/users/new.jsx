import MainLayout from "@/main/components/layout/mainLayout/MainLayout";
import GameStats from "@/main/components/modules/home/GameStats";
import RegisterForm from "@/main/components/modules/home/RegisterForm";
import Loading from "@/main/components/ui/Loading/Loading";
import { fetcher } from "@/main/lib/fetcher";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import { v4 as uuid } from "uuid";

export default function Home() {
  const [resetForm, setResetForm] = useState(false);
  const [filterURI, setFilterURI] = useState("");
  const { data = {}, error, isLoading } = useSWR(`/api?${filterURI}`, fetcher);

  const handleCreateUser = async (user) => {
    try {
      console.log(`Creating ${user.username}`);
      const res = await fetch(`/api`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: user.email,
          name: user.email,
          password: uuid().toString(),
        }),
      });
      if (res.ok) {
        mutate(`/api?${filterURI}`);
        setResetForm(true);
        console.log(`Successfully created`);
      } else {
        console.error(`Failed to block user ${user.id}`);
        setResetForm(false);
      }
    } catch (error) {
      console.error("Error blocking user", error);
    }
  };

  if (isLoading)
    return (
      <MainLayout
        meta={{
          title: "TECH CHALLENGE SCORE - JULIETT SANCHEZ",
        }}
      >
        <Loading />
      </MainLayout>
    );

  if (error || data.error) return <Error statusCode={data.status || 500} />;

  return (
    <MainLayout>
      <GameStats />

      <RegisterForm
        handleCreateUser={handleCreateUser}
        setResetForm={setResetForm}
      />
    </MainLayout>
  );
}
