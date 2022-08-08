import styles from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={styles.gradientButton}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default button;
