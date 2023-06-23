import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import * as yup from "yup";
import '../styles/login.css';

const DoctorLogin = () => {
    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
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
                    <h3>Login</h3>
                    <input type="text" name="username" placeholder="Username" {...register("username")} />
                    {errors.username && <p className="error-message">{errors.username.message}</p>}
                    <input type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                    <Link to={'/dashboard/home'} className="btn-log">Login</Link>
                </form>
            </div>
        </>
    );
}

export default DoctorLogin;
