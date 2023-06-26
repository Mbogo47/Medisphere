CREATE DATABASE HospitalManagementSystem;
USE HospitalManagementSystem;
-- --Create Patients schema
-- CREATE SCHEMA Patients;
-- --Create Employees schema
-- CREATE SCHEMA Employees;
-- -- Create Department schema
-- CREATE SCHEMA Department;

-- Patients Table
CREATE TABLE Patients.Patients (
  patientId INT IDENTITY(1, 1) PRIMARY KEY,
  fullName VARCHAR(100),
  email VARCHAR(100),
);

-- Patients Table
INSERT INTO Patients.Patients (firstName, lastName, dateOfBirth, gender, contactNumber, email, address)
VALUES
  ('John', 'Doe', '1990-05-15', 'Male', '1234567890', 'johndoe@example.com', '123 Main St'),
  ('Jane', 'Smith', '1985-10-20', 'Female', '9876543210', 'janesmith@example.com', '456 Elm St'),
  ('Michael', 'Johnson', '1978-03-08', 'Male', '5551234567', 'michaeljohnson@example.com', '789 Oak Ave'),
  ('Emily', 'Brown', '1995-12-01', 'Female', '8889876543', 'emilybrown@example.com', '321 Pine Rd'),
  ('William', 'Davis', '1982-07-10', 'Male', '1112223333', 'williamdavis@example.com', '654 Cedar Ln'),
  ('Sophia', 'Wilson', '1992-09-25', 'Female', '4445556666', 'sophiawilson@example.com', '987 Maple Ave'),
  ('James', 'Anderson', '1973-06-12', 'Male', '7778889999', 'jamesanderson@example.com', '741 Birch St'),
  ('Olivia', 'Garcia', '1988-11-18', 'Female', '2223334444', 'oliviagarcia@example.com', '852 Oak St'),
  ('Benjamin', 'Taylor', '1993-04-05', 'Male', '9998887777', 'benjamintaylor@example.com', '963 Elm Rd'),
  ('Ava', 'Martinez', '1980-08-29', 'Female', '6665554444', 'avamartinez@example.com', '741 Pine Ln'),
  ('Joseph', 'Lopez', '1997-02-14', 'Male', '3334445555', 'josephlopez@example.com', '852 Maple St'),
  ('Mia', 'Harris', '1984-09-07', 'Female', '9991112222', 'miaharris@example.com', '963 Cedar Rd'),
  ('Daniel', 'Clark', '1976-12-03', 'Male', '6667778888', 'danielclark@example.com', '123 Oak Ave'),
  ('Isabella', 'Young', '1991-07-21', 'Female', '4443332222', 'isabellayoung@example.com', '456 Elm St'),
  ('David', 'Walker', '1987-05-28', 'Male', '7779991111', 'davidwalker@example.com', '789 Pine Ln'),
  ('Sophie', 'Allen', '1994-01-10', 'Female', '5556667777', 'sophieallen@example.com', '987 Cedar Rd'),
  ('Jackson', 'Hall', '1979-08-17', 'Male', '2224446666', 'jacksonhall@example.com', '741 Maple Ave'),
  ('Charlotte', 'Lee', '1983-03-22', 'Female', '8887776666', 'charlottelee@example.com', '852 Oak St'),
  ('Andrew', 'Baker', '1996-06-05', 'Male', '3335557777', 'andrewbaker@example.com', '963 Pine Rd'),
  ('Scarlett', 'Turner', '1989-09-30', 'Female', '9993334444', 'scarlettturner@example.com', '123 Cedar Ln');


-- Doctors Table
CREATE TABLE Employees.Doctors (
  doctorId INT IDENTITY(1, 1) PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  specialization VARCHAR(100),
  contactNumber VARCHAR(20),
  email VARCHAR(100)
);

-- Doctors Table
INSERT INTO Employees.Doctors (firstName, lastName, specialization, contactNumber, email)
VALUES
  ('John', 'Smith', 'Cardiology', '1234567890', 'johnsmith@example.com'),
  ('Jane', 'Johnson', 'Pediatrics', '9876543210', 'janejohnson@example.com'),
  ('Michael', 'Brown', 'Dermatology', '5551234567', 'michaelbrown@example.com'),
  ('Emily', 'Davis', 'Ophthalmology', '8889876543', 'emilydavis@example.com'),
  ('William', 'Wilson', 'Orthopedics', '1112223333', 'williamwilson@example.com'),
  ('Sophia', 'Anderson', 'Neurology', '4445556666', 'sophiaanderson@example.com'),
  ('James', 'Garcia', 'ENT', '7778889999', 'jamesgarcia@example.com'),
  ('Olivia', 'Taylor', 'Gastroenterology', '2223334444', 'oliviataylor@example.com'),
  ('Benjamin', 'Martinez', 'Urology', '9998887777', 'benjaminmartinez@example.com'),
  ('Ava', 'Lopez', 'Psychiatry', '6665554444', 'avalopez@example.com'),
  ('Joseph', 'Harris', 'Obstetrics and Gynecology', '3334445555', 'josephharris@example.com'),
  ('Mia', 'Clark', 'Endocrinology', '9991112222', 'miaclark@example.com'),
  ('Daniel', 'Young', 'Rheumatology', '6667778888', 'danielyoung@example.com'),
  ('Isabella', 'Walker', 'Dentistry', '4443332222', 'isabellawalker@example.com'),
  ('David', 'Allen', 'Pulmonology', '7779991111', 'davidallen@example.com'),
  ('Sophie', 'Hall', 'Oncology', '5556667777', 'sophiehall@example.com'),
  ('Jackson', 'Lee', 'Allergy and Immunology', '2224446666', 'jacksonlee@example.com'),
  ('Charlotte', 'Baker', 'Nephrology', '8887776666', 'charlottebaker@example.com'),
  ('Andrew', 'Turner', 'Physical Therapy', '3335557777', 'andrewturner@example.com'),
  ('Scarlett', 'Harrison', 'Emergency Medicine', '9993334444', 'scarlettharrison@example.com');

-- Appointments Table
CREATE TABLE Patients.Appointments (
  appointmentId INT IDENTITY(1, 1) PRIMARY KEY,
  patientId INT,
  doctorId INT,
  appointmentDate DATE,
  appointmentTime TIME,
  status VARCHAR(20),
  FOREIGN KEY (patientId) REFERENCES Patients.Patients(patientId),
  FOREIGN KEY (doctorId) REFERENCES Employees.Doctors(doctorId)
);

-- Appointments Table
INSERT INTO Patients.Appointments (patientId, doctorId, appointmentDate, appointmentTime, status)
VALUES
  (1, 1, '2023-06-10', '10:00:00', 'Scheduled'),
  (2, 3, '2023-06-12', '14:30:00', 'Scheduled'),
  (3, 2, '2023-06-15', '11:15:00', 'Scheduled'),
  (4, 4, '2023-06-16', '09:45:00', 'Scheduled'),
  (5, 5, '2023-06-20', '13:00:00', 'Scheduled'),
  (6, 7, '2023-06-22', '16:30:00', 'Scheduled'),
  (7, 6, '2023-06-25', '08:45:00', 'Scheduled'),
  (8, 8, '2023-06-27', '12:30:00', 'Scheduled'),
  (9, 10, '2023-06-30', '15:15:00', 'Scheduled'),
  (10, 9, '2023-07-02', '10:30:00', 'Scheduled'),
  (11, 11, '2023-07-05', '14:45:00', 'Scheduled'),
  (12, 13, '2023-07-07', '09:15:00', 'Scheduled'),
  (13, 12, '2023-07-10', '11:45:00', 'Scheduled'),
  (14, 14, '2023-07-12', '17:00:00', 'Scheduled'),
  (15, 16, '2023-07-15', '07:30:00', 'Scheduled'),
  (16, 15, '2023-07-18', '16:15:00', 'Scheduled'),
  (17, 17, '2023-07-20', '13:45:00', 'Scheduled'),
  (18, 19, '2023-07-23', '10:00:00', 'Scheduled'),
  (19, 18, '2023-07-25', '15:30:00', 'Scheduled'),
  (20, 20, '2023-07-28', '12:45:00', 'Scheduled');

-- MedicalRecords Table
CREATE TABLE Patients.MedicalRecords (
  recordId INT IDENTITY(1, 1) PRIMARY KEY,
  patientId INT,
  doctorId INT,
  recordDate DATE,
  diagnosis VARCHAR(200),
  prescription VARCHAR(200),
  notes VARCHAR(200),
  FOREIGN KEY (patientId) REFERENCES Patients.Patients(patientId),
  FOREIGN KEY (doctorId) REFERENCES Employees.Doctors(doctorId)
);
-- MedicalRecords Table
INSERT INTO  Patients.MedicalRecords (patientId, doctorId, recordDate, diagnosis, prescription, notes)
VALUES
  (1, 1, '2023-06-10', 'Hypertension', 'Medication A, Medication B', 'Follow up in 3 months'),
  (2, 3, '2023-06-12', 'Common cold', 'Rest, plenty of fluids', 'Symptoms improving'),
  (3, 2, '2023-06-15', 'Migraine', 'Prescription C', 'Avoid triggers'),
  (4, 4, '2023-06-16', 'Sinusitis', 'Medication D', 'Monitor symptoms'),
  (5, 5, '2023-06-20', 'Fractured arm', 'Splint, pain medication', 'Refer to orthopedic specialist'),
  (6, 7, '2023-06-22', 'Anxiety', 'Therapy sessions', 'Encourage relaxation techniques'),
  (7, 6, '2023-06-25', 'Acid reflux', 'Antacids, dietary modifications', 'Follow up in 2 weeks'),
  (8, 8, '2023-06-27', 'Urinary tract infection', 'Antibiotics', 'Increase fluid intake'),
  (9, 10, '2023-06-30', 'Pregnancy', 'Prenatal vitamins, regular check-ups', 'Provide prenatal care information'),
  (10, 9, '2023-07-02', 'Diabetes', 'Insulin injections, blood sugar monitoring', 'Educate on managing blood sugar levels'),
  (11, 11, '2023-07-05', 'Depression', 'Antidepressant medication, therapy', 'Monitor progress'),
  (12, 13, '2023-07-07', 'Sprained ankle', 'Rest, ice, compression, elevation', 'Refer to physical therapist'),
  (13, 12, '2023-07-10', 'Gastritis', 'Antacids, dietary modifications', 'Follow up in 4 weeks'),
  (14, 14, '2023-07-12', 'High cholesterol', 'Medication E, lifestyle changes', 'Monitor lipid levels'),
  (15, 16, '2023-07-15', 'Asthma', 'Inhaler, avoidance of triggers', 'Develop asthma action plan'),
  (16, 15, '2023-07-18', 'Skin rash', 'Topical ointment, allergy testing', 'Refer to dermatologist if necessary'),
  (17, 17, '2023-07-20', 'Kidney stones', 'Pain medication, increase fluid intake', 'Discuss dietary changes'),
  (18, 19, '2023-07-23', 'High blood pressure', 'Medication F, lifestyle changes', 'Monitor blood pressure regularly'),
  (19, 18, '2023-07-25', 'Anemia', 'Iron supplements, dietary changes', 'Monitor hemoglobin levels'),
  (20, 20, '2023-07-28', 'Appendicitis', 'Emergency surgery', 'Post-surgery recovery instructions');

-- Billing Table
CREATE TABLE Patients.Billing (
  billId INT IDENTITY(1, 1) PRIMARY KEY,
  patientId INT,
  billDate DATE,
  amountDue DECIMAL(10, 2),
  paymentStatus VARCHAR(20),
  FOREIGN KEY (patientId) REFERENCES Patients.Patients(patientId)
);


-- Billing Table
INSERT INTO Patients.Billing(patientId, billDate, amountDue, paymentStatus)
VALUES
  (1, '2023-06-10', 150.75, 'Paid'),
  (2, '2023-06-12', 75.50, 'Unpaid'),
  (3, '2023-06-15', 200.00, 'Paid'),
  (4, '2023-06-16', 120.25, 'Unpaid'),
  (5, '2023-06-20', 500.00, 'Paid'),
  (6, '2023-06-22', 75.00, 'Paid'),
  (7, '2023-06-25', 150.50, 'Unpaid'),
  (8, '2023-06-27', 100.00, 'Paid'),
  (9, '2023-06-30', 250.75, 'Unpaid'),
  (10, '2023-07-02', 75.50, 'Paid'),
  (11, '2023-07-05', 175.25, 'Unpaid'),
  (12, '2023-07-07', 125.00, 'Paid'),
  (13, '2023-07-10', 100.50, 'Unpaid'),
  (14, '2023-07-12', 300.00, 'Paid'),
  (15, '2023-07-15', 75.00, 'Paid'),
  (16, '2023-07-18', 150.50, 'Unpaid'),
  (17, '2023-07-20', 90.75, 'Paid'),
  (18, '2023-07-23', 200.00, 'Unpaid'),
  (19, '2023-07-25', 75.50, 'Paid'),
  (20, '2023-07-28', 225.25, 'Unpaid');


-- Departments Table
CREATE TABLE Department.Departments (
  departmentId INT IDENTITY(1, 1) PRIMARY KEY,
  departmentName VARCHAR(100),
  headDoctorId INT,
  FOREIGN KEY (headDoctorId) REFERENCES Employees.Doctors(doctorId)
);

-- Departments Table
INSERT INTO Department.Departments (departmentName, headDoctorId)
VALUES
  ('Cardiology', 1),
  ('Pediatrics', 2),
  ('Dermatology', 3),
  ('Ophthalmology', 4),
  ('Orthopedics', 5),
  ('Neurology', 6),
  ('ENT', 7),
  ('Gastroenterology', 8),
  ('Urology', 9),
  ('Psychiatry', 10),
  ('Obstetrics and Gynecology', 11),
  ('Endocrinology', 12),
  ('Rheumatology', 13),
  ('Dentistry', 14),
  ('Pulmonology', 15),
  ('Oncology', 16),
  ('Allergy and Immunology', 17),
  ('Nephrology', 18),
  ('Physical Therapy', 19),
  ('Emergency Medicine', 20);


-- Nurses Table
CREATE TABLE Employees.Nurses (
  nurseId INT IDENTITY(1, 1) PRIMARY KEY,
  firstName VARCHAR(50),
  lastName VARCHAR(50),
  departmentId INT,
  contactNumber VARCHAR(20),
  email VARCHAR(100),
  FOREIGN KEY (departmentId) REFERENCES Department.Departments(departmentId)
);
-- Nurses Table
INSERT INTO Employees.Nurses (firstName, lastName, departmentId, contactNumber, email)
VALUES
  ('Emily', 'Johnson', 43, '123-456-7890', 'emily.johnson@example.com'),
  ('Sarah', 'Smith', 44, '987-654-3210', 'sarah.smith@example.com'),
  ('Jessica', 'Brown', 45, '555-555-5555', 'jessica.brown@example.com'),
  ('Michael', 'Davis', 46, '111-222-3333', 'michael.davis@example.com'),
  ('Andrew', 'Miller', 47, '444-444-4444', 'andrew.miller@example.com'),
  ('Olivia', 'Wilson', 48, '777-888-9999', 'olivia.wilson@example.com'),
  ('Emma', 'Moore', 49, '222-333-4444', 'emma.moore@example.com'),
  ('Christopher', 'Taylor', 50, '666-666-6666', 'christopher.taylor@example.com'),
  ('Abigail', 'Anderson', 58, '777-777-7777', 'abigail.anderson@example.com'),
  ('Matthew', 'Thomas', 59, '999-888-7777', 'matthew.thomas@example.com'),
  ('Sophia', 'Martinez', 60, '222-222-2222', 'sophia.martinez@example.com'),
  ('William', 'Hernandez', 61, '111-111-1111', 'william.hernandez@example.com'),
  ('Ava', 'Lopez', 62, '999-999-9999', 'ava.lopez@example.com'),
  ('James', 'Gonzalez', 57, '444-555-6666', 'james.gonzalez@example.com'),
  ('Isabella', 'Rodriguez', 56, '123-123-1234', 'isabella.rodriguez@example.com'),
  ('Logan', 'Lee', 55, '333-333-3333', 'logan.lee@example.com'),
  ('Mia', 'Walker', 54, '777-999-1111', 'mia.walker@example.com'),
  ('Benjamin', 'Hall', 53, '555-555-1234', 'benjamin.hall@example.com'),
  ('Amelia', 'Young', 52, '666-666-1234', 'amelia.young@example.com'),
  ('Daniel', 'Allen', 51, '999-888-7777', 'daniel.allen@example.com');

-- Medications Table
CREATE TABLE Department.Medications (
  medicationId INT IDENTITY(1, 1) PRIMARY KEY,
  medicationName VARCHAR(100),
  dosage VARCHAR(50),
  usageInstructions VARCHAR(200)
);

-- Medications Table
INSERT INTO Department.Medications (medicationName, dosage, usageInstructions)
VALUES
  ('Aspirin', '500 mg', 'Take one tablet every 4 hours'),
  ('Ibuprofen', '200 mg', 'Take two tablets with food'),
  ('Lisinopril', '10 mg', 'Take one tablet daily in the morning'),
  ('Metformin', '1000 mg', 'Take one tablet twice daily with meals'),
  ('Simvastatin', '20 mg', 'Take one tablet at bedtime'),
  ('Levothyroxine', '50 mcg', 'Take one tablet in the morning on an empty stomach'),
  ('Albuterol', '2 puffs', 'Inhale two puffs every 4-6 hours as needed'),
  ('Amoxicillin', '500 mg', 'Take one capsule three times daily'),
  ('Prednisone', '10 mg', 'Take two tablets in the morning with food'),
  ('Omeprazole', '20 mg', 'Take one capsule daily before a meal'),
  ('Ciprofloxacin', '500 mg', 'Take one tablet twice daily'),
  ('Gabapentin', '300 mg', 'Take one capsule three times daily'),
  ('Acetaminophen', '500 mg', 'Take two tablets every 6 hours as needed'),
  ('Diazepam', '5 mg', 'Take one tablet at bedtime as prescribed'),
  ('Furosemide', '40 mg', 'Take one tablet in the morning'),
  ('Warfarin', '5 mg', 'Take one tablet daily at the same time'),
  ('Metoprolol', '25 mg', 'Take one tablet twice daily'),
  ('Hydrochlorothiazide', '25 mg', 'Take one tablet daily in the morning'),
  ('Fluoxetine', '20 mg', 'Take one capsule daily in the morning'),
  ('Tramadol', '50 mg', 'Take one tablet every 6 hours as needed');


-- Tests Table
CREATE TABLE Department.Tests (
  testId INT IDENTITY(1, 1) PRIMARY KEY,
  testName VARCHAR(100),
  departmentId INT,
  testCost DECIMAL(10, 2),
  FOREIGN KEY (departmentId) REFERENCES Department.Departments(departmentId)
);

-- Tests Table
INSERT INTO Department.Tests (testName, departmentId, testCost)
VALUES
  ('ECG', 43, 75.00),
  ('X-ray', 44, 120.00),
  ('MRI', 45, 300.00),
  ('Ultrasound', 46, 200.00),
  ('Colonoscopy', 47, 500.00),
  ('CT Scan', 48, 350.00),
  ('Echocardiogram', 49, 150.00),
  ('Blood Test', 50, 80.00),
  ('Urine Test', 51, 50.00),
  ('Stool Test', 52, 60.00),
  ('Pap Smear', 53, 90.00),
  ('Mammogram', 54, 200.00),
  ('Bone Density Test', 55, 150.00),
  ('Allergy Test', 56, 100.00),
  ('Biopsy', 57, 250.00),
  ('Endoscopy', 58, 300.00),
  ('Hearing Test', 59, 70.00),
  ('Visual Field Test', 60, 100.00),
  ('Lung Function Test', 61, 120.00),
  ('Genetic Testing', 62, 400.00);



-- TestResults Table
CREATE TABLE Department.TestResults (
  resultId INT IDENTITY(1, 1) PRIMARY KEY,
  testId INT,
  patientId INT,
  doctorId INT,
  resultDate DATE,
  resultDetails VARCHAR(200),
  FOREIGN KEY (testId) REFERENCES Department.Tests(testId),
  FOREIGN KEY (patientId) REFERENCES Patients.Patients(patientId),
  FOREIGN KEY (doctorId) REFERENCES Employees.Doctors(doctorId)
);

-- TestResults Table
INSERT INTO Department.TestResults (testId, patientId, doctorId, resultDate, resultDetails)
VALUES
  (15, 1, 1, '2023-06-01', 'Normal sinus rhythm'),
  (16, 2, 2, '2023-06-02', 'Fracture in the left arm'),
  (17, 3, 5, '2023-06-03', 'No abnormal findings'),
  (18, 4, 7, '2023-06-04', 'Gallstones detected'),
  (19, 5, 9, '2023-06-05', 'Polyp found in the colon'),
  (20, 6, 11, '2023-06-06', 'Normal brain MRI'),
  (21, 7, 13, '2023-06-07', 'Elevated cholesterol levels'),
  (22, 8, 15, '2023-06-08', 'Low hemoglobin count'),
  (23, 9, 17, '2023-06-09', 'Urinary tract infection'),
  (24, 10, 19, '2023-06-10', 'Negative for blood in stool'),
  (25, 11, 3, '2023-06-11', 'Abnormal Pap smear results'),
  (26, 12, 4, '2023-06-12', 'Suspicious mass in the breast'),
  (27, 13, 6, '2023-06-13', 'Osteoporosis detected'),
  (28, 14, 10, '2023-06-14', 'Positive for peanut allergy'),
  (29, 15, 12, '2023-06-15', 'Malignant tumor found'),
  (30, 16, 14, '2023-06-16', 'Inflammation in the esophagus'),
  (31, 17, 16, '2023-06-17', 'Hearing loss in the right ear'),
  (32, 18, 18, '2023-06-18', 'Normal visual field test'),
  (33, 19, 20, '2023-06-19', 'Impaired lung function'),
  (34, 20, 8, '2023-06-20', 'Genetic mutation detected');

-- Surgeries Table
CREATE TABLE Department.Surgeries (
  surgeryId INT IDENTITY(1, 1) PRIMARY KEY,
  surgeryName VARCHAR(100),
  departmentId INT,
  surgeonId INT,
  surgeryDate DATE,
  surgeryDetails VARCHAR(200),
  FOREIGN KEY (departmentId) REFERENCES Departments(departmentId),
  FOREIGN KEY (surgeonId) REFERENCES Doctors(doctorId)
);

-- Surgeries Table
INSERT INTO Department.Surgeries (surgeryName,departmentId, surgeonId,  surgeryDate, surgeryDetails)
VALUES
  ('Appendectomy', 43, 2, '2023-07-01', 'Removal of the appendix'),
  ('Knee Replacement', 44, 4, '2023-07-02', 'Replacement of knee joint'),
  ('Skin Biopsy', 45, 6, '2023-07-03', 'Removal and examination of skin tissue'),
  ('Cataract Surgery', 46, 8, '2023-07-04', 'Removal of the cloudy lens'),
  ('Colon Resection', 47, 10, '2023-07-05', 'Removal of a portion of the colon'),
  ('Brain Tumor Removal', 48, 12, '2023-07-06', 'Removal of a brain tumor'),
  ('Tonsillectomy', 49, 14, '2023-07-07', 'Removal of the tonsils'),
  ('Kidney Stone Removal', 50, 16, '2023-07-08', 'Removal of kidney stones'),
  ('Cesarean Section', 51, 18, '2023-07-09', 'Delivery of a baby through surgical incision'),
  ('Pediatric Hernia Repair', 52, 20, '2023-07-10', 'Repair of a hernia in a child'),
  ('Laparoscopic Cholecystectomy', 53, 1, '2023-07-11', 'Removal of the gallbladder'),
  ('Breast Lumpectomy', 54, 3, '2023-07-12', 'Removal of a breast tumor'),
  ('Lung Lobectomy', 55, 5, '2023-07-13', 'Removal of a lobe of the lung'),
  ('Endoscopic Sinus Surgery', 56, 7, '2023-07-14', 'Surgical treatment of sinusitis'),
  ('Prostatectomy', 57, 9, '2023-07-15', 'Removal of the prostate gland'),
  ('Hip Fracture Repair', 58, 11, '2023-07-16', 'Repair of a fractured hip'),
  ('Gastric Bypass Surgery', 59, 13, '2023-07-17', 'Weight loss surgery'),
  ('Tubal Ligation', 60, 15, '2023-07-18', 'Permanent contraception procedure'),
  ('Spinal Fusion', 61, 17, '2023-07-19', 'Joining of two or more vertebrae'),
  ('Emergency Appendectomy', 62, 19, '2023-07-20', 'Urgent removal of the appendix');


-- Create Prescriptions Table
CREATE TABLE Patients.Prescriptions (
  appointmentId INT,
  patientId INT,
  medicationId INT,
  medicine VARCHAR(100),
  dosage VARCHAR(50),
  instructions VARCHAR(200),
  FOREIGN KEY (appointmentId) REFERENCES Patients.Appointments(appointmentId),
  FOREIGN KEY (patientId) REFERENCES Patients.Patients(patientId),
  FOREIGN KEY (medicationId) REFERENCES Department.Medications(medicationId),
);

-- Prescriptions Table
INSERT INTO Patients.Prescriptions (appointmentId, patientId, medicationId, medicine, dosage, instructions)
VALUES
  (1, 1, 1, 'Amoxicillin', '500mg', 'Take twice daily with food'),
  (2, 2, 2, 'Ibuprofen', '400mg', 'Take as needed for pain'),
  (3, 3, 3, 'Lisinopril', '10mg', 'Take once daily in the morning'),
  (4, 4, 4, 'Metformin', '1000mg', 'Take with meals'),
  (5, 5, 5, 'Atorvastatin', '20mg', 'Take at bedtime'),
  (6, 6, 6, 'Levothyroxine', '50mcg', 'Take on an empty stomach'),
  (7, 7, 7, 'Albuterol', '2 puffs', 'Take as needed for asthma symptoms'),
  (8, 8, 8, 'Warfarin', '5mg', 'Take once daily'),
  (9, 9, 9, 'Omeprazole', '20mg', 'Take before a meal'),
  (10, 10, 10, 'Sertraline', '50mg', 'Take once daily in the morning'),
  (11, 11, 11, 'Hydrochlorothiazide', '25mg', 'Take once daily'),
  (12, 12, 12, 'Insulin', '10 units', 'Inject subcutaneously before meals'),
  (13, 13, 13, 'Naproxen', '500mg', 'Take as needed for pain'),
  (14, 14, 14, 'Lorazepam', '1mg', 'Take as needed for anxiety'),
  (15, 15, 15, 'Montelukast', '10mg', 'Take once daily in the evening'),
  (16, 16, 16, 'Ciprofloxacin', '500mg', 'Take twice daily with or without food'),
  (17, 17, 17, 'Acetaminophen', '650mg', 'Take as needed for pain or fever'),
  (18, 18, 18, 'Diphenhydramine', '25mg', 'Take at bedtime for allergies'),
  (19, 19, 19, 'Fluticasone', '50mcg', 'Inhale two puffs twice daily'),
  (20, 20, 20, 'Docusate', '100mg', 'Take once daily for constipation');

-- Create Salary table for Nurses 
CREATE TABLE Employees.Nurses_Salary (
  salaryId INT IDENTITY(1, 1) PRIMARY KEY,
  nurseId INT,
  amount DECIMAL(10, 2),
  paymentDate DATE,
  FOREIGN KEY (nurseId) REFERENCES Employees.Nurses(nurseId)
);

--  Nurses_Salary 
INSERT INTO Employees.Nurses_Salary (nurseId, amount, paymentDate)
VALUES
  (1, 3500.00, '2023-01-15'),
  (2, 3750.00, '2023-01-15'),
  (3, 4000.00, '2023-01-15'),
  (4, 3250.00, '2023-01-15'),
  (5, 3800.00, '2023-01-15'),
  (6, 4100.00, '2023-01-15'),
  (7, 3500.00, '2023-01-15'),
  (8, 3900.00, '2023-01-15'),
  (9, 3650.00, '2023-01-15'),
  (10, 4000.00, '2023-01-15'),
  (11, 3850.00, '2023-01-15'),
  (12, 3550.00, '2023-01-15'),
  (13, 3700.00, '2023-01-15'),
  (14, 3950.00, '2023-01-15'),
  (15, 3800.00, '2023-01-15'),
  (16, 3600.00, '2023-01-15'),
  (17, 3750.00, '2023-01-15'),
  (18, 4000.00, '2023-01-15'),
  (19, 3450.00, '2023-01-15'),
  (20, 3800.00, '2023-01-15');


-- Create Salary table for Doctors 
CREATE TABLE Employees.DoctorsSalary (
  salaryId INT IDENTITY(1, 1) PRIMARY KEY,
  doctorId INT,
  amount DECIMAL(10, 2),
  paymentDate DATE,
  FOREIGN KEY (doctorId) REFERENCES Employees.Doctors(doctorId)
);
--  Doctors_Salary table
INSERT INTO Employees.DoctorsSalary (doctorId, amount, paymentDate)
VALUES
  (1, 7500.00, '2023-01-15'),
  (2, 8000.00, '2023-01-15'),
  (3, 7000.00, '2023-01-15'),
  (4, 8500.00, '2023-01-15'),
  (5, 8200.00, '2023-01-15'),
  (6, 7800.00, '2023-01-15'),
  (7, 7200.00, '2023-01-15'),
  (8, 7600.00, '2023-01-15'),
  (9, 7100.00, '2023-01-15'),
  (10, 8400.00, '2023-01-15'),
  (11, 7700.00, '2023-01-15'),
  (12, 7900.00, '2023-01-15'),
  (13, 7500.00, '2023-01-15'),
  (14, 8300.00, '2023-01-15'),
  (15, 8200.00, '2023-01-15'),
  (16, 7800.00, '2023-01-15'),
  (17, 7500.00, '2023-01-15'),
  (18, 7100.00, '2023-01-15'),
  (19, 8000.00, '2023-01-15'),
  (20, 7600.00, '2023-01-15');

