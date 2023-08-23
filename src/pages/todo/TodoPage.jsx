import { useParams } from 'react-router-dom'
import { FormComponent } from '../../components/form/FormComponent'
import { useEffect, useState } from 'react';

const todos = [
  {
    id: 1,
    title: 'Tarefa 1',
    description: 'Lorem ipsum dolor sit',
    status: false,
  },
  {
    id: 2,
    title: 'Tarefa 2',
    description: 'Lorem ipsum dolor sit',
    status: true,
  },
]

export const TodoPage = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState();

  useEffect(() => {
    if(id) {
      setTodo(todos.find(item => item.id === Number(id)))
    }
  }, [])

  return (
    <div className="TodoFormContainer">
      <FormComponent todo={todo}/>
    </div>
  )
}
