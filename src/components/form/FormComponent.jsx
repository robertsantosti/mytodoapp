import { useForm } from "react-hook-form"
import { ButtonComponent } from "../button/ButtonComponent"
import PropTypes from "prop-types";
import { useEffect } from "react";

export const FormComponent = ({ todo }) => {
  const { 
    register, 
    handleSubmit,
    setValue,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //requisição pro server
  }

  useEffect(() => {
    if(todo) {
      setValue('title', todo.title);
      setValue('desctiption', todo.description);
    }
  }, []);

  return (
    <form className="FormTodo" onSubmit={handleSubmit(onSubmit)}>
      <legend className="FormTitle">Criar uma nova tarefa</legend>

      <div className="InputsContainer">
        <div className="InputGroup">
          <label htmlFor="title">Titulo</label>
          <input 
            type="text" 
            id="title" 
            {...register('title', {
              required: '* Este campo e obrigátorio'
            })}
          />
          { errors.title && 
            <p>{errors.title.message}</p>
          }
        </div>

        <div className="InputGroup">
          <label htmlFor="description">Descrição</label>
          <textarea 
            id="description"
            cols="30"
            rows="10" 
            {...register('description', {
              required: '* Este campo e obrigatorio',
              maxLength: {
                value: 50,
                message: 'Esse campo possui no maximo 50 caracteres'
              }
            })}></textarea>
            { errors.description && 
              <p>{errors.description.message}</p>
            }
        </div>
      </div>

      <ButtonComponent type='submit'>Salvar</ButtonComponent>
    </form>
  )
}

FormComponent.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.bool
  }),
}
