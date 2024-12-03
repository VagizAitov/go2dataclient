import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
interface IForm {
  name: string;
  questions: Array<string>;
}

export default function useCreateForm() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["create form"],
    mutationFn: async ({ name, questions }: IForm) =>
      axios.post("http://localhost:5000/createForm", { name, questions }),
  });
  return { mutate, isPending };
}
