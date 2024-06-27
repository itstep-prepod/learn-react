import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../button";
import styles from './index.module.css';

export const RegisterForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <div className={styles.error}>error</div>
        <label htmlFor="email">Login (email)</label>
        <input type="text" id="email" />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <Button size='m' text='OK' onClick={() => {}}/>
    </form>
  );
};
