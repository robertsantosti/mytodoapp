import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../../components/button/ButtonComponent"

import * as Styled from './ErrorPage.style'

export const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  }

  return (
    <Styled.ErrorContainer>
      <h3>Opss! Página não encontrada...</h3>
      <p>Não Conseguimos encontrar a página solicitada!</p>
      <ButtonComponent onClick={() => { navigateTo('/') }}>
        Votar para pagina inicial
      </ButtonComponent>
    </Styled.ErrorContainer>
  )
}
