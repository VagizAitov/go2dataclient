import { useNavigate } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

async function getData(token: string) {
  return axios.get(`http://localhost:5000/isAuthorized?token=${token}`);
}

export default function useIsAuth(token: string) {
  const nav = useNavigate();
  const loc = useLocation();
  const { data, isLoading } = useQuery({
    queryKey: ["isAuth"],
    queryFn: () => getData(token),
    select: (data) => data.data,
  });
  if (loc.pathname != "/login" && loc.pathname != "/reg") {
    if (!data && !isLoading) nav("/login");
  } else {
    if (data && !isLoading) nav("/forms");
  }
}
