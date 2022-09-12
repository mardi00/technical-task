import React, { useRef } from 'react';
import { TextInputProps } from 'types/Text.props';
import { BaseInput } from 'components/BaseInput';

type TextInputState = {
  value: string;
};

export class TextInput extends React.Component<TextInputProps, TextInputState> {

  state: TextInputState = {
    value: this.props.value,
  };

  onChange = (value: string) => {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
		const { value } = this.state;
		const { placeholder } = this.props;
    return (<BaseInput type='text' placeholder={placeholder} value={value} onChange={this.onChange} />);
  }
}