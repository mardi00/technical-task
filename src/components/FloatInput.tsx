import React from 'react';
import { NumericInputProps } from 'types/Text.props';
import { BaseInput } from 'components/BaseInput';
import { isFloat, isInt } from 'utils/numeric.utils';

type FloatInputState = {
  value: string;
  error: boolean;
};

// TODO Improve by using generic class NumericInput?
export class FloatInput extends React.Component<NumericInputProps, FloatInputState> {

  state: FloatInputState = {
    value: this.props.value.toString(),
    error: false
  };

  // Add specific rules for FloatInput here
  onChange = (value: string) => {
    const { min, max } = this.props;
    const isF = isFloat(value);
    const isN = isInt(value);
    let error = false;
    if(isN || !isF) error = true
    else if((min && parseFloat(value) < min) || (max && parseFloat(value) > max)) error = true;
    else this.props.onChange(parseFloat(value));
    this.setState({ value, error });
  }

  render() {
    const { value, error } = this.state;
    const { placeholder } = this.props;
    return (<BaseInput type='text' placeholder={placeholder} value={value} onChange={this.onChange} error={error} />);
  }
}