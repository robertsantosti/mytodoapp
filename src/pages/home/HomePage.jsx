import { CardComponent } from '../../components/card/CardComponent'
import { MockUtils } from '../../utils/mock'

import * as Styled from './HomePage.style';

export const HomePage = () => {
  return (
    <Styled.HomeContainer>
      <Styled.CardsContainer>
        { MockUtils.Todos.map(todo => 
          <CardComponent todo={todo} key={todo.id}/> 
        )}
      </Styled.CardsContainer>
    </Styled.HomeContainer>
  )
}
