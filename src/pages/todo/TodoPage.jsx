import { useParams } from 'react-router-dom'
import { FormComponent } from '../../components/form/FormComponent'
import { useEffect, useState } from 'react';
import { MockUtils } from '../../utils/mock';

export const TodoPage = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState();

  useEffect(() => {
    if(id) {
      setTodo(MockUtils.Todos.find(item => item.id === Number(id)))
    }
  }, [])

  return (
    <div className="TodoFormContainer">
      <FormComponent todo={todo}/>
    </div>
  )
}
