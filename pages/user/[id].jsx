import MainLayout from "@/main/components/layout/mainLayout/MainLayout";
import User from "@/main/components/modules/user/User";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "@/main/lib/fetcher";
import Loading from "@/main/components/ui/Loading/Loading";
import Error from "../_error";

export default function user() {
  const router = useRouter();
  const { id } = router.query;
  const { data = {}, error, isLoading } = useSWR(`/api/${id}`, fetcher);

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
    <MainLayout
      meta={{
        title: "PROFILE - TECH CHALLENGE SCORE - JULIETT SANCHEZ",
      }}
    >
      <User data={data} />
    </MainLayout>
  );
}
