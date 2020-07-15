import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ClearIcon from "@material-ui/icons/Clear";
import { Typography } from "@material-ui/core";

function App() {
  const [text, setText] = useState("");
  const [listValue, setListValue] = useState([]);
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setListValue(listValue.concat({ text: text, isCompleted: false }));
    setText("");
  };
  const handleClose = (index) => {
    listValue.splice(index, 1);
    setListValue([...listValue]);
  };
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      handleClick();
    }
  };
  const checkboxValue = (e, index) => {
    listValue[index].isCompleted = e.target.checked;
    setListValue([...listValue]);
  };

  return (
    <div className="container">
      <TextField
        className="textfield"
        onChange={handleChange}
        onKeyDown={keyPress}
        id="outlined-basic"
        label="to-do"
        variant="outlined"
        value={text}
        size="small"
      />
      <Button onClick={handleClick} variant="contained" color="secondary">
        Submit
      </Button>
      <List>
        {listValue.map((item, index) => {
          if (!item.isCompleted)
            return (
              <ListItem className="listitem" key={index}>
                <Checkbox
                  checked={item.isCompleted}
                  onChange={(e) => checkboxValue(e, index)}
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <ListItemText primary={item.text} />
                <ListItemIcon>
                  <ClearIcon
                    onClick={() => {
                      handleClose(index);
                    }}
                  />
                </ListItemIcon>
              </ListItem>
            );
        })}
      </List>
      <Typography variant="h4">Completed</Typography>

      <List className="strikethrough">
        {listValue.map((item, index) => {
          if (item.isCompleted)
            return (
              <ListItem className="listitem" key={index}>
                <Checkbox
                  checked={item.isCompleted}
                  onChange={(e) => checkboxValue(e, index)}
                  inputProps={{ "aria-label": "uncontrolled-checkbox" }}
                />
                <ListItemText primary={item.text} />
                <ListItemIcon>
                  <ClearIcon
                    onClick={() => {
                      handleClose(index);
                    }}
                  />
                </ListItemIcon>
              </ListItem>
            );
        })}
      </List>
    </div>
  );
}

export default App;
