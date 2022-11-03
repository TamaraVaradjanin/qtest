import { CSSProperties, ReactElement } from 'react';

interface PropsType<T> {
  items: T[];
  renderer: (item: T) => ReactElement;
  searchBy?: (item: T) => boolean;
  containerStyle?: CSSProperties;
  message: string;
}

interface AbstractItem {
  key: string;
}

function ListView<T extends AbstractItem>({ items, renderer, searchBy, containerStyle, message }: PropsType<T>) {
  console.log(`${message}ListView`);

  return (
    <div style={{ width: '100%', ...containerStyle }} data-testid="list_wrapper">
      {searchBy
        ? items.filter(searchBy).map((item) => {
            return (
              <div key={item.key} data-testid={`item_wrapper${item.key}`}>
                {renderer(item)}
              </div>
            );
          })
        : items.map((item) => {
            return (
              <div key={item.key} data-testid={`item_wrapper${item.key}`}>
                {renderer(item)}
              </div>
            );
          })}
    </div>
  );
}

export default ListView;
