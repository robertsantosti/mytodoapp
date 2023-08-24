import styled from 'styled-components'
import { StyleUtils } from '../../utils/style'

const colors = StyleUtils.Colors;

export const FormTodo = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
`
export const FormTitle = styled.legend`
  color: ${colors.primary};
  font-family: Segoe UI;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;
`
export const Label = styled.label`
  align-self: stretch;
  color: ${colors.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const Input = styled.input`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid ${colors.primary};
`
export const TextArea = styled.textarea`
  display: flex;
  height: 100px;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid ${colors.primary};
`
export const CounterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  color: ${colors.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
export const ErrorText = styled.p`
  align-self: stretch;
  color: ${colors.danger};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`