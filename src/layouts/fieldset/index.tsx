import { ReactNode } from 'react';

import styles from './style.module.css';

interface FieldsetProps {
  children: ReactNode;
  legend: string;
  classLabel?: string;
  htmlFor?: string;
  textLabel?: string;
  isMultiplyLabel?: boolean;
}

export const Fieldset = (props: FieldsetProps) => (
  <fieldset className={styles.fieldset}>
    <legend className={styles.legend}>{props.legend}</legend>
    {props.isMultiplyLabel ? (
      props.children
    ) : (
      <label htmlFor={props.htmlFor} className={props.classLabel}>
        {props.textLabel}
        {props.children}
      </label>
    )}
  </fieldset>
);
