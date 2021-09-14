import Image from 'next/image';
import Link from 'next/link';
import classes from './jobCard.module.css';

const JobCard = ({ jobData }) => {
	return (
		<div className={`card  rounded ${classes.myCard}`}>
			<div className='card-body d-flex flex-column justify-content-between'>
				<h3
					className={`card-title fw-normal text-center py-2 display-6 ${classes.cardTitle}`}>
					{jobData.title}
				</h3>
				<p className='text-center fw-light pt-3'>{jobData.description}</p>

				<div className='d-flex flex-wrap'>
					{jobData?.tags?.map((item, i) => {
						return (
							<Link key={i} href='./myapplications' passHref>
								<span className={`badge btn bg-info p-2 m-2 ${classes.tags}`}>
									{item}
								</span>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default JobCard;
