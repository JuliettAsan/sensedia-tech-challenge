import MainLayout from "@/main/components/layout/mainLayout/MainLayout";
import GameStats from "@/main/components/modules/home/GameStats";
import UsersInformation from "@/main/components/modules/home/UsersInformation";
import Loading from "@/main/components/ui/Loading/Loading";
import Modal from "@/main/components/ui/modal/Modal";
import { fetcher } from "@/main/lib/fetcher";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import Error from "../_error";

export default function Home() {
  const [filterURI, setFilterURI] = useState("");
  const [modal, setModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const { data = {}, error, isLoading } = useSWR(`/api?${filterURI}`, fetcher);

  const handleConfirmDelete = async () => {
    if (userToDelete) {
      await handleDeleteUser(userToDelete);
      setUserToDelete(null);
    }
  };

  const handleDeleteUser = async (user) => {
    try {
      const res = await fetch(`/api/${user.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          ...user,
          name: `${user.name}|blocked`,
        }),
      });

      if (res.ok) {
        mutate(`/api?${filterURI}`);
        setModal(false);
      } else {
        console.error(`Failed to block user ${user.id}`);
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
    <MainLayout
      meta={{
        title: "USERS - TECH CHALLENGE SCORE - JULIETT SANCHEZ",
      }}
    >
      <GameStats />

      <UsersInformation
        data={data}
        setFilterURI={setFilterURI}
        isLoading={isLoading}
        pagesNumber={data?.pagesNumber || 1}
        handleDeleteUser={(user) => {
          setUserToDelete(user);
          setModal(true);
        }}
      />

      {/* MODAL */}
      <Modal isActive={modal} handleClose={() => setModal(false)}>
        <div>
          <p>
            <span className="icon icon-arrows"></span>
          </p>
          <p>¿Está seguro de que desea eliminar a este usuario? </p>
          <button className="button is-purple" onClick={handleConfirmDelete}>
            Confirmar
          </button>
        </div>
      </Modal>
    </MainLayout>
  );
}
