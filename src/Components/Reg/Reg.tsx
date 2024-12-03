import axios from "axios";
import { useEffect, useState } from "react";
import useIsAuth from "../../../hooks/useIsAuth";
import { useNavigate } from "react-router";

export default function Reg() {
  const nav = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    pass: "",
    role: "user",
  });

  const submit = () => {
    axios
      .post(
        `http://localhost:5000/reg?name=${userData.name}&pass=${userData.pass}&role=${userData.role}`
      )
      .then((res) => {
        localStorage.setItem("token", res.data);
        nav("/forms");
      });
  };
  useIsAuth(localStorage.getItem("token") || "");

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="pass"
        onChange={(e) =>
          setUserData((prev) => ({ ...prev, pass: e.target.value }))
        }
      />
      <button onClick={submit}>Submit</button>
      <button onClick={() => nav("/login")}>Login</button>
    </div>
  );
}
