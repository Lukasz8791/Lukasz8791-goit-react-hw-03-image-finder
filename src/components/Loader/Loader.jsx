import React from 'react';
import './Loader.module.css';
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.loaderContainer}>
    <div className={s.loader}></div>
  </div>
);

export default Loader;
