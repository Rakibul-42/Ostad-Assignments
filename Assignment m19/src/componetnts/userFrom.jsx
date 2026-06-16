import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const UserForm = ({ value }) => {
	return (
		<header className="pattern bg-black text-white">
			<div className="container px-6 mx-auto">
				<nav className="flex flex-col py-6 sm:flex-row sm:justify-between sm:items-center">
					<a href="#">
						<img
							className="w-auto h-6 sm:h-7"
							src="data:image/png;base64,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"
							alt=""
						/>
					</a>

					<div className="flex items-center mt-2 -mx-2 sm:mt-0">
						<p className="text-blue-500">
							<Button />
						</p>
						<Link to="/Authentication">
							<button className="px-3 py-2 mx-2 text-sm font-semibold  transition-colors duration-300 transform  rounded-md hover:bg-gray-800">
								Sign Up
							</button>
						</Link>
						<Link to="/Authentication">
							<button className="px-3 py-1 text-sm font-semibold  transition-colors duration-300 transform border-2 rounded-md hover:bg-gray-700">
								Sign In
							</button>
						</Link>
					</div>
				</nav>

				<div className="flex flex-col items-center py-6 lg:h-[36rem] lg:flex-row">
					<div className="lg:w-1/2">
						<h2 className="text-3xl font-semibold  lg:text-4xl">
							Brand
						</h2>

						<h3 className="mt-2 text-2xl font-semibold ">
							Hello <span className="text-blue-400">Guest</span>
						</h3>

						<p className="mt-4">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Ipsam, eum modi incidunt adipisci quod porro
							et non exercitationem quasi, maxime culpa ut nemo ab
							delectus saepe iste nostrum explicabo a?
						</p>
					</div>

					<div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
						<div className="w-full max-w-md bg-red-100 rounded-lg dark:bg-gray-800">
							<div className="px-6 py-8 text-center">
								<h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
									Sign In
								</h2>

								<form action="#">
									<div className="mt-4">
										<input
											className="block w-full px-4 py-2 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
											type="email"
											placeholder="Email address"
											aria-label="Email address"
										/>
										<input
											className="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-400 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-500 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:ring-blue-300 focus:outline-none focus:ring"
											type="password"
											placeholder="Password"
											aria-label="Password"
										/>
									</div>

									<div className="flex items-center justify-between mt-4">
										<a
											href="#"
											className="text-sm text-gray-600 dark:text-gray-200 hover:underline">
											Forget Password?
										</a>

										<button className="px-6 py-2 font-medium  transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">
											Sign In
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default UserForm;
