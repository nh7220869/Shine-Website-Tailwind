"use client"
import { useState } from 'react';

interface Review {
  name: string;
  location: string;
  review: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Ayesha Khan',
      location: 'Karachi, Pakistan',
      review: 'Shine Shine made my house sparkle! Their team was punctual, professional, and detailed. I’m so impressed with their work, and my house has never looked cleaner!',
    },
    {
      name: 'Imran Ali',
      location: 'Karachi, Pakistan',
      review: 'I hired Shine Shine for a post-renovation clean-up, and they did an amazing job. They left no corner untouched, and the whole place smells fresh and new. Highly recommended!',
    },
    {
      name: 'Fatima Ahmed',
      location: 'Karachi, Pakistan',
      review: 'I’ve used Shine Shine for regular cleaning services for months, and I’m always happy with the results. Their team is friendly, reliable, and always does a thorough job. Worth every penny!',
    },
    {
      name: 'Hassan Raza',
      location: 'Karachi, Pakistan',
      review: 'Shine Shine exceeded my expectations! They cleaned my office space quickly and efficiently, and now it feels so much more inviting. Will definitely book them again!',
    },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: '',
    location: '',
    review: '',
  });

  const [successMessage, setSuccessMessage] = useState<string>('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', location: '', review: '' });
    setSuccessMessage('Review Submitted Successfully!');
    setTimeout(() => setSuccessMessage(''), 3000); // Reset message after 3 seconds
  };

  return (
    <section className="bg-light-cream py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold text-dark-green mb-12 font-serif animate-shake">What Our Customers Say</h2>

        {/* Display Reviews */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transition transform hover:scale-105"
            >
              
              <p className="text-xl text-gray-700 mb-4">{review.review}</p>
              <div className="font-semibold text-dark-green text-black">{review.name}</div>
              <div className="text-sm text-gray-500">{review.location}</div>
            </div>
          ))}
        </div>

        {/* Review Submission Form */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-dark-green mb-4">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div>
              <label htmlFor="name" className="block text-left text-dark-green ">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-black"
                required
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-left text-dark-green">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newReview.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="review" className="block text-left text-dark-green">Your Review</label>
              <textarea
                id="review"
                name="review"
                value={newReview.review}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-sky-400 text-white px-8 py-3 rounded-lg shadow-md hover:bg-yellow-600"
              >
                Submit Review
              </button>
            </div>
          </form>

          {/* Success Message */}
          {successMessage && (
            <div className="mt-6 text-green-500 font-semibold">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
