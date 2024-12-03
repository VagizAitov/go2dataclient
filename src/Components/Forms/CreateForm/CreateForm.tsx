import { useState } from "react";
import useCreateForm from "../../../../hooks/useCreateForm";

export default function CreatForm() {
  const [inputs, setInputs] = useState<Array<number>>([]);
  const [name, setName] = useState<string>("");
  const [questions, setQuestions] = useState<Array<string>>([]);
  const { mutate } = useCreateForm();
  const submit = () => {
    console.log(questions);
    mutate({ name, questions });
  };
  return (
    <div>
      <button
        onClick={() => {
          setInputs((prev) => [...prev, prev.length]);
          setQuestions((prev) => [...prev, ""]);
        }}
      >
        Добавить вопрос
      </button>
      <input
        type="text"
        name=""
        id=""
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      {inputs.map((inp) => (
        <input
          placeholder={inp.toString()}
          key={inp}
          onChange={(e) => (questions[inp] = e.target.value)}
        />
      ))}
      <button onClick={submit}>Создать форму</button>
    </div>
  );
}
