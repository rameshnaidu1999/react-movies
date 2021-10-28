import { TextField, Button } from "@mui/material";
import React from "react";

const CreateTodo = () => {
  return (
    <section>
      <TextField
        id="outlined-basic"
        label="Todo"
        variant="outlined"
        fullWidth
      />
      <Button
        sx={{ marginY: 3 }}
        fullWidth
        variant="contained"
        color="secondary"
      >
        {" "}
        Add Todo{" "}
      </Button>
    </section>
  );
};

export default CreateTodo;
