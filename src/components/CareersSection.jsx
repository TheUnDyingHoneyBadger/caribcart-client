import React from "react";

const CareersSection = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote / Caribbean",
      type: "Full-time",
    },
    {
      title: "Backend Developer",
      location: "Remote / Caribbean",
      type: "Full-time",
    },
    {
      title: "UI/UX Designer",
      location: "Remote / Caribbean",
      type: "Full-time",
    },
    {
      title: "Marketing Specialist",
      location: "Remote / Caribbean",
      type: "Full-time",
    },
  ];

  return (
    <div className="py-20 px-4 md:px-16 lg:px-24 xl:px-40 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800">
        Join Our Team
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mt-2 max-w-xl mx-auto">
        Be part of our Caribbean marketplace journey. We’re building a vibrant,
        innovative platform connecting buyers and sellers across the region.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition relative flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600">{job.location}</p>
              <span className="mt-2 inline-block px-3 py-1 bg-linear-to-tr from-[#FF6B6B] to-[#FFD93D] text-white rounded-full text-xs font-medium">
                {job.type}
              </span>
            </div>

            <button className="mt-6 w-full bg-linear-to-r cursor-pointer from-[#1DD3B0] to-[#3C91E6] text-white py-2 rounded-md font-semibold hover:scale-105 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareersSection;
