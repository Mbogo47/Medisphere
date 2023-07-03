// import { RiSecurePaymentFill, RiSecurePaymentLine, RiSurgicalMaskFill, RiSurgicalMaskLine, RiTestTubeFill, RiTestTubeLine } from 'react-icons/ri';
// useEffect(() => {
//     const fetchDepartments = async () => {
//         const departments = await fetch('http://localhost:8081/departments', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const allDepartments = await departments.json()
//         setDepartments(allDepartments.recordset)
//     }
//     fetchDepartments()

// }, [])

 <select id="department" name="department" {...register("department")}>
                        <option value="" disabled selected hidden>-- Select Department --</option>
                        {departments.map((department, i) => (
                            <option key={i} value={department.departmentName} className="u-dept-fix">
                                {department.departmentName}
                            </option>
                        ))}
                    </select>
                   {errors.department && <p className="error-message">{errors.department.message}</p>}

//                     <input type="date" name="appointmentDate" placeholder="Appointment Date" {...register("appointmentDate")} />
//                     {errors.appointmentDate && <p className="error-message">{errors.appointmentDate.message}</p>}

//                     <input type="time" name="appointmentTime" placeholder="Appointment Time" {...register("appointmentTime")} />
//                     {errors.appointmentTime && <p className="error-message">{errors.appointmentTime.message}</p>} */}
//  <SubMenu label="Finances" className="span-side" icon={<RiSecurePaymentLine className="icons-side" />} >
//                         <MenuItem icon={<RiSecurePaymentFill className="icons-side" />} >
//                             <span className="span-side">Bill</span>
//                         </MenuItem>
//                         <MenuItem icon={<MdPayments className="icons-side" />} >
//                             <span className="span-side">Unpaid</span>
//                         </MenuItem>
//                         <MenuItem icon={<MdOutlinePayments className="icons-side" />} >
//                             <span className="span-side">Paid</span>
//                         </MenuItem>
//                     </SubMenu>

//                     <SubMenu label="Laboratory" className="span-side" icon={<RiTestTubeLine className="icons-side" />} >
//                         <MenuItem icon={<GiTestTubes className="icons-side" />}>
//                             <span className="span-side">TestResults</span>
//                         </MenuItem>
//                         <MenuItem icon={<RiTestTubeFill className="icons-side" />} >
//                             <span className="span-side">Tests</span>
//                         </MenuItem>
//                     </SubMenu>

//                     <SubMenu label="Surgeries" className="span-side" icon={<RiSurgicalMaskFill className="icons-side" />} >
//                         <MenuItem icon={<RiSurgicalMaskLine className="icons-side" />}>
//                             <span className="span-side">Surgeries</span>
//                         </MenuItem>
//                     </SubMenu>