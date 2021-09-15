import { useRouter } from 'next/dist/client/router';
import JobCard from '../components/Card/JobCard';
import Navbar from '../components/Navbar/Navbar';
import UserData from '../components/UserData/UserData';

const JOBS_DUMMY = [
	{
		title: 'Flutter Dev',
		description: 'test etstetete tetstetetstsstettetste',
		tags: ['mobile', 'beginner', 'getx', 'test'],
		id: '1',
	},
	{
		title: 'Nodejs Dev',
		description: 'test etstetete tetstetetstsstettetste',
		tags: ['mobile', 'beginner', 'getx'],
		id: '2',
	},
	{
		title: 'Reactjs Dev',
		description:
			'test etstetete tetstetetstsstettetste test etstetete tetstetetstsstettetste ',
		tags: ['mobile', 'beginner', 'getx'],
		id: '3',
	},
	{
		title: 'Full-Stack Dev',
		description: 'test etstetete tetstetetstsstettetste ',
		tags: ['mobile', 'beginner', 'getx'],
		id: '4',
	},
];

export default function Home() {
	const router = useRouter();

	const jobDetails = (job) => {
		router.push(`./${job.id}`);
	};
	return (
		<>
			{/* <Navbar />

			<section className='container'>
				<h1 className='py-5'>Available Jobs</h1>
				<div className='row gy-5'>
					{JOBS_DUMMY.map((job, i) => {
						return (
							<div
								onClick={jobDetails.bind(null, job)}
								key={i}
								className='col-12 col-lg-4'>
								<JobCard jobData={job} />
							</div>
						);
					})}
				</div>
			</section> */}
			<UserData />
		</>
	);
}
