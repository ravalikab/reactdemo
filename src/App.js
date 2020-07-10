import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const list = [];

function App() {
  const [text, setText] = useState("");
  const [listValue, setListValue] = useState([]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    setListValue(listValue.concat(text));
    setText("");
  };

  return (
    <div>
      <TextField
        onChange={handleChange}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={text}
      />
      <Button onClick={handleClick} variant="contained" color="secondary">
        Submit
      </Button>
      <ul>
        {listValue.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
