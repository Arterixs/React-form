import { ChangeEvent, ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { InputTypes } from 'types/enum/attributes';
import { InputClasses } from 'types/enum/classes';

import styles from './style.module.css';

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputTypes;
  classInput: InputClasses;
  id?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const BaseInput = forwardRef((props: BaseInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { type, classInput, onChange, ...attrs } = props;
  const classes = clsx(styles[classInput], styles.default);
  return (
    <input 
      className={classes} 
      ref={ref} 
      type={type} 
      {...attrs} 
    />
  );
});
