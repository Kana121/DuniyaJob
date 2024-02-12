import React, { useState } from "react";
//import "../../../../src/pages/_root/innerpages/PostJob.css"; // Import your CSS file

const AddJob = () => {
  const [desc, setDesc] = useState("");
  const [exp, setExp] = useState("");
  const [profile, setProfile] = useState("");
  const [techs, setTechs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = {
      desc: desc,
      exp: parseInt(exp),
      profile: profile,
      techs: techs.split(",").map((tech) => tech.trim()),
    };
    console.log(newJob);

    // Clear input fields after submission
    setDesc("");
    setExp("");
    setProfile("");
    setTechs("");
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <p className="text-3xl font-semibold text-center mb-8">
        Post New Job Opportunities
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Experience (years)"
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            className="input-field bg-white" // Add bg-white class here
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Profile"
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            className="input-field bg-white" // Add bg-white class here
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Technologies (comma separated)"
            value={techs}
            onChange={(e) => setTechs(e.target.value)}
            className="input-field bg-white" // Add bg-white class here
            required
          />
        </div>
        <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Job Opportunity
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
