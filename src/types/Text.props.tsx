export enum InputTypes {
  TEXT = 'text',
  INTEGER = 'integer',
  FLOAT = 'float',
} 

export interface BaseInputProps {
	value: any;
	placeholder: string;
	type:  InputTypes[keyof InputTypes]
	onChange: (value: any) => void;
}

export interface TextInputProps {
	value: string;
	placeholder: string;
	onChange: (value: string) => void;
}

export interface NumericInputProps {
	placeholder: string;
	value: number;
	min?: number;
	max?: number;
	onChange: (value: number|null) => void;
}
