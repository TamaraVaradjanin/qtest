import { CSSProperties, MouseEventHandler, ReactElement } from 'react';

import { itemWrapperStyle, listItemFooterStyle } from './styles';

export interface ListItemProps {
  title: string;
  description?: ReactElement;
  footer?: ReactElement;
  onClick: MouseEventHandler;
  titleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
  footerStyle?: CSSProperties;
  message: string;
}

function ListItem({
  title,
  description,
  footer,
  onClick,
  titleStyle,
  descriptionStyle,
  footerStyle,
  message
}: ListItemProps): ReactElement {
  console.log(`${message}ListItem`);
  return (
    <div style={itemWrapperStyle} onClick={onClick} data-testid="list_item">
      <div style={{ padding: '10px' }}>
        <h1 style={titleStyle} data-testid="item_title">
          {title}
        </h1>
        <div style={descriptionStyle}>{description}</div>
      </div>
      <div style={{ ...listItemFooterStyle, ...footerStyle }}>{footer}</div>
    </div>
  );
}

export default ListItem;
