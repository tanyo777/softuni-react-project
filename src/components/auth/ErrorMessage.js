import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message }) => {
    return(
        <span className={styles['error-message']}>{message}</span>
    );
};

export default ErrorMessage;