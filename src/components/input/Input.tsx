import { ChangeEventHandler, CSSProperties, memo, ReactElement } from 'react';

import baseWrapper from '../wrapper/BaseWrapper';

import { inputStyle } from './styles';

interface InputProps extends CSSProperties {
  placeholder?: string;
  value?: string;
  onChange: ChangeEventHandler;
}

function InputField({ placeholder, value, onChange, ...otherProps }: InputProps): ReactElement {
  return (
    <input
      data-testid="input_field"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      style={{ ...inputStyle, ...otherProps }}
    />
  );
}

export const Input = baseWrapper(memo(InputField));
