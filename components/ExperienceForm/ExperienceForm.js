const ExperienceForm = (props) => {
	return (
		<div className='p-3 bg-light border'>
			<input
				type='text'
				className='form-control  py-2 my-3'
				placeholder='Title'
			/>
			<input
				type='text'
				className='form-control  py-2 my-3'
				placeholder='Company'
			/>
			<input
				type='text'
				className='form-control py-2 my-3'
				placeholder='Industry'
			/>
			<textarea
				type='text'
				className='form-control py-2 my-3'
				placeholder='Summary'
			/>

			<button className='btn btn-primary w-25'>OK</button>
			<button className='btn btn-danger mx-3' onClick={props.handleClose}>
				Cancle
			</button>
		</div>
	);
};

export default ExperienceForm;
