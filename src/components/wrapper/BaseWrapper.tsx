import { ComponentType, useEffect } from 'react';

import { baseStyle } from './styles';

export interface BaseProps {
  message: string;
}

export default function baseWrapper<T>(WrappedComponent: ComponentType<T>) {
  const wrapper = (props: T & BaseProps) => {
    useEffect(() => {
      const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Base';
      console.log(`${props.message}${wrappedComponentName}`);
    }, []);
    return (
      <div style={baseStyle} data-testid="base_wrapper">
        <WrappedComponent {...props} />
      </div>
    );
  };
  return wrapper;
}
