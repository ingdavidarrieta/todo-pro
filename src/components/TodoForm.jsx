import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        fullWidth
        label="New Task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Stack>
  );
}
