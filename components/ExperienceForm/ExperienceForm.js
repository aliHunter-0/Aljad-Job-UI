import { useState } from 'react';

const ExperienceForm = (props) => {
	const [title, setTitle] = useState();
	const [company, setCompany] = useState();
	const [industry, setIndustry] = useState();
	const [summary, setSummary] = useState();

	const sendData = () => {
		const experience = {
			title,
			company,
			industry,
			summary,
		};

		props.getExperience(experience);
		props.handleClose();
	};
	return (
		<div className='p-3 bg-light border'>
			<input
				type='text'
				className='form-control  py-2 my-3'
				placeholder='Title'
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type='text'
				className='form-control  py-2 my-3'
				placeholder='Company'
				onChange={(e) => setCompany(e.target.value)}
			/>
			<input
				type='text'
				className='form-control py-2 my-3'
				placeholder='Industry'
				onChange={(e) => setIndustry(e.target.value)}
			/>
			<textarea
				type='text'
				className='form-control py-2 my-3'
				placeholder='Summary'
				onChange={(e) => setSummary(e.target.value)}
			/>

			<button type='button' onClick={sendData} className='btn btn-primary w-25'>
				OK
			</button>
			<button
				type='button'
				className='btn btn-secondary mx-3'
				onClick={props.handleClose}>
				Cancle
			</button>
		</div>
	);
};

export default ExperienceForm;
