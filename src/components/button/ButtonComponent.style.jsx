import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StyleUtils } from '../../utils/style'

const colors = StyleUtils.Colors;

export const Button = styled.button`
  display: flex;
  padding: ${({$simetric}) => $simetric ? '8px' : '8px 24px'};
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 0;
  border-radius: 5px;
  background: ${({$bg}) => !$bg ? colors.primary : $bg};
  color: ${({$color}) => !$color ? '#FFFFFF' : $color};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  opacity: .8;
  transition: all .5s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`

Button.propTypes = {
  $color: PropTypes.string,
  $bg: PropTypes.string,
  $simetric: PropTypes.bool
}