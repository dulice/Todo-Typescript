import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { Button, Form, Alert } from 'react-bootstrap';
import { Todo } from '../Interfaces/todoInterface';

interface TodoFormProps {
    setTodos: Dispatch<SetStateAction<Todo[]>>
}
const TodoForm: FC<TodoFormProps> = ({ setTodos }) => {
    const [todo, setTodo] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!todo) {
            return setErrorMsg("Please fill the field!");
        }
        setTodos((prev): Todo[] => [...prev, {id: Date.now(), list: todo, createdAt: new Date(), done: false}]);
        setErrorMsg("");
        setTodo("");
    }

  return (
    <>  
        {errorMsg && <Alert variant='danger'>{errorMsg}</Alert>}
        <Form onSubmit={handleSubmit}>
            <Form.Group className='d-flex gap-3'>
                <Form.Control placeholder='Add Todo List' name='list'  value={todo} onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}/>
                <Button type='submit'>Add</Button>
            </Form.Group>
        </Form>
    </>
  )
}

export default TodoForm