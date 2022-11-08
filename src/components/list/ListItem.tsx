import { CSSProperties, MouseEventHandler, ReactElement } from 'react';

import baseWrapper from '../wrapper/BaseWrapper';

import { itemWrapperStyle, listItemFooterStyle } from './styles';

export interface ListItemProps {
  title: string;
  description?: ReactElement;
  footer?: ReactElement;
  onClick: MouseEventHandler;
  titleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
  footerStyle?: CSSProperties;
}

function ListItemView({
  title,
  description,
  footer,
  onClick,
  titleStyle,
  descriptionStyle,
  footerStyle
}: ListItemProps): ReactElement {
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

export const ListItem = baseWrapper(ListItemView);
