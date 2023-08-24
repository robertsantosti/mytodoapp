import styled from 'styled-components'
import {StyleUtils} from '../../utils/style'

const colors = StyleUtils.Colors;
 
export const Header = styled.header`
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: #fff;
`
export const Logo = styled.h1`
  color: #877777;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

  span {
    color: ${colors.primary};
  }
`
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
`
export const ProfileIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background: #393939;

  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
`