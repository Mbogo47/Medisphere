import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as yup from "yup";
import '../styles/login.css';


const Signup = () => {
    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        email: yup.string().required("Email is required").email("Invalid email format"),
        password: yup.string()
            .required('Password is required')
            .matches(/[a-z]/, 'Must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
            .matches(/[0-9]/, 'Must contain at least one number')
            .matches(/[^a-zA-Z0-9]/, 'Must contain at least one special character')
            .test(
                'password',
                'Password must 8 characters long',
                (value) =>
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Sign Up</h3>
                    <input type="text" name="username" placeholder="Username" {...register("username")} />
                    {errors.username && <p className="error-message">{errors.username.message}</p>}
                    <input type="email" name="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                    <input type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                    <input type="password" placeholder="Confirm Password"  {...register("confirmPassword")} />
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
                    <button type="submit">Sign Up</button>
                    <p className="signin">Already have an account?  <Link to={'/login'} className="log">Login</Link></p>
                </form>
            </div>
        </>
    );
}

export default Signup;
