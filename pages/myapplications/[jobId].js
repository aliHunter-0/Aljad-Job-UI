import Navbar from '../../components/Navbar';
import classes from './appliedJob.module.css';
const AppliedJobDetails = () => {
	return (
		<>
			<Navbar />
			<section className='container mt-5'>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<h2 className='display-2'>Flutter dev</h2>
						<span className='badge bg-warning py-2'>status: rejected</span>

						<div className='d-flex justify-content-between w-50 py-3'>
							<span className='badge bg-info p-2'>mobile</span>
							<span className='badge bg-info p-2'>mobile</span>
							<span className='badge bg-info p-2'>mobile</span>
							<span className='badge bg-info p-2'>mobile</span>
						</div>
					</div>
					<div className='col-12 col-md-6'>
						<div className={`card bg-warning ${classes.chatContainer}`}>
							<div className='card-body'>
								<p className='display-5'>Ali</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AppliedJobDetails;
