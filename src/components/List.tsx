import { ChangeEvent, Dispatch, FC, FormEvent, MouseEvent, SetStateAction, useState } from "react";
import { ListGroup, Row, Col, Button, Form } from "react-bootstrap";
import { Todo } from "../Interfaces/todoInterface";
import { IoMdCheckmark } from "react-icons/io";

interface listProps {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  el: Todo;
}
const Lists: FC<listProps> = ({ setTodos, todos, el }) => {
  const [editTodo, setEditTodo] = useState<string>(el.list);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = (e: FormEvent<HTMLFormElement> | MouseEvent ,id: number) => {
    e.preventDefault();
    setIsEdit(false);
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, list: editTodo } : todo))
    );
  };

  const handleDelte = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleCheckDone = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.checked) {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
      );
    } else {
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, done: false } : todo))
      );
    }
  };
  return (
    <ListGroup.Item key={el.id}>
      <Row>
        <Col
          className={`${el.done && "text-decoration-line-through"} text-wrap`}
        >
          <Form onSubmit={(e) => handleEdit(e, el.id)}>
            <Form.Group className="d-flex gap-2">
              <Form.Check
                id={el.id.toString()}
                onChange={(e) => handleCheckDone(e, el.id)}
              />
              {!el.done && isEdit ? (
                <Form.Control
                  name="edit"
                  value={editTodo}
                  autoFocus={true}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEditTodo(e.target.value)
                  }
                />
              ) : (
                <Form.Label htmlFor={el.id.toString()}>{el.list}</Form.Label>
              )}
            </Form.Group>
          </Form>
        </Col>
        <Col className="d-flex gap-1">
          {!el.done && isEdit ? (
            <Button onClick={(e: MouseEvent) => handleEdit(e, el.id)}>
              <IoMdCheckmark />
            </Button>
          ) : (
            <Button variant="success" onClick={() => setIsEdit(true)}>
              Edit
            </Button>
          )}
          <Button variant="outline-danger" onClick={() => handleDelte(el.id)}>
            Delete
          </Button>
        </Col>
      </Row>
      <small className="text-black-50">{el.createdAt.toDateString()}</small>
    </ListGroup.Item>
  );
};

export default Lists;
