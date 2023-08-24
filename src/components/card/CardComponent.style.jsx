import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyleUtils } from '../../utils/style';

const colors = StyleUtils.Colors;

export const CardContainer = styled.div`
  display: flex;
  width: 20rem;
  height: 9.375rem;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 0.3125rem;
  background: ${({ $status }) => $status ? colors.success : colors.danger};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const Title = styled.h3`
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const Description = styled.p`
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 16px;
  align-self: stretch;
`

CardContainer.propTypes = {
  $status: PropTypes.bool
}