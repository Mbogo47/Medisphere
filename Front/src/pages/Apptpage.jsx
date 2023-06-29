import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import '../styles/appt.css';

const Appt = () => {
    const [departments, setDepartments] = useState([]);
    const schema = yup.object().shape({
        fullName: yup.string().required("Username is required"),
        email: yup.string().required("Email is required").email("Invalid email format"),
        dateOfBirth: yup.string().required("dateofBirth is required"),
        appointmentDate: yup.date().required("Appointment Date is required")
            .min(new Date(), "Appointment Date must be in the future"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

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

    return (
        <>
            <h1>Welcome to our appointment page</h1>
            <form className='form'>
                <h3>Appointment form</h3>
                <select id="department" name="department" {...register("department")}>
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
                {errors.appointmentTime && <p className="error-message">{errors.appointmentTime.message}</p>}

                <button type="submit" style={{ marginBottom: '10px' }}> Submit</button>
            </form>
        </>
    );
};

export default Appt;
