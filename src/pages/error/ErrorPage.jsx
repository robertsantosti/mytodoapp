import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../../components/button/ButtonComponent"

import * as Styled from './ErrorPage.style'

export const ErrorPage = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  }

  return (
    <Styled.ErrorContainer data-testid="error-page-component">
      <h3>Opss! Página não encontrada...</h3>
      <p>Não Conseguimos encontrar a página solicitada!</p>
      <ButtonComponent onClick={() => { navigateTo('/') }}>
        Voltar para página inicial
      </ButtonComponent>
    </Styled.ErrorContainer>
  )
}
