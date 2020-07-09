import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

function App() {
  const [value, setValue] = useState(1);

  const handleAddClick = () => {
    setValue(value + 1);
  };
  const handleSubtractClick = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <Container maxWidth="sm">
        <Typography variant="h1" gutterBottom>
          {value}
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleAddClick}>
          Add
        </Button>
        <Box m={1} />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSubtractClick}
        >
          Subtract
        </Button>
      </Container>
    </div>
  );
}

export default App;
