import React, { useRef } from 'react';
import { NumericInputProps } from 'types/Text.props';
import { TextInput } from 'components/TextInput';
import { BaseInput } from 'components/BaseInput';

type FloatInputState = {
  value: string;
};

export class FloatInput extends React.Component<NumericInputProps, FloatInputState> {

  state: FloatInputState = {
    value: this.props.value.toString(),
  };

  onChange = (value: string) => {
    const { min, max } = this.props;
    const result = value.replace(/(?!^-)[^0-9.]/g, "")
    if(min && Number(result) < min )return;
    if(max && Number(result) > max) return;
    this.setState({ value: result.toString() });
    if(!isNaN(Number(result))) this.props.onChange(Number(result));
  }

  render() {
    const { value } = this.state;
    const { placeholder } = this.props;
    return (<BaseInput type='text' placeholder={placeholder} value={value} onChange={this.onChange} />);
  }
}