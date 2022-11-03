import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Input from './Input';

describe('<Input>', () => {
  const renderComponent = () => render(<Input message="Test input" />, { wrapper: BrowserRouter });

  test('renders expected component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('input_field')).toBeInTheDocument();
  });
});
