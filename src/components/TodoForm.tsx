import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import { Todo } from '../Interfaces/todoInterface';

interface TodoFormProps {
    todos: Todo[],
    setTodos: Dispatch<SetStateAction<Todo[]>>
}
const TodoForm: FC<TodoFormProps> = ({ todos, setTodos }) => {
    const [todo, setTodo] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setTodos((prev): Todo[] => [...prev, {id: Date.now(), list: todo, createdAt: new Date(), done: false}]);
        setTodo("");
        console.log(todos);
    }

  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className='d-flex gap-3'>
            <Form.Control placeholder='Add Todo List' name='list'  value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}/>
            <Button type='submit'>Add</Button>
        </Form.Group>
    </Form>
  )
}

export default TodoForm