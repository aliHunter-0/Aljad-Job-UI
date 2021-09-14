import Link from 'next/link';
import Image from 'next/image';
import notificationIcon from '../assets/notification.png';

const Navbar = ({
	routeTo = './myapplications',
	routeName = 'My Applications',
}) => {
	return (
		<section>
			<nav className='navbar navbar-light bg-light'>
				<div className='container d-flex align-items-center py-1'>
					<Link href='./notification' passHref>
						<Image
							width={25}
							height={25}
							src={notificationIcon}
							alt='notification'
						/>
					</Link>
					<Link href={routeTo} style={{ cursor: 'pointer' }}>
						{routeName}
					</Link>
				</div>
			</nav>
		</section>
	);
};

export default Navbar;
