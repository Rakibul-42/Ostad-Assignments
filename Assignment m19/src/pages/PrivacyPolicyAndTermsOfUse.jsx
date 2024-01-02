import React from 'react';
import Button from '../componetnts/Button';

const PrivacyPolicyAndTermsOfUse = () => {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="max-w-2xl mx-auto my-8 p-8 bg-amber-100 shadow-lg rounded-lg">
				<section className="my-8">
					<h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
					<p className="text-gray-700">
						This is privacy policy content.. we can customize as
						needed.
					</p>
				</section>

				<section>
					<h2 className="text-3xl font-bold mb-4">Terms of Use</h2>
					<p className="text-gray-700">
						These are terms of use. we can customize as needed.
					</p>
				</section>
				<p className="text-blue-500">
					<Button />
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicyAndTermsOfUse;
