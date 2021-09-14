import Navbar from '../../components/Navbar';
const JobDetails = () => {
	return (
		<>
			<Navbar />
			<div className='container mt-5'>
				<div className='row gx-5'>
					<div className='col-12 col-md-6'>
						<h2 className='display-2'>Flutter dev</h2>
						<div>
							<div className='d-flex justify-content-between w-50 py-3'>
								<span className='badge bg-info p-2'>mobile</span>
								<span className='badge bg-info p-2'>mobile</span>
								<span className='badge bg-info p-2'>mobile</span>
								<span className='badge bg-info p-2'>mobile</span>
							</div>

							<p style={{ opacity: 0.7 }}>until 2021-1-1</p>

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
					<div
						className='col-12 col-md-6 d-flex flex-column justify-content-around'
						style={{ height: '50vh' }}>
						<input
							type='text'
							className='form-control  py-3'
							placeholder='Username'
						/>
						<input
							type='text'
							className='form-control  py-3'
							placeholder='Username'
						/>
						<input
							type='text'
							className='form-control  py-3'
							placeholder='Username'
						/>
						<input
							type='text'
							className='form-control  py-3'
							placeholder='Username'
						/>

						<button className='btn btn-primary w-25  align-self-center'>
							Submit
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobDetails;

export const getStaticProps = () => {
	return {
		props: {},
	};
};
