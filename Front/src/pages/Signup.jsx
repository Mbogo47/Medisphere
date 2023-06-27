import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import '../styles/login.css';

const Signup = () => {
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();
    const onSubmit = (data) => {
        fetch('http://localhost:8081/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                response.data.message && alert(response.data.message);
                console.log(response);
            })

            .catch((error) => {
                alert(error.message);
            });
    };


    useEffect(() => {
        const fetchDepartments = async () => {
            const departments = await fetch('http://localhost:8081/departments', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const allDepartments = await departments.json()
            setDepartments(allDepartments.recordset)
        }
        fetchDepartments()

    }, [])

    const schema = yup.object().shape({
        fullName: yup.string().required("Username is required"),
        email: yup.string().required("Email is required").email("Invalid email format"),
        department: yup.string().required("Department is required"),
        appointmentDate: yup.date().required("Appointment date is required"),
        appointmentTime: yup.string().required("Appointment time is required"),
        password: yup.string()
            .required('Password is required')
            .matches(/[a-z]/, 'Must contain at least one lowercase letter')
            .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
            .matches(/[0-9]/, 'Must contain at least one number')
            .matches(/[^a-zA-Z0-9]/, 'Must contain at least one special character')
            .test(
                'password',
                'Password must be at least 8 characters long',
                (value) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
            ),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password"), null], "Passwords must match"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <>
            <div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Sign Up</h3>
                    <input type="text" name="fullName" placeholder="Patientname" {...register("fullName")} />
                    {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}

                    <input type="email" name="email" placeholder="Email" {...register("email")} />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}

                    {/* <select id="department" name="department" {...register("department")}>
                        <option value="" disabled selected hidden>-- Select Department --</option>
                        {departments.map((department, i) => (
                            <option key={i} value={department.departmentName} className="u-dept-fix">
                                {department.departmentName}
                            </option>
                        ))}
                    </select>
                    {errors.department && <p className="error-message">{errors.department.message}</p>}

                    <input type="date" name="appointmentDate" placeholder="Appointment Date" {...register("appointmentDate")} />
                    {errors.appointmentDate && <p className="error-message">{errors.appointmentDate.message}</p>}

                    <input type="time" name="appointmentTime" placeholder="Appointment Time" {...register("appointmentTime")} />
                    {errors.appointmentTime && <p className="error-message">{errors.appointmentTime.message}</p>} */}

                    <input type="password" name="password" placeholder="Password" {...register("password")} />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}

                    <input type="password" name="confirmPassword" placeholder="Confirm Password" {...register("confirmPassword")} />
                    {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}


                    <button type="submit">Sign Up</button>

                    <p className="signin">Already have an account? <Link to={'/login'} className="log">Login</Link></p>
                </form>
            </div>
        </>
    );
};

export default Signup;