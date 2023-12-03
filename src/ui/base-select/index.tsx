import { SelectHTMLAttributes } from 'react';
import clsx from 'clsx';
import { CountryOptionsValue } from 'data';
import { SelectClasses } from 'types/enum/classes';

import styles from './style.module.css'

interface BaseSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: CountryOptionsValue[]
  classSelect: SelectClasses
}

export const BaseSelect = (props: BaseSelectProps) => {
  const { classSelect, ...attrs } = props;
  const classes = clsx(styles[classSelect], styles.default);
  return (
    <select className={classes} {...attrs}>
      {props.options.map((item) => (
        <option className={styles.option} key={item.id}>{item.name}</option>
      ) )}
    </select>
  )
}