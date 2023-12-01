import { Form } from 'components/form';

import styles from './style.module.css';

const TITLE = 'Uncontrolled Form';

export const UncontrolledForm = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>{TITLE}</h2>
    <Form />
  </section>
);
