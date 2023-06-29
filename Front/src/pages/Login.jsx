import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import '../styles/login.css';

const LoginPatient = () => {
    const schema = yup.object().shape({
        email: yup.string().required("Email is required").email("Invalid email format"),
        password: yup.string().required("Password is required"),
    });

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    // Redirect to dashboard
                    toast.success("Login successful");
                    navigate('/appt');
                } else {
                    response.json().then((data) => {
                        toast.error(data.message);
                    });
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });

    };

    const notify = (errors) => {
        toast.error({
            errors
        });
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login</h3>
                    <input type="email" name="email" placeholder="Email" {...register("email")} />
                    {errors.email && notify(errors.email?.message)}
                    <input type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && notify(errors.password?.message)}
                    <button type="submit" className="btn-log" >Login</button>

                    <p className="signin">Don't have an account? <Link to={'/signup'} className="log">Sign Up</Link></p>

                </form>
            </div>
        </>
    );
}

export default LoginPatient;
