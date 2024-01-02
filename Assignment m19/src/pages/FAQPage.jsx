import React from 'react';
import Button from '../componetnts/Button';

const FaqPage = () => {
	// Sample FAQ data
	const faqData = [
		{
			id: 1,
			question: 'What is Lorem Ipsum?',
			answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		},
		{
			id: 2,
			question: 'How do I get started?',
			answer: 'Getting started is easy! Just follow the steps outlined in our documentation.',
		},
		// Add more FAQ items as needed
	];

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="container mx-auto my-8">
				<h1 className="text-3xl font-semibold mb-6">
					Frequently Asked Questions
				</h1>
				<p className="text-blue-500">
					<Button />
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{faqData.map((faq) => (
						<div
							key={faq.id}
							className="bg-gray-800 p-6 rounded-md shadow-md">
							<h3 className="text-lg font-semibold mb-2">
								{faq.question}
							</h3>
							<p className="text-gray-400 mb-4">{faq.answer}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default FaqPage;
