import { ChangeEvent } from 'react';
import styles from './styles.module.scss'

interface InputsProps {
  type:string,
  name:string,
  value:string,
  placeholder:string
  onChange: (e: ChangeEvent<HTMLInputElement>)=> void;
}

export function Inputs({ type, name, value, placeholder,onChange} : InputsProps) {
  return (
    <input
      type = {type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.inputs}
    />
  );
}
