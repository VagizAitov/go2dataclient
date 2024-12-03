import { useState, useEffect } from "react";
import useCreateForm from "../../../hooks/useCreateForm";
import useGetForms from "../../../hooks/useGetForms";
import { useNavigate } from "react-router";

interface IForm {
  id: number;
  name: string;
  content: string;
}

export default function Forms() {
  const nav = useNavigate();
  const forms = useGetForms();
  useEffect(() => {
    if (localStorage.getItem("token") == "") {
      nav("/login");
    }
  }, []);

  return (
    <div>
      <button onClick={() => nav("/createForm")}>Создать форму</button>
      {forms.data?.data == undefined ? (
        <p>Loading...</p>
      ) : (
        forms.data.data.map((form: IForm) => (
          <div key={forms.data?.data.indexOf(form)}>
            <a onClick={() => nav(`/forms/${form.id}`)}>{form.name}</a>{" "}
            <p>
              {JSON.parse(form.content).map((question: string) => (
                <div key={JSON.parse(form.content).indexOf(question)}>
                  <p>{question}</p>
                  <input type="text" name="" id="" />
                </div>
              ))}
            </p>
          </div>
        ))
      )}
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          nav("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
}
