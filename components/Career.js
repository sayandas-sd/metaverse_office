// pages/career.js
import React from "react";
import Navbar from "./Navbar";
export default function Career() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Join Our Team</h1>
            <p className="text-lg mt-2">
              Explore career opportunities at our company
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-10">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <JobCard
                title="Frontend Developer"
                description="We are looking for a talented Frontend Developer with experience in React and Tailwind CSS."
                location="Remote"
                type="Full-Time"
              />
              <JobCard
                title="Backend Developer"
                description="Join our backend team to work on scalable server-side solutions."
                location="New York, USA"
                type="Full-Time"
              />
              <JobCard
                title="UI/UX Designer"
                description="We need a creative UI/UX Designer to improve the user experience of our products."
                location="San Francisco, USA"
                type="Contract"
              />
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-700 text-center">
              At our company, we value creativity, collaboration, and
              innovation. We offer flexible working hours, opportunities for
              growth, and a vibrant work environment.
            </p>
          </section>
        </main>

        <footer className="bg-blue-600 text-white py-4 text-center">
          <p className="text-sm">
            &copy; 2024 Our Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

const JobCard = ({ title, description, location, type }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-sm font-medium text-gray-500">Location: {location}</p>
      <p className="text-sm font-medium text-gray-500">Job Type: {type}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
};
