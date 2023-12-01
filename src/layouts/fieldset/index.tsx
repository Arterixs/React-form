import { ReactNode } from 'react';

import styles from './style.module.css';

interface FieldsetProps {
  children: ReactNode;
  legend: string;
}

export const Fieldset = (props: FieldsetProps) => (
  <fieldset className={styles.fieldset}>
    <legend className={styles.legend}>{props.legend}</legend>
    {props.children}
  </fieldset>
);
