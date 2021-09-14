import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import classes from '../components/Card/jobCard.module.css';
import ExperienceForm from '../components/ExperienceForm/ExperienceForm';
import { useState } from 'react';
const JobDetails = (props) => {
	console.log('iddd', props.id);
	const [photo, setPhoto] = useState();
	const [imageView, setImageView] = useState();
	const [openExp, setOpenExp] = useState(false);

	const handlePhotoChange = (e) => {
		console.log(e.target.files[0]);
		setPhoto(e.target.files[0]);
		setImageView(URL.createObjectURL(e.target.files[0]));
	};

	const handleToggleExp = () => {
		setOpenExp((prev) => !prev);
	};
	return (
		<>
			<Navbar />
			<div className='container mt-5'>
				<div className='row gx-5'>
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
								testtttttttttttttt testttttttestestttttt testtttttttttttttt
								setttttttttttttttest tesssssssssssstt testtttttttttttttt
								testttttttestestttttt testtttttttttttttt setttttttttttttttest
								tesssssssssssstt testtttttttttttttt testttttttestestttttt
								testtttttttttttttt setttttttttttttttest tesssssssssssstt
							</p>
						</div>
					</div>
					<div className='col-12 col-md-6' style={{ minHeight: '50vh' }}>
						<input
							type='text'
							className='form-control  py-3 my-3'
							placeholder='Phone number'
						/>
						<input
							type='text'
							className='form-control  py-3 my-3'
							placeholder='Firstname'
						/>
						<input
							type='text'
							className='form-control  py-3 my-3'
							placeholder='Lastname'
						/>
						<input
							type='text'
							className='form-control  py-3 my-3'
							placeholder='Email'
						/>
						<input
							type='text'
							className='form-control  py-3 my-3'
							placeholder='Address'
						/>

						<div className='my-4'>
							<div className='d-flex justify-content-between align-items-baseline my-3'>
								<p>Experience</p>
								<button
									className='btn btn-primary w-25'
									onClick={handleToggleExp}>
									Add
								</button>
							</div>
							{openExp && <ExperienceForm handleClose={handleToggleExp} />}
						</div>

						<textarea
							type='text'
							className='form-control  py-3 my-3'
							placeholder='Details'
						/>

						<div>
							<label for='formFileLg' class='form-label'>
								Photo
							</label>
							<input
								class='form-control form-control mb-3'
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
								/>
							)}
						</div>

						<div className='my-3'>
							<label for='formFileLg' class='form-label'>
								Resume
							</label>
							<input
								class='form-control form-control mb-3'
								id='formFileLg'
								type='file'
								onChange={handlePhotoChange}
							/>
						</div>
						<button className='btn btn-primary w-25 mt-3'>Submit</button>
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
