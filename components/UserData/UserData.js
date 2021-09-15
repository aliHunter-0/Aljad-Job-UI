import Image from 'next/image';
import { useState } from 'react';
import user from '../../assets/user.jpeg';
import classes from './UserData.module.css';

const DUMMY_TAGS = ['node', 'react', 'flutter'];

const UserData = (props) => {
	const [note, setNote] = useState();
	const [noteDate, setNoteDate] = useState();
	const [notes, setNotes] = useState([]);

	const handleNoteChange = (e) => {
		setNote(e.target.value);
	};

	const addNote = () => {
		if (note === '') return;
		setNotes((prev) => [...prev, note]);
		setNote('');
	};

	const deleteNote = (note) => {
		setNotes(notes.filter((item) => item !== note));
	};
	return (
		<div>
			<div className='navbar navbar-light bg-light'>
				<div className='container'>
					<div className='d-flex align-items-center'>
						<Image
							className='rounded-circle'
							height={100}
							width={100}
							alt='test'
							src={user}
						/>
						<div>
							<p className='mx-3'>name name name</p>

							{DUMMY_TAGS.map((item, i) => {
								return (
									<span className='mx-2 fw-light' key={i}>
										{item}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className='container mt-5 '>
				<div className='row'>
					<div className={`col-4`}>
						<div className={`bg-light p-3 rounded ${classes.personalInfo}`}>
							<p className={`display-6 pb-2 ${classes.infosHeaders}`}>
								Personal information
							</p>
							<div className='px-4'>
								<p className='fw-light'>
									First Name: <span className='fw-normal'>Ali</span>
								</p>
								<p className='fw-light'>
									Last Name: <span className='fw-normal'>Ali</span>
								</p>
								<p className='fw-light'>
									Address: <span className='fw-normal'>Ali</span>
								</p>
							</div>
							<p className={`display-6 mt-5 pb-2 ${classes.infosHeaders}`}>
								Contact information
							</p>
							<div className='p-4'>
								<p className='fw-light'>
									Phone Number: <span className='fw-normal'>0004535345354</span>
								</p>
								<p className='fw-light'>
									Email: <span className='fw-normal'>Ali</span>
								</p>
							</div>

							<div>
								<div>
									<p className={`display-6 mt-5 pb-2 ${classes.infosHeaders}`}>
										Notes
									</p>
									<div className='p-4'>
										{notes.map((note, i) => {
											return (
												<div
													key={i}
													className={`mb-3 bg-dark ${classes.noteCard}`}>
													<p>{note}</p>
													<i
														onClick={deleteNote.bind(null, note)}
														className={`bi bi-x-circle-fill ${classes.deleteIcon}`}></i>
												</div>
											);
										})}

										<textarea
											onChange={handleNoteChange}
											value={note}
											type='text'
											className='form-control mb-3'
											placeholder='Note'
										/>
										<button
											type='button'
											onClick={addNote}
											className='btn btn-primary w-100'>
											Add Note
										</button>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='bg-light p-3'></div> */}
					</div>

					<div className='col-8 bg-light p-3'>
						<p className={`display-6 pb-2 ${classes.infosHeaders}`}>
							Application Details
						</p>
						<div className='p-4'>
							<p className='fw-light'>
								Skills: <span className='fw-normal'>node </span>
							</p>
							<p className='fw-light'>
								Details:{' '}
								<span className='fw-normal'>
									tetttttttttttttttttttttttttttttt
									tetttttttttttttttttttttttttttttt
									tetttttttttttttttttttttttttttttt
									tetttttttttttttttttttttttttttttt
								</span>
							</p>
							<p className='fw-light'>Experience: </p>
							<div
								className={`mx-5 bg-white p-3 rounded mb-3 ${classes.expInfo}`}>
								<p className='fw-light'>
									Title: <span className='fw-normal'>Test</span>
								</p>
								<p className='fw-light'>
									Company: <span className='fw-normal'>Test</span>
								</p>

								<p className='fw-light'>
									Industry: <span className='fw-normal'>Test</span>
								</p>
								<p className='fw-light'>
									Summary: <span className='fw-normal'>Test</span>
								</p>
							</div>
							<p className='fw-light'>
								Expected Salary: <span className='fw-normal'>900$</span>
							</p>
							<p className='fw-light'>
								CV: <span className='fw-normal'>www.url.here.com</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserData;
