import '@testing-library/jest-dom'; //Importou as funções do jest para uso no arquivo (describe, beforeEach, it/test, expect)

import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi } from 'vitest';

import { ErrorPage } from './ErrorPage';

const mockNavigateTo = vi.fn(); //Mock de uma função

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockNavigateTo,
  };
});

describe('Test Suite ErrorPage', () => {
  beforeEach(() => {
    render(<ErrorPage/>, { wrapper: Router })
  })

  //Deve renderizar o componente ErrorPage
  it('Shuld be able to render component ErrorPage', () => {
    const component = screen.getByTestId('error-page-component')
    expect(component).toBeInTheDocument()
  })

  //Deve renderizar o texto 'Opss!' em um titulo
  it('Shuld be able render text "Opss!" in title', () => {
    const text = screen.getByText(/Opss!/i)
    expect(text).toBeInTheDocument()
  })

  //Deve redirecionar o usuário para a pagina Home
  it('Shuld be able redirect user to home page', () => {
    const button = screen.getByText(/Voltar para página inicial/i)
    fireEvent.click(button);
    expect(mockNavigateTo).toHaveBeenCalledWith('/')
  })
})