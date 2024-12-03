import { useState } from "react";
import axios from "axios";
import useIsAuth from "../../../hooks/useIsAuth";
import { useNavigate } from "react-router";

interface IData {
  name: string;
  pass: string;
}

export default function Login() {
  const nav = useNavigate();
  useIsAuth(localStorage.getItem("token") || "");
  const [dataLogin, setDataLogin] = useState<IData>({ name: "", pass: "" });
  const submit = () => {
    axios
      .get(
        `http://localhost:5000/login?name=${dataLogin.name}&pass=${dataLogin.pass}`
      )
      .then((res) => {
        console.log(res);
        if (res.data[0]) {
          localStorage.setItem("token", res.data[1]);
          nav("/forms");
        }
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Логин"
        onChange={(e) =>
          setDataLogin((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="Пароль"
        onChange={(e) =>
          setDataLogin((prev) => ({ ...prev, pass: e.target.value }))
        }
      />
      <button onClick={submit}>Войти</button>
      <button onClick={() => nav("/reg")}>Reg</button>
    </div>
  );
}
