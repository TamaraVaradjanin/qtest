import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ListItems } from './ListItems';

describe('<ListView>', () => {
  const renderComponent = () =>
    render(
      <ListItems
        items={[
          { name: 'test', key: '_1' },
          { name: 'test 2', key: '_2' }
        ]}
        renderer={(item) => <p>{item.name}</p>}
      />,
      {
        wrapper: BrowserRouter
      }
    );

  test('renders expected component', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId('list_wrapper')).toBeInTheDocument();
    expect(getByTestId('item_wrapper_1')).toBeInTheDocument();
    expect(getByTestId('item_wrapper_2')).toBeInTheDocument();
  });
});
