import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ListItem from './ListItem';

describe('<ListItem>', () => {
  const renderComponent = () =>
    render(<ListItem title="test title" message="Test list item" />, { wrapper: BrowserRouter });

  test('renders expected component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('list_item')).toBeInTheDocument();
    expect(getByTestId('item_title')).toHaveTextContent('test title');
  });
});
