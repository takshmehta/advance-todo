import React, { useState } from "react";
import {
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
} from "reactstrap";
import { v4 } from "uuid";

const Todoform = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert(
        "Please, would you care entering a todo in input box below ! "
      );
    }
    const todo = {
      todoString,
      id: v4(),
    };
    addTodos(todo);
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter a todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="info">Add todo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};
export default Todoform;
