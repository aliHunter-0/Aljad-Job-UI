import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';
import classes from '../components/Card/jobCard.module.css';
import ExperienceForm from '../components/ExperienceForm/ExperienceForm';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
const JobDetails = (props) => {
	console.log('iddd', props.id);

	const [phone, setPhone] = useState();
	const [firstname, setFirstname] = useState();
	const [lastname, setLastname] = useState();
	const [email, setEmail] = useState();
	const [address, setAddress] = useState();
	const [skill, setSkill] = useState();
	const [skills, setSkills] = useState([]);
	const [details, setDetails] = useState();
	const [experience, setExperience] = useState({});
	const [openExp, setOpenExp] = useState(false);
	const [salary, setSalary] = useState();
	const [photo, setPhoto] = useState();
	const [imageView, setImageView] = useState();
	const [resume, setResume] = useState();

	const handlePhoneChange = (value) => {
		setPhone(value);
	};
	const handleFirstnameChange = (e) => {
		setFirstname(e.target.value);
	};
	const handleLastnameChange = (e) => {
		setLastname(e.target.value);
	};
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};
	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	};

	const handleSkillChange = (e) => {
		setSkill(e.target.value);
	};

	const handleDetailsChange = (e) => {
		setDetails(e.target.value);
	};

	const handleExperienceChange = (data) => {
		setExperience(data);
	};

	const handleToggleExp = () => {
		setOpenExp((prev) => !prev);
	};

	const handleSalaryChange = (e) => {
		setSalary(e.target.value);
	};

	const handlePhotoChange = (e) => {
		setPhoto(e.target.files[0]);
		setImageView(URL.createObjectURL(e.target.files[0]));
	};

	const handleResumeChange = (e) => {
		setResume(e.target.files[0]);
	};

	const handleAddSkill = () => {
		if (skill === '' || skills.find((item) => item === skill)) return;
		setSkills((prev) => [...prev, skill]);
		setSkill('');
	};
	const handleDeleteSkill = (skill) => {
		setSkills(skills.filter((item) => item !== skill));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();

		formData.append('phone', phone);
		formData.append('firstname', firstname);
		formData.append('lastname', lastname);
		formData.append('email', email);
		formData.append('address', address);
		formData.append('skills', skills);
		formData.append('details', details);
		formData.append('experience', experience);
		formData.append('salary', salary);
		formData.append('photo', photo);
		formData.append('resume', resume);
	};
	return (
		<>
			<Navbar />
			<div className='container mt-5'>
				<div className='row gx-5'>
					{/* left side */}
					<div className='col-12 col-md-6'>
						<h2 className='display-2'>Flutter dev</h2>
						<div>
							<div className='d-flex flex-wrap'>
								<Link href='./myapplications' passHref>
									<span className={`badge btn bg-info p-2 m-2 ${classes.tags}`}>
										mobile
									</span>
								</Link>
								<Link href='./myapplications' passHref>
									<span className={`badge btn bg-info p-2 m-2 ${classes.tags}`}>
										mobile
									</span>
								</Link>
								<Link href='./myapplications' passHref>
									<span className={`badge btn bg-info p-2 m-2 ${classes.tags}`}>
										mobile
									</span>
								</Link>
							</div>

							<p style={{ opacity: 0.7 }}>until 2021-1-1</p>

							<p className='display-6'>Description</p>

							<p style={{ lineHeight: 1.6 }}>
								testttttttestestttttt testtttttttttttttt setttttttttttttttest
								tesssssssssssstt testtttttttttttttt testttttttestestttttt
								testtttttttttttttt setttttttttttttttest tesssssssssssstt
								testtttttttttttttt testttttttestestttttt testttttttttttt
							</p>
						</div>
					</div>

					{/* right side */}
					<div className='col-12 col-md-6' style={{ minHeight: '50vh' }}>
						<form onSubmit={handleSubmit}>
							<p
								className='display-6 my-3 py-2'
								style={{ borderBottom: '1px solid #32caf06e' }}>
								Personal information
							</p>
							<PhoneInput
								country='iq'
								value={phone}
								onChange={handlePhoneChange}
							/>
							<div className='row'>
								<div className='col-6'>
									<input
										type='text'
										className='form-control  py-3 my-3'
										placeholder='Firstname'
										value={firstname}
										onChange={handleFirstnameChange}
									/>
								</div>

								<div className='col-6'>
									<input
										type='text'
										className='form-control  py-3 my-3'
										placeholder='Lastname'
										value={lastname}
										onChange={handleLastnameChange}
									/>
								</div>
							</div>

							<div className='row'>
								<div className='col-6'>
									<input
										type='text'
										className='form-control  py-3 my-3'
										placeholder='Email'
										value={email}
										onChange={handleEmailChange}
									/>
								</div>
								<div className='col-6'>
									<input
										type='text'
										className='form-control  py-3 my-3'
										placeholder='Address'
										value={address}
										onChange={handleAddressChange}
									/>
								</div>
							</div>

							{/* Details View */}
							<p
								className='display-6 my-3 py-2'
								style={{ borderBottom: '1px solid #32caf06e' }}>
								Details
							</p>

							<div className='row align-items-center'>
								<div className='col-8 col-lg-9'>
									<input
										type='text'
										className='form-control  py-3 my-3'
										placeholder='Skills'
										value={skill}
										onChange={handleSkillChange}
									/>
								</div>
								<div className='col-4 col-lg-3'>
									<button
										type='button'
										className='btn btn-primary'
										onClick={handleAddSkill}>
										Add Skill
									</button>
								</div>
							</div>

							<div className='d-flex flex-wrap'>
								{skills.map((skill, i) => {
									return (
										<div key={i} className='d-flex mx-3'>
											<i className='bi bi-tag-fill'></i>
											<p className='mx-2 bg-light'>{skill}</p>
											<i
												style={{ cursor: 'pointer' }}
												onClick={handleDeleteSkill.bind(null, skill)}
												className='bi bi-x-circle-fill'></i>
										</div>
									);
								})}
							</div>

							<textarea
								type='text'
								className='form-control  py-3 my-3'
								placeholder='Details'
								value={details}
								onChange={handleDetailsChange}
							/>

							<div className='my-4'>
								<div className='d-flex justify-content-between align-items-baseline my-3'>
									<p>Experience</p>
									<button
										type='button'
										className='btn btn-primary w-25'
										onClick={handleToggleExp}>
										Add
									</button>
								</div>
								{openExp && (
									<ExperienceForm
										getExperience={handleExperienceChange}
										handleClose={handleToggleExp}
									/>
								)}
							</div>

							<input
								type='number'
								className='form-control  py-3 my-3'
								placeholder='Expected Salary'
								min='0'
								max='99999'
								step='10'
								value={salary}
								onChange={handleSalaryChange}
							/>

							<div>
								<label htmlFor='formFileLg' className='form-label'>
									Photo
								</label>
								<input
									className='form-control form-control mb-3'
									id='formFileLg'
									type='file'
									onChange={handlePhotoChange}
								/>
								{photo && (
									<Image
										src={imageView}
										className='rounded-circle '
										width={80}
										height={80}
										alt='image'
									/>
								)}
							</div>

							<div className='my-3'>
								<label htmlFor='formFileLg' className='form-label'>
									Resume
								</label>
								<input
									className='form-control form-control mb-3'
									id='formFileLg'
									type='file'
									onChange={handleResumeChange}
								/>
							</div>
							<button type='submit' className='btn btn-primary w-25 mt-3'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobDetails;

export const getStaticPaths = async () => {
	return {
		fallback: true,
		paths: [
			{
				params: {
					jobId: '1',
				},
			},
		],
	};
};

export const getStaticProps = async (context) => {
	const { jobId } = context.params;

	return {
		props: {
			id: jobId,
		},
	};
};
