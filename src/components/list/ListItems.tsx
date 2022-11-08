import { CSSProperties, ReactElement } from 'react';

import baseWrapper, { BaseProps } from '../wrapper/BaseWrapper';

interface PropsType<T> {
  items: T[];
  renderer: (item: T) => ReactElement;
  searchBy?: (item: T) => boolean;
  containerStyle?: CSSProperties;
}

interface AbstractItem {
  key: string;
}

function ListItemsView<T extends AbstractItem>({ items, renderer, searchBy, containerStyle }: PropsType<T>) {
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

export const ListItems = baseWrapper(ListItemsView) as <T>(props: PropsType<T> & BaseProps) => ReactElement;
