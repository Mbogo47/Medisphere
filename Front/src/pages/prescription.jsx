// import { useEffect, useState } from 'react';
// import { FaPencilAlt } from 'react-icons/fa';
// import { RiDeleteBinFill } from 'react-icons/ri';
// import Addprescription from '../components/Addpres';
// import '../styles/appt.css';

// const Prescription = () => {
//     const [prescriptions, setPrescriptions] = useState([]);
//     const [addOpen, setAddOpen] = useState(false);

//     useEffect(() => {
//         const fetchPrescriptions = async () => {
//             const response = await fetch('http://localhost:8081/pres', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });
//             const allPrescriptions = await response.json();
//             setPrescriptions(allPrescriptions.recordset);
//         };
//         fetchPrescriptions();
//     }
//         , []);

//     return (
//         <div>
//             <h1>Prescriptions</h1>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Patient Name</th>
//                         <th>Medication</th>
//                         <th>Dosage</th>
//                         <th>Instructions</th>
//                         <th>Date</th>
//                         <th>Doctor Id</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {prescriptions.map((prescription) => (
//                         <tr key={prescription.prescriptionId}>
//                             <td>{prescription.patientName}</td>
//                             <td>{prescription.medicationName}</td>
//                             <td>{prescription.dosage}</td>
//                             <td>{prescription.usageInstructions}</td>
//                             <td>{prescription.appointmentDate}</td>
//                             <td>{prescription.doctorId}</td>
//                             <td>
//                                 <button className='back'>
//                                     <FaPencilAlt />
//                                 </button>
//                                 <button className='back'>
//                                     <RiDeleteBinFill />
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={() => setAddOpen(true)}>
//                 Add
//             </button>
//             {addOpen && 
//                 <Addprescription closeAdd={() => setAddOpen(false)} />}
//         </div>
//     )



// }

// export default Prescription;
import { useEffect, useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBinFill } from 'react-icons/ri';
import Addprescription from '../components/Addpres';
import '../styles/appt.css';

const Prescription = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const [addOpen, setAddOpen] = useState(false);

    useEffect(() => {
        const fetchPrescriptions = async () => {
            const response = await fetch('http://localhost:8081/pres', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const allPrescriptions = await response.json();
            setPrescriptions(allPrescriptions.recordset);
        };
        fetchPrescriptions();
    }, []);

    const handleAddClick = () => {
        setAddOpen(true);
    };

    const handleAddClose = () => {
        setAddOpen(false);
    };

    return (

        <div>
            <h1>Prescriptions</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Medication</th>
                        <th>Dosage</th>
                        <th>Instructions</th>
                        <th>Date</th>
                        <th>Doctor Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.map((prescription) => (
                        <tr key={prescription.prescriptionId}>
                            <td>{prescription.patientName}</td>
                            <td>{prescription.medicationName}</td>
                            <td>{prescription.dosage}</td>
                            <td>{prescription.usageInstructions}</td>
                            <td>{prescription.appointmentDate}</td>
                            <td>{prescription.doctorId}</td>
                            <td>
                                <button className='back'>
                                    <FaPencilAlt />
                                </button>
                                <button className='back'>
                                    <RiDeleteBinFill />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddClick}>Add</button>
            {addOpen && <Addprescription closeAdd={handleAddClose} />}

        </div>
    );
};

export default Prescription;
