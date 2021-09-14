import { useRouter } from 'next/dist/client/router';
import JobCard from '../../components/Card/JobCard';
import Navbar from '../../components/Navbar';

const JOBS_DUMMY = [
	{
		title: 'Flutter Dev',
		description: 'test etstetete tetstetetstsstettetste',
		tags: ['mobile', 'beginner', 'getx'],
	},
	{
		title: 'Nodejs Dev',
		description: 'test etstetete tetstetetstsstettetste',
		tags: ['mobile', 'beginner', 'getx'],
	},
	{
		title: 'Reactjs Dev',
		description:
			'test etstetete tetstetetstsstettetste test etstetete tetstetetstsstettetste ',
		tags: ['mobile', 'beginner', 'getx'],
	},
	{
		title: 'Full-Stack Dev',
		description: 'test etstetete tetstetetstsstettetste ',
		tags: ['mobile', 'beginner', 'getx'],
	},
];

const MyApplications = ({ jobId = 1 }) => {
	const router = useRouter();
	const jobStatus = () => {
		router.push(`/myapplications/${jobId}`);
	};
	return (
		<>
			{/* Navbar Section */}
			<Navbar inThisPage={true} />

			<section className='container'>
				<h1 className='py-5'>My Applications</h1>
				<div className='row gy-5'>
					{JOBS_DUMMY.map((job, i) => {
						return (
							<div onClick={jobStatus} key={i} className='col-12 col-lg-4'>
								<JobCard jobData={job} />
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default MyApplications;
