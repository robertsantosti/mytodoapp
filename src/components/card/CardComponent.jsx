import { ButtonComponent } from "../button/ButtonComponent"
import { MdEdit, MdDelete, MdAutorenew} from 'react-icons/md'
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"


export const CardComponent = ({ todo }) => {
  const navigate = useNavigate();
  const { id, title, description } = todo;

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
    <div className="CardContainer">
      <h3 className="Title">{ title }</h3>
      <p className="Description">{ description }</p>
      <div className="ActionsContainer">
        <ButtonComponent onClick={handleEdit}>
          <MdEdit/>
        </ButtonComponent>
        <ButtonComponent onClick={handleDelete}>
          <MdDelete/>
        </ButtonComponent>
        <ButtonComponent onClick={changeStatus}>
          <MdAutorenew/>
        </ButtonComponent>
      </div>
    </div>
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
