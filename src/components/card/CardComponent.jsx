import { ButtonComponent } from "../button/ButtonComponent"
import { MdEdit, MdDelete, MdAutorenew} from 'react-icons/md'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

import * as Styled from './CardComponent.style';


export const CardComponent = ({ todo }) => {
  const navigate = useNavigate();
  const { id, title, description, status } = todo;

  const handleEdit = () => {
    navigate(`/todo/${id}`);
  }

  const handleDelete = () => {
    //Chamar serviço para deletar o todo
  }

  const changeStatus = () => {
    // Chamar serviço para alterar status do todo
  }

  return (
    <Styled.CardContainer $status={status}>
      <Styled.Title>{ title }</Styled.Title>
      <Styled.Description>{ description }</Styled.Description>
      <Styled.Actions>
        <ButtonComponent onClick={handleEdit}>
          <MdEdit/>
        </ButtonComponent>
        <ButtonComponent onClick={handleDelete}>
          <MdDelete/>
        </ButtonComponent>
        <ButtonComponent onClick={changeStatus}>
          <MdAutorenew/>
        </ButtonComponent>
      </Styled.Actions>
    </Styled.CardContainer>
  )
}

CardComponent.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.bool
  }).isRequired,
}
