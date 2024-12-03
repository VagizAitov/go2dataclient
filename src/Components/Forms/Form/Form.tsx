import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
interface IForm {
  id: number;
  name: string;
  content: string;
}
export default function Form() {
  const params = useParams();
  const [form, setForm] = useState<IForm>({ id: 0, name: "", content: "" });
  const [formToSend, setFormToSend] = useState({});
  const [id, setId] = useState<number>(0);
  console.log(formToSend);
  useEffect(() => {
    axios.get(`http://localhost:5000/form?id=${params.id}`).then((res) => {
      setForm(res.data[0]);
      JSON.parse(res.data[0].content).map((elem: string) => {
        setFormToSend((prev) => ({ ...prev, [elem]: "" }));
      });
    });
    axios
      .get(
        `http://localhost:5000/idUser?token=${localStorage.getItem("token")}`
      )
      .then((res) => setId(res.data));
  }, []);

  const submit = () => {
    axios
      .post(
        `http://localhost:5000/completedForms?id=${form.id}&name=${
          form.name
        }&content=${JSON.stringify(formToSend)}&id_user=${id}`
      )
      .then((res) => console.log(res));
  };
  console.log(form);
  return (
    <div>
      {form.id == 0 ? (
        <p>Loading</p>
      ) : (
        <div>
          <p>{form.name}</p>
          {JSON.parse(form.content).map((elem: string) => (
            <div>
              <p>{elem}</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Введите текст"
                onChange={(e) =>
                  setFormToSend((prev) => ({ ...prev, [elem]: e.target.value }))
                }
              />
            </div>
          ))}
        </div>
      )}
      <button onClick={submit}>Отправить форму</button>
    </div>
  );
}
