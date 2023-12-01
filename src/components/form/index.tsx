import { Fieldset } from 'layouts/fieldset';
import { LegendName } from 'types/enum/legend';

import styles from './style.module.css';

const LABEL_NAME = 'Enter your name';
const LABEL_AGE = 'Enter your age';
const LABEL_EMAIL = 'Enter your email';
const LABEL_PASSWORD = 'Enter your password';
const LABEL_REPEAT_PASSWORD = 'Repeat your password';
const LABEL_MALE = 'Male';
const LABEL_FEMALE = 'Female';
const LABEL_COUNTRY = 'Select your country';
const LABEL_LOAD = 'Upload your avatar';
const LABEL_CONDITION = 'I agree to the terms of the agreement';

export const Form = () => (
  <form className={styles.form}>
    <Fieldset legend={LegendName.NAME}>
      <label htmlFor="name">
        {LABEL_NAME}
        <input id="name" type="text" />
      </label>
    </Fieldset>
    <Fieldset legend={LegendName.AGE}>
      <label htmlFor="age">
        {LABEL_AGE}
        <input id="age" type="number" />
      </label>
    </Fieldset>
    <Fieldset legend={LegendName.EMAIL}>
      <label htmlFor="email">
        {LABEL_EMAIL}
        <input type="text" id="email" />
      </label>
    </Fieldset>
    <Fieldset legend={LegendName.PASSWORD}>
      <label htmlFor="password">
        {LABEL_PASSWORD}
        <input type="password" id="password" />
      </label>
      <label htmlFor="repeat">
        {LABEL_REPEAT_PASSWORD}
        <input type="password" id="repeat" />
      </label>
    </Fieldset>
    <Fieldset legend={LegendName.GENDER}>
      <label htmlFor="male">
        {LABEL_MALE}
        <input type="radio" id="male" name="gender" />
      </label>
      <label htmlFor="female">
        {LABEL_FEMALE}
        <input type="radio" id="female" name="gender" />
      </label>
    </Fieldset>
    <Fieldset legend={LegendName.COUNTRY}>
      <label htmlFor="country">
        {LABEL_COUNTRY}
        <input type="file" id="country" />
      </label>
    </Fieldset>
    <Fieldset legend={LegendName.LOAD}>
      <label htmlFor="file">
        {LABEL_LOAD}
        <input type="file" id="file" />
      </label>
    </Fieldset>
    <Fieldset legend={LegendName.AGREE}>
      <label htmlFor="agree">
        {LABEL_CONDITION}
        <input type="checkbox" id="agree" />
      </label>
    </Fieldset>
    <button type="submit">Submit</button>
  </form>
);
