import { useEffect, useState } from 'react';
import { CardComponent } from '../../components/card/CardComponent'
import { ApiService } from '../../services/ApiService'

import * as Styled from './HomePage.style';

export const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const service = new ApiService('tasks');

  const getTasks = async () => {
    service.Get('tasks').then(response => {
      setTasks(response);
    })
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Styled.HomeContainer>
      <Styled.CardsContainer>
        { tasks.map(todo => 
          <CardComponent todo={todo} key={todo.id}/> 
        )}
      </Styled.CardsContainer>
    </Styled.HomeContainer>
  )
}
