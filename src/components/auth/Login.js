import styles from './Login.module.css';
import { useForm } from 'react-hook-form';


const Login = () => {


    const { register, handleSubmit, formState: { errors }} = useForm();

    const submitHandler = (data) => {
        console.log(data);
    };

    return(
        <main className={styles.main}>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <input {...register('email', { required: true })}/>
                {errors.email && <span>Email is required</span>}

                <input {...register('password', { required: true })} type='password'/>
                {errors.password && <span>Password is required</span>}

                <button>Login</button>
            </form>
        </main>
    );
};


export default Login;