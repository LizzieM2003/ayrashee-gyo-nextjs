import styles from './button.module.css';

function Button(props) {
  const { size, type, onClick } = props;
  return (
    <button className={`${styles.btn} ${styles[type]} ${styles[size]}`} onClick={onClick}>
      {props.children}
    </button>
  );
}

export default Button;
