import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from './HeaderComponent';

describe('Test Suite HeaderComponent', () => {
  beforeEach(() => {
    render(<HeaderComponent/>)
  })

  it('should be able render HeaderComponent', () => {
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  })
  it('should be abler render logo', () => {
    expect(screen.getByTestId('header-logo')).toBeInTheDocument();
  })
  it('should be able render username', () => {
    expect(screen.getByText(/Robert/i)).toBeInTheDocument();
  })
})
