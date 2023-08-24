import styled from 'styled-components'
import { StyleUtils } from '../../utils/style'

const colors = StyleUtils.Colors;

export const ErrorContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  color: ${colors.primary};
  font-style: normal;
  line-height: normal;
  
  h3 {
    font-size: 24px;  
    font-weight: 700;
  }

  p {
    font-size: 16px;
    font-weight: 400;
  }
`