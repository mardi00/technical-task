import React, { useRef } from 'react';
import { BaseInputProps, InputTypes } from 'types/Text.props';

export const BaseInput: React.FC<BaseInputProps> = (props) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const buttonRef = React.createRef<HTMLInputElement>();

  const handleBaseInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value !== '') {
      showButton();
    } else {
      hideButton();
    }
    props.onChange(e.target.value);
  }

  const handleBaseInputClear = () => {
    inputRef.current!.value = '';
    hideButton();
  }

  const hideButton = () => {
    buttonRef.current!.classList.remove('m-fadeIn');
    buttonRef.current!.classList.add('m-fadeOut');
  }

  const showButton = () => {
    buttonRef.current!.classList.add('m-fadeIn');
    buttonRef.current!.classList.remove('m-fadeOut');
  }

  return (
    <div>
      <input ref={inputRef} type="text" value={props.value} placeholder={props.placeholder} onChange={handleBaseInputChange}/>
      <input ref={buttonRef} type="button" value="X" onClick={handleBaseInputClear}/>
    </div>
  );

}


/*export class BaseInput extends React.Component<BaseInputProps> {

  inputRef = React.createRef<HTMLInputElement>();
  buttonRef = React.createRef<HTMLInputElement>();

  handleBaseInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length > 0) {
      this.showButton();
    } else {
      this.hideButton();
    }
    this.props.onChange(e.target.value);
  }

  handleBaseInputClear = () => {
    this.inputRef.current!.value = '';
    this.hideButton();
  }

  hideButton = () => {
    this.buttonRef.current!.classList.remove('m-fadeIn');
    this.buttonRef.current!.classList.add('m-fadeOut');
  }

  showButton = () => {
    this.buttonRef.current!.classList.add('m-fadeIn');
    this.buttonRef.current!.classList.remove('m-fadeOut');
  }

  render() {
		const { placeholder, value } = this.props;
    return (
      <div>
        <input ref={this.inputRef} value={value} placeholder={placeholder} onChange={this.handleBaseInputChange}/>
        <input ref={this.buttonRef} type="button" value="X" onClick={this.handleBaseInputClear}/>
      </div>
    );
  }
}*/