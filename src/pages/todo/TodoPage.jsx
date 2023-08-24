import { useParams } from 'react-router-dom'
import { FormComponent } from '../../components/form/FormComponent'
import { useEffect, useState } from 'react';
import { MockUtils } from '../../utils/mock';

import * as Styled from './TodoPage.style';

export const TodoPage = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState();

  useEffect(() => {
    if(id) {
      setTodo(MockUtils.Todos.find(item => item.id === Number(id)))
    }
  }, [])

  return (
    <Styled.TodoFormContainer>
      <FormComponent todo={todo}/>
    </Styled.TodoFormContainer>
  )
}
