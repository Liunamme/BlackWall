import React, { useState } from 'react';
import style from './Form.module.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Inputs from './Inputs/Inputs';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeTerms: false,
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { ...formData };
    setSubmittedData([...submittedData, {
        name: data.name,
        email: data.email,
        message: data.message,
      }]);
    setFormData({
      name: '',
      email: '',
      message: '',
      agreeTerms: false,
    });
  };

  const isFormValid = () => {
    const emailPattern = /^[a-zA-Zа-яА-Я0-9._%+-]+@[a-zа-яА-ЯA-Z0-9.-]+\.[a-zA-Zа-яА-Я]{2,}$/;
    return formData.name.trim() !== '' &&
           formData.message.trim() !== '' &&
           formData.agreeTerms &&
           emailPattern.test(formData.email);
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Inputs formData={formData} setFormData={setFormData} />
      <Checkbox
        id="checkbox"
        name="agreeTerms"
        state={formData.agreeTerms}
        setState={(value) => setFormData({ ...formData, agreeTerms: value })}
      >
        I have read and agreed with{' '}
        <a href=" " target="_blank">
          Terms & Conditions{' '}
        </a>
        and{' '}
        <a href=" " target="_blank">
          Privacy Policy
        </a>
      </Checkbox>
      <input
        type="submit"
        className={style.form_btn}
        value="SEND MESSAGE"
        disabled={!isFormValid()}
      />
    </form>
  );
};

export default Form;