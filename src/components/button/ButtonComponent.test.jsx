import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonComponent } from './ButtonComponent'
import { vi } from 'vitest';

const fn = vi.fn();

describe('Test Suite ButtonComponent', () => {
  beforeEach(() => {
    render(<ButtonComponent>Meu Botão</ButtonComponent>)
  })

  //Deve renderizar o component
  it('Should be able to render', () => {
    const button = screen.getByTestId('button-component');
    expect(button).toBeInTheDocument();
  })

  //ButtonComponent não deve estar desabilitado
  it('Should be not disabled', () => {
    const button = screen.getByTestId('button-component');
    expect(button).not.toBeDisabled();
  })

  //ButtonComponent não deve exibir o texto "Carregando"
  it('Should be not show text "Carregando"', () => {
    const button = screen.getByTestId('button-component');
    expect(button).not.toHaveTextContent('Carregando');
  })

  //ButtonComponent não deve exibir o texto "Carregando"
  it('Should be type button', () => {
    const button = screen.getByTestId('button-component');
    expect(button).toHaveAttribute('type', 'button') 
  })

  it('Should be show text "Meu Botão"', () => {
    const button = screen.getByTestId('button-component');
    expect(button).toHaveTextContent('Meu Botão'); 
  })
})

describe('Test Suite ButtonComponent disabled', () => {
  it('Should be disabled', () => {
    render(<ButtonComponent disabled={true}>Meu Botão</ButtonComponent>)
    const button = screen.getByTestId('button-component');
    expect(button).toBeDisabled();
  })
})

describe('Test Suite ButtonComponent loading', () => {
  it('Should be loading', () => {
    render(<ButtonComponent loading={true}>Meu Botão</ButtonComponent>)
    const button = screen.getByTestId('button-component');
    expect(button).toHaveTextContent('Carregando');  
  })
})

describe('Test Suite ButtonComponent has click action', () => {
  it('should be click button call function', () => {
    render(<ButtonComponent onClick={fn}>Meu Botão</ButtonComponent>)
    const button = screen.getByTestId('button-component');
    fireEvent.click(button);
    expect(fn).toBeCalled();
  })
})