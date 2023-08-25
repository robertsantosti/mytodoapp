import { ButtonComponent } from "../button/ButtonComponent"
import { MdEdit, MdDelete, MdAutorenew} from 'react-icons/md'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

import * as Styled from './CardComponent.style';
import { StyleUtils } from "../../utils/style";
import { ApiService } from "../../services/ApiService";


export const CardComponent = ({ todo }) => {
  const navigate = useNavigate();
  const { id, title, description, status } = todo;
  const service = new ApiService('tasks');

  const handleEdit = () => {
    navigate(`/todo/${id}`);
  }

  const handleDelete = () => {
    const change = confirm('Deseja realmente realizar essa ação?')

    if(!change) {
      return;
    }

    service.Delete(id).then(() => {
      alert(`${title} excluido com sucesso.`)
    })
  }

  const changeStatus = () => {
    const change = confirm('Deseja realmente realizar essa ação?')

    if(!change) {
      return;
    }

    const data = {
      status: !status
    }

    service.Update(id, data).then(response => {
      alert(`${response.title} atualizado com sucesso.`);
      navigate('/');
    })
  }

  return (
    <Styled.CardContainer $status={status}>
      <Styled.Title>{ title }</Styled.Title>
      <Styled.Description>{ description }</Styled.Description>
      <Styled.Actions>
        <ButtonComponent bg='#FFF' color={StyleUtils.Colors.primary} simetric={true} onClick={handleEdit}>
          <MdEdit/>
        </ButtonComponent>
        <ButtonComponent bg='#FFF' color={StyleUtils.Colors.danger} simetric={true} onClick={handleDelete}>
          <MdDelete/>
        </ButtonComponent>
        <ButtonComponent bg='#FFF' color={StyleUtils.Colors.success} simetric={true} onClick={changeStatus}>
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
