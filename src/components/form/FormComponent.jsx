import { useForm } from "react-hook-form"
import { ButtonComponent } from "../button/ButtonComponent"
import PropTypes from "prop-types";
import { useEffect } from "react";

import * as Styled from './FormComponent.style';

export const FormComponent = ({ todo }) => {
  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //requisição pro server
  }

  useEffect(() => {
    if(todo) {
      setValue('title', todo.title);
      setValue('description', todo.description);
    }
  }, [todo]);

  return (
    <Styled.FormTodo onSubmit={handleSubmit(onSubmit)}>
      <Styled.FormTitle>
        { !todo ? 'Criar uma nova tarefa' : `Editar tarefa ${todo.title}`}
      </Styled.FormTitle>

      <Styled.InputsContainer>
        <Styled.InputGroup>
          <Styled.Label htmlFor="title">Titulo</Styled.Label>
          <Styled.Input 
            type="text" 
            id="title" 
            {...register('title', {
              required: '* Este campo e obrigátorio'
            })}
          />
          { errors.title && 
            <Styled.ErrorText>{errors.title.message}</Styled.ErrorText>
          }
        </Styled.InputGroup>

        <Styled.InputGroup>
          <Styled.Label>Descrição</Styled.Label>
          <Styled.TextArea 
            id="description"
            cols="30"
            rows="10" 
            {...register('description', {
              required: '* Este campo e obrigatorio',
              maxLength: {
                value: 50,
                message: '* Esse campo possui no maximo 50 caracteres'
              }
            })}></Styled.TextArea>

            <Styled.CounterContainer>
              <p>{ watch('description')?.length || 0 } de 50 caracteres</p>
            </Styled.CounterContainer>

            { errors.description && 
              <Styled.ErrorText>{errors.description.message}</Styled.ErrorText>
            }
        </Styled.InputGroup>
      </Styled.InputsContainer>

      <ButtonComponent type='submit' disabled={Object.keys(errors)?.length}>Salvar</ButtonComponent>
    </Styled.FormTodo>
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
