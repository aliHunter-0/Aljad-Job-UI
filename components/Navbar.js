import Link from 'next/link';

const Navbar = ({ inThisPage = false }) => {
	return (
		<section>
			<nav className='navbar navbar-light bg-info' style={{ color: 'white' }}>
				<div className='container d-flex align-items-center py-1'>
					<Link href='./notification' passHref>
						{/* <Image
							width={25}
							height={25}
							src={notificationIcon}
							alt='notification'
						/> */}
						<i class='bi bi-bell-fill' style={{ color: '#fdf24f' }}></i>
					</Link>
					{!inThisPage && (
						<Link href='./myapplications'>
							<p style={{ cursor: 'pointer' }} className='m-0 fw-bold'>
								My Applications
							</p>
						</Link>
					)}
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
