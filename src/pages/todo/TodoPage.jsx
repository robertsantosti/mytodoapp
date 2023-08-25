import { useParams } from 'react-router-dom'
import { FormComponent } from '../../components/form/FormComponent'
import { useEffect, useState } from 'react';
import { ApiService } from '../../services/ApiService'

import * as Styled from './TodoPage.style';

export const TodoPage = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState();
  const service = new ApiService('tasks');

  useEffect(() => {
    if(id) {
      service.Show(id).then(response => setTodo(response))
    }
  }, [])

  return (
    <Styled.TodoFormContainer>
      <FormComponent todo={todo}/>
    </Styled.TodoFormContainer>
  )
}
