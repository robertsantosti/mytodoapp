import { ButtonComponent } from "../button/ButtonComponent"
import { MdEdit, MdDelete, MdAutorenew} from 'react-icons/md'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"

import * as Styled from './CardComponent.style';
import { StyleUtils } from "../../utils/style";
import { ApiService } from "../../services/ApiService";
import { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";


export const CardComponent = ({ todo }) => {
  const navigate = useNavigate();
  const { id, title, description, status } = todo;
  const {setTodos} = useContext(TodosContext)
  const service = new ApiService('tasks');

  const handleEdit = () => {
    navigate(`/todo/${id}`);
  }

  const getTasks = async () => {
    service.Get('tasks').then(response => {
      setTodos(response);
    })
  }

  const handleDelete = () => {
    const change = confirm('Deseja realmente realizar essa ação?')

    if(!change) {
      return;
    }

    service.Delete(id).then(() => {
      alert(`${title} excluido com sucesso.`);
      getTasks()
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
      getTasks()
    })
  }

  return (
    <Styled.CardContainer $status={status} data-testid='card-component'>
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
