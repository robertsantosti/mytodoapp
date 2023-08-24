import { MdPerson } from 'react-icons/md'
import * as Styled from './HeaderComponent.style'

export const HeaderComponent = () => {
  return (
    <Styled.Header>
      <Styled.Logo>
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
