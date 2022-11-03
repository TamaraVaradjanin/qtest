import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DetailCard from './DetailCard';

describe('<DetailCard>', () => {
  const renderComponent = () =>
    render(<DetailCard title="test title" description="test description" message="Test detail card" />, {
      wrapper: BrowserRouter
    });

  test('renders expected component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('card_title')).toHaveTextContent('test title');
    expect(getByTestId('card_description')).toHaveTextContent('test description');
  });
});
