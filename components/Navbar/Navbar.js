import Link from 'next/link';
import classes from './navbar.module.css';

const Navbar = ({ inThisPage = false }) => {
	return (
		<section>
			<nav className='navbar navbar-light bg-info' style={{ color: 'white' }}>
				<div className='container d-flex align-items-center py-1'>
					<Link href='./notification' passHref>
						<i className={`bi bi-bell-fill ${classes.noteIcon}`}>
							<span className={classes.noteNumber}>5</span>
						</i>
					</Link>
					{!inThisPage && (
						<Link passHref href='./myapplications'>
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
