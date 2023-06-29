
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
