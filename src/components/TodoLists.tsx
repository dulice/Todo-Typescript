import { Dispatch, FC, SetStateAction } from 'react'
import { Todo } from '../Interfaces/todoInterface'
import { ListGroup } from 'react-bootstrap';
import List from './List';

interface TodoListProps {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoLists: FC<TodoListProps> = ({todos, setTodos}) => {

  return (
    <ListGroup>
        {todos.map(el => (
            <List el={el} key={el.id} todos={todos} setTodos={setTodos}/>
        ))}
    </ListGroup>
  )
}

export default TodoLists