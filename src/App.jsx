import { useState } from "react";
import { ThemeProvider, CssBaseline, Container, Typography, Stack } from "@mui/material";

import { getTheme } from "./theme/theme";
import useTodos from "./hooks/useTodos";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [mode, setMode] = useState("light");
  const theme = getTheme(mode);

  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Stack spacing={3}>
          <Typography variant="h4" align="center">
            Professional Todo App
          </Typography>

          <ThemeToggle mode={mode} setMode={setMode} />
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
