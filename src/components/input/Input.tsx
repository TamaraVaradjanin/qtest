import { ChangeEventHandler, CSSProperties, memo, ReactElement } from 'react';

import { inputStyle } from './styles';

type InputProps = CSSProperties & {
  placeholder?: string;
  value?: string;
  onChange: ChangeEventHandler;
  message: string;
};

function Input({ placeholder, value, onChange, message, ...otherProps }: InputProps): ReactElement {
  console.log(`${message}Input`);
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

export default memo(Input);
