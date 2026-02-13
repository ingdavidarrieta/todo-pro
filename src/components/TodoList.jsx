import {
    List,
    ListItem,
    Checkbox,
    ListItemText,
    IconButton
  } from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";
  
  export default function TodoList({
    todos,
    toggleTodo,
    removeTodo
  }) {
    return (
      <List>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton
                onClick={() => removeTodo(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <Checkbox
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
  
            <ListItemText
              primary={todo.text}
              sx={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none"
              }}
            />
          </ListItem>
        ))}
      </List>
    );
  }
  