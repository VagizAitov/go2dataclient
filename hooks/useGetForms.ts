import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getData() {
  return axios.get("http://localhost:5000/forms");
}

export default function useGetForms() {
  const { data, refetch } = useQuery({
    queryKey: ["forms"],
    queryFn: getData,
  });
  return { data, refetch };
}
