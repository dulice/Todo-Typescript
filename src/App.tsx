import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Container, Card } from "react-bootstrap";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import { Todo } from "./Interfaces/todoInterface";
import TodoList from "./components/TodoLists";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <Container>
      <Header />
      <Card style={{width: "375"}}>
        <Card.Header>
          <TodoForm todos={todos} setTodos={setTodos} />
        </Card.Header>
        <Card.Body>
          <TodoList todos={todos} setTodos={setTodos} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;
