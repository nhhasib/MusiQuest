import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useSelectedClasses = () => {

    const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');
const { data: selectedClasses,refetch = [] } = useQuery(
    ["selectedClass", user?.email],
    async () => {
      const res = await fetch(
        `http://localhost:5000/selectedClass/?email=${user?.email}`,{ headers: {
          authorization: `bearer ${token}`
      }}
      );
      return res.json();
    }
  )

    return (
        [selectedClasses,refetch]
    );
};

export default useSelectedClasses;