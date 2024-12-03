import { Routes, Route } from "react-router-dom";
import Reg from "./Components/Reg/Reg";
import Forms from "./Components/Forms/Forms";
import Login from "./Components/Login/Login";
import Form from "./Components/Forms/Form/Form";
import CreatForm from "./Components/Forms/CreateForm/CreateForm";

function App() {
  return (
    <Routes>
      <Route path="/forms" element={<Forms />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forms/:id" element={<Form />} />
      <Route path="/createForm" element={<CreatForm />} />
    </Routes>
  );
}

export default App;
