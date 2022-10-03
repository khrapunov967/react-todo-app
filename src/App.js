import React from "react";
import Title from "./components/Title/Title";
import Form from "./UI/Form/Form";


function App() {
  return (
    <div className="wrapper">
      <Title titleName={"To-Do Application"}/>
      <Form />
    </div>
  );
}

export default App;
