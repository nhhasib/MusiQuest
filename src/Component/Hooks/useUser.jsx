import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { data: currentUserStatus, refetch = [] } = useQuery(
    ["user", user?.email],
    async () => {
      const res = await fetch(
        `https://musi-quest-server.vercel.app/user/?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      return res.json();
    }
  );
  return [currentUserStatus, refetch];
};

export default useUser;
