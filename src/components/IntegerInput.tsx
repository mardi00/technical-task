import React, { useRef } from 'react';
import { NumericInputProps } from 'types/Text.props';
import { BaseInput } from 'components/BaseInput';

type IntegerInputState = {
  value: string;
};

export class IntegerInput extends React.Component<NumericInputProps, IntegerInputState> {

  state: IntegerInputState = {
    value: this.props.value.toString(),
  };

  onChange = (value: string) => {
    const { min, max } = this.props;
    const result = value.replace(/(?!^-)[^0-9]/g, "")
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