import { MdPerson } from 'react-icons/md'
import * as Styled from './HeaderComponent.style'

export const HeaderComponent = () => {
  return (
    <Styled.Header data-testid="header-component">
      <Styled.Logo data-testid="header-logo">
        My<span>Todo</span>App
      </Styled.Logo>

      <Styled.ProfileContainer>
        <Styled.ProfileIcon>
          <MdPerson/>
        </Styled.ProfileIcon>
        <p>Robert Santos</p>
      </Styled.ProfileContainer>
    </Styled.Header>
  )
}
