import React, { useEffect } from 'react';

import { BaseInputProps } from 'types/Text.props';

export const BaseInput: React.FC<BaseInputProps> = (props) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const buttonRef = React.createRef<HTMLInputElement>();
  let init = false;

  useEffect(() => {
    if(!init) {
      init = true;
      props.onChange(props.value)
    }
    if(props.error) showError();
    else hideError();
  }, [props.error]);

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
    props.onChange('');
    hideButton();
  }

  const showError = () => {
    inputRef.current!.classList.remove('i-no-error');
    inputRef.current!.classList.add('i-error');
  }

  const hideError = () => {
    inputRef.current!.classList.remove('i-error');
    inputRef.current!.classList.add('i-no-error');
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