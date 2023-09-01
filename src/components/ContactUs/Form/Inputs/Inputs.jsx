import React from 'react';
import style from './Inputs.module.scss';

const Inputs = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={style.inputs}>
      <div className={style.inputs_input}>
        <h6>Name</h6>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs_input}>
        <h6>E-mail</h6>
        <input
          type="text"
          name="email"
          placeholder="Your E-mail"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs_input}>
        <h6>Message</h6>
        <textarea
          name="message"
          placeholder="Your Message"
          className={style.input_textArea}
          value={formData.message}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Inputs;