import { CSSProperties, ReactElement } from 'react';

import { bodyWrapperStyle, wrapperStyle } from './styles';

interface DetailCardProps {
  title: string;
  description: string;
  body: ReactElement;
  containerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  descriptionStyle?: CSSProperties;
  message: string;
}

function DetailCard({
  title,
  description,
  body,
  containerStyle,
  bodyStyle,
  titleStyle,
  descriptionStyle,
  message
}: DetailCardProps) {
  console.log(`${message}DetailCard`);
  return (
    <div
      style={{
        ...wrapperStyle,
        ...containerStyle
      }}>
      <h1 style={titleStyle} data-testid="card_title">
        {title}
      </h1>
      <p style={descriptionStyle} data-testid="card_description">
        {description}
      </p>
      <div style={{ ...bodyWrapperStyle, ...bodyStyle }}>{body}</div>
    </div>
  );
}

export default DetailCard;
