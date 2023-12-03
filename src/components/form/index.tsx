import { useRef } from 'react';
import clsx from 'clsx';
import { CountryOptions } from 'data';
import { getStringBase64 } from 'helpers/getStringBase64';
import { Fieldset } from 'layouts/fieldset';
import { InputTypes } from 'types/enum/attributes';
import { InputClasses, SelectClasses } from 'types/enum/classes';
import { LegendName } from 'types/enum/legend';
import { BaseInput } from 'ui/base-input';
import { BaseSelect } from 'ui/base-select';
import { formSchema } from 'validate/index';
import { ValidationError } from 'yup';

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

const enum IdInputsForBindingLabel {
  NAME = 'name',
  AGE = 'age',
  EMAIL = 'email',
  PASSWORD = 'password',
  REPEAT = 'repeat',
  MALE = 'male',
  FEMALE = 'female',
  COUNTRY = 'country',
  FILE = 'file',
  AGREE = 'agree'
}

const enum GroupRadioName {
  GENDER = 'gender'
}

export const Form = () => {
  const rowLabelDirection = clsx(styles.label, styles.row)
  const columnLabelDirection = clsx(styles.label, styles.column)

  const nameRef = useRef<HTMLInputElement | null>(null)
  const ageRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const repeatPasswordRef = useRef<HTMLInputElement | null>(null)
  const maleRef = useRef<HTMLInputElement | null>(null)
  const femaleRef = useRef<HTMLInputElement | null>(null)
  const countryRef = useRef<HTMLSelectElement | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)
  const agreeRef = useRef<HTMLInputElement | null>(null)

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const nameValue = nameRef.current?.value
    const ageValue = ageRef.current?.value
    const emailValue = emailRef.current?.value
    const passwordValue = passwordRef.current?.value
    const repeatPasswordValue = repeatPasswordRef.current?.value
    const genderValue = [maleRef, femaleRef].find((ref) => ref.current?.checked)?.current?.value
    const agreeValue = agreeRef.current?.checked
    const countryValue = countryRef.current?.value
    const fileValue = fileRef.current?.files

    const formData = {
      name: nameValue, 
      age: ageValue, 
      email: emailValue,
      password: passwordValue,
      repeatPassword: repeatPasswordValue,
      gender: genderValue,
      country: countryValue,
      image: fileValue,
      agree: agreeValue
    }
    try {
      const validObject = await formSchema.validate(formData, {abortEarly: false})
      const base64String = await getStringBase64(fileValue![0])
      Object.assign(validObject, {image: base64String})
    } catch(error: unknown) {
      if (error instanceof ValidationError) {
        console.log(error.errors, error.inner.map((err) => err.path))
      }
    }
  }
  return (
    <form className={styles.form}>
      <Fieldset 
        legend={LegendName.NAME} 
        classLabel={columnLabelDirection} 
        htmlFor={IdInputsForBindingLabel.NAME} 
        textLabel={LABEL_NAME}
      >
        <div className={styles.wrapper}>
          <BaseInput 
            type={InputTypes.TEXT} 
            classInput={InputClasses.DIALED} 
            id={IdInputsForBindingLabel.NAME}
            ref={nameRef}
          />
        </div>
      </Fieldset>
      <Fieldset 
        legend={LegendName.AGE} 
        classLabel={columnLabelDirection} 
        htmlFor={IdInputsForBindingLabel.AGE} 
        textLabel={LABEL_AGE}
      >
        <div className={styles.wrapper}>
          <BaseInput 
            type={InputTypes.NUMBER} 
            classInput={InputClasses.DIALED} 
            id={IdInputsForBindingLabel.AGE}
            ref={ageRef}
          />
        </div>
      </Fieldset>
      <Fieldset 
        legend={LegendName.EMAIL} 
        classLabel={columnLabelDirection} 
        htmlFor={IdInputsForBindingLabel.EMAIL} 
        textLabel={LABEL_EMAIL}
      >
        <div className={styles.wrapper}>
          <BaseInput 
            type={InputTypes.EMAIL} 
            classInput={InputClasses.DIALED} 
            id={IdInputsForBindingLabel.EMAIL}
            ref={emailRef}
          />
        </div>
      </Fieldset>
      <Fieldset legend={LegendName.PASSWORD} isMultiplyLabel>
        <label htmlFor={IdInputsForBindingLabel.PASSWORD} className={columnLabelDirection}>
          {LABEL_PASSWORD}
          <div className={styles.wrapper}>
            <BaseInput 
              type={InputTypes.PASSWORD} 
              classInput={InputClasses.DIALED} 
              id={IdInputsForBindingLabel.PASSWORD} 
              ref={passwordRef}
            />
          </div>
        </label>
        <label htmlFor={IdInputsForBindingLabel.REPEAT} className={columnLabelDirection}>
          {LABEL_REPEAT_PASSWORD}
          <div className={styles.wrapper}>
            <BaseInput 
              type={InputTypes.PASSWORD} 
              classInput={InputClasses.DIALED} 
              id={IdInputsForBindingLabel.REPEAT}
              ref={repeatPasswordRef}
            />
          </div>
        </label>
      </Fieldset>
      <Fieldset legend={LegendName.GENDER} isMultiplyLabel>
        <label htmlFor={IdInputsForBindingLabel.MALE} className={rowLabelDirection}>
          {LABEL_MALE}
          <div className={styles.wrapper}>
            <BaseInput 
              type={InputTypes.RADIO} 
              classInput={InputClasses.CHECKED} 
              id={IdInputsForBindingLabel.MALE} 
              name={GroupRadioName.GENDER}
              ref={maleRef}
              value="male"
            />
          </div>
        </label>
        <label htmlFor={IdInputsForBindingLabel.FEMALE} className={rowLabelDirection}>
          {LABEL_FEMALE}
          <div className={styles.wrapper}>
            <BaseInput 
              type={InputTypes.RADIO} 
              classInput={InputClasses.CHECKED} 
              id={IdInputsForBindingLabel.FEMALE} 
              name={GroupRadioName.GENDER}
              ref={femaleRef}
              value="female"
            />
          </div>
        </label>
      </Fieldset>
      <Fieldset 
        legend={LegendName.COUNTRY} 
        classLabel={columnLabelDirection} 
        htmlFor={IdInputsForBindingLabel.COUNTRY} 
        textLabel={LABEL_COUNTRY}
      >
        <div className={styles.wrapper}>
          <BaseSelect 
            classSelect={SelectClasses.COUNTRY} 
            options={CountryOptions} 
            id={IdInputsForBindingLabel.COUNTRY}
            ref={countryRef}
          />
        </div>
      </Fieldset>
      <Fieldset 
        legend={LegendName.LOAD} 
        classLabel={columnLabelDirection} 
        htmlFor={IdInputsForBindingLabel.FILE} 
        textLabel={LABEL_LOAD}
      >
        <div className={styles.wrapper}>
          <BaseInput 
            type={InputTypes.FILE} 
            classInput={InputClasses.FILE} 
            id={IdInputsForBindingLabel.FILE}
            ref={fileRef}
          />
        </div>
      </Fieldset>
      <Fieldset 
        legend={LegendName.AGREE} 
        classLabel={rowLabelDirection} 
        htmlFor={IdInputsForBindingLabel.AGREE} 
        textLabel={LABEL_CONDITION}
      >
        <div className={styles.wrapper}>
          <BaseInput 
            type={InputTypes.CHECKBOX} 
            classInput={InputClasses.CHECKED} 
            id={IdInputsForBindingLabel.AGREE}
            ref={agreeRef}
          />
        </div>
      </Fieldset>
      <button 
        className={styles.submit} 
        type="submit"
        onClick={submitForm}
      >
        Submit
      </button>
    </form>
  )
};
