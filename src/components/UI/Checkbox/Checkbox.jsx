import React from 'react';
import style from './Checkbox.module.scss';

const Checkbox = ({ id, state, setState, children }) => {
  return (
    <div className={style.checkbox}>
      <div onClick={() => setState(!state)} className={`${style.checkbox_customCheckBox} ${state ? style.checkbox_active : ''}`}>
        <input id={id} type="checkbox" checked={state} onChange={() => {}} />
      </div>
      <label htmlFor={id}>
        <p className={style.checkbox_text}>{children}</p>
      </label>
    </div>
  );
};

export default Checkbox;