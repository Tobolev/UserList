import styles from "./Form.module.css";
import Button from "../UI/Button.js";
import Card from "../UI/Card";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const Form = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHadler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Некореттный ввод",
        message: "Эти поля не могут быть пустыми",
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: "Некореттный возраст",
        message: "Возраст должен быть больше нуля",
      });
      return;
    }
    props.onCreateUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHadler}>
          <div className="form-control">
            <label htmlFor="name" className="form-control label">
              Имя
            </label>
            <input
              id="name"
              type="text"
              onChange={nameChangeHandler}
              value={inputName}
            />
            <label htmlFor="age" className="form-control label">
              Возраст
            </label>
            <input
              id="age"
              type="text"
              onChange={ageChangeHandler}
              value={inputAge}
            ></input>
            <Button type="submit">Добавить пользователя</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Form;
