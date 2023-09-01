import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { MockUtils } from '../../utils/mock';
import { CardComponent } from './CardComponent';

const mockTodo = MockUtils.Todos[0];

describe('Test Suite CardComponent', () => {
  beforeEach(() => {
    render(<CardComponent todo={mockTodo}/>, { wrapper: BrowserRouter })
  })

  it('should be able render component', () => {
    expect(screen.getByTestId('card-component')).toBeInTheDocument();
  })
  it('should be able render title', () => {
    expect(screen.getByText(/Tarefa 1/)).toBeInTheDocument();
  })
  it('should be able render description', () => {
    expect(screen.getByText(/Lorem/)).toBeInTheDocument();
  })
})