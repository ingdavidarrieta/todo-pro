import { Button } from "@mui/material";

export default function ThemeToggle({
  mode,
  setMode
}) {
  return (
    <Button
      variant="outlined"
      onClick={() =>
        setMode(prev =>
          prev === "light" ? "dark" : "light"
        )
      }
    >
      Toggle {mode === "light" ? "Dark" : "Light"}
    </Button>
  );
}
