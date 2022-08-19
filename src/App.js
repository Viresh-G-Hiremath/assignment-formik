import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FormLists from "./components/FormLists";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  return (
    <div className="App">
      <Form setUsers={setUsers} users={users} />
      <FormLists users={users} />
    </div>
  );
}

export default App;
