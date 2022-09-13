import React from 'react';
import { NumericInputProps } from 'types/Text.props';
import { BaseInput } from 'components/BaseInput';
import { isInt } from 'utils/numeric.utils';

type IntegerInputState = {
  value: string;
  error: boolean;
};

// TODO Improve by using generic class NumericInput?
export class IntegerInput extends React.Component<NumericInputProps, IntegerInputState> {

  state: IntegerInputState = {
    value: this.props.value.toString(),
    error: false,
  };

  // Add specific "rules"/"check" for IntegerInput here
  onChange = (value: string) => {
    const { min, max } = this.props;
    const isI = isInt(value);
    let error = false;
    if(!isI) error = true;
    else if((min && parseFloat(value) < min) || (max && parseFloat(value) > max)) error = true;
    else this.props.onChange(parseFloat(value));
    this.setState({ value, error });
  }

  render() {
    const { value , error } = this.state;
    const { placeholder } = this.props;
    return (<BaseInput type='text' placeholder={placeholder} value={value} onChange={this.onChange} error={error} />);
  }
}