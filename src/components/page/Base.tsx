import { PropsWithChildren, ReactElement } from 'react';

import { baseStyle } from './styles';

interface BaseProps extends PropsWithChildren {
  message: string;
}

function Base({ children, message }: BaseProps): ReactElement {
  console.log(`${message}Base`);
  return (
    <div style={baseStyle} data-testid="base_wrapper">
      {children}
    </div>
  );
}

export default Base;
