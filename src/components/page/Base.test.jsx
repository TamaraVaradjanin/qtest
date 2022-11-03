import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Base from './Base';

describe('<Base>', () => {
  const renderComponent = () => render(<Base message="Test base component" />, { wrapper: BrowserRouter });

  test('renders expected component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('base_wrapper')).toBeInTheDocument();
  });
});
