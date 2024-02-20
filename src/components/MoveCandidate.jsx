// function MoveCandidate() {
//   return (
//     <>
//       <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center ">
//         <div className="left">
//           <img
//             src="https://cpr.pt/wp-content/uploads/2019/01/16176889_112685309244626_578204711_n.jpg"
//             className="w-[50px] h-[50px] rounded-full mr-5"
//             alt="person"
//           />
//         </div>
//         <div className="right w-[250px] break-words">
//           <h2 className=" flex flex-wrap">
//             Mark has fixed an interview with Elon.
//           </h2>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MoveCandidate;


// import { candidate1 } from "../jsondata/candidate.json";

// import React, { useState, useEffect } from 'react';

// function MoveCandidate() {
//   const [candidateData, setCandidateData] = useState(null);
//   const [selectedId, setSelectedId] = useState(1); // Default to ID 1, for example

//   useEffect(() => {
//     fetchCandidateData(selectedId);
//   }, [selectedId]);

//   const fetchCandidateData = async (id) => {
//     try {
//       const response = await fetch(candidate1);
//       const data = await response.json();
//       const candidate = data.find(candidate => candidate.id === id);
//       setCandidateData(candidate);
//     } catch (error) {
//       console.error('Error fetching candidate data:', error);
//     }
//   };

//   return (
//     <>
//       {candidateData && (
//         <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center ">
//           <div className="left">
//             <img
//               src={candidateData.image}
//               className="w-[50px] h-[50px] rounded-full mr-5"
//               alt="person"
//             />
//           </div>
//           <div className="right w-[250px] break-words">
//             <h2 className=" flex flex-wrap">{candidateData.interview}</h2>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default MoveCandidate;



// import React, { useState, useEffect } from 'react';
// import candidatesData from '../jsondata/candidate.json'; // Importing JSON file outside the component

// function MoveCandidate({ candidates }) {
//   const [candidateData, setCandidateData] = useState(null);
//   const [selectedId, setSelectedId] = useState(1); // Default to ID 1, for example

//   useEffect(() => {
//     fetchCandidateData(selectedId);
//   }, [selectedId]);

//   const fetchCandidateData = (id) => {
//     const candidate = candidates.find(candidate => candidate.id === id);
//     setCandidateData(candidate);
//   };

//   return (
//     <>
//       {candidateData && (
//         <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center ">
//           <div className="left">
//             <img
//               src={candidateData.image}
//               className="w-[50px] h-[50px] rounded-full mr-5"
//               alt="person"
//             />
//           </div>
//           <div className="right w-[250px] break-words">
//             <h2 className=" flex flex-wrap">{candidateData.interview}</h2>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default MoveCandidate;

// Usage
// You can now pass the imported JSON data as a prop when using MoveCandidate component
// For example:
// <MoveCandidate candidates={candidatesData} />




// import React, { useState, useEffect } from 'react';

// function MoveCandidate({ candidates }) {
//   const [selectedId, setSelectedId] = useState(1); // Default to ID 1, for example
//   const [candidateData, setCandidateData] = useState(null);

//   useEffect(() => {
//     fetchCandidateData(selectedId);
//   }, [selectedId]);

//   const fetchCandidateData = (id) => {
//     const candidate = candidates.find(candidate => candidate.id === id);
//     setCandidateData(candidate);
//   };

//   return (
//     <>
//       {candidateData && (
//         <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center ">
//           <div className="left">
//             <img
//               src={candidateData.image}
//               className="w-[50px] h-[50px] rounded-full mr-5"
//               alt="person"
//             />
//           </div>
//           <div className="right w-[250px] break-words">
//             <h2 className="flex flex-wrap">{candidateData.interview}</h2>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default MoveCandidate;




// import React, { useState, useEffect } from 'react';

// function MoveCandidate({ candidates }) {
//   const [selectedId, setSelectedId] = useState(1);
//   const [candidateData, setCandidateData] = useState(null);

//   useEffect(() => {
//     fetchCandidateData(selectedId);
//   }, [selectedId]);

//   const fetchCandidateData = (id) => {
//     const candidate = candidates.find(candidate => candidate.id === id);
//     setCandidateData(candidate);
//   };

//   return (
//     <>
//       {candidateData && (
//         <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center ">
//           <div className="left">
//             <img
//               src={candidateData.image}
//               className="w-[50px] h-[50px] rounded-full mr-5"
//               alt="person"
//             />
//           </div>
//           <div className="right w-[250px] break-words">
//             <h2 className="flex flex-wrap">{candidateData.interview}</h2>
//           </div>
//         </div>
//       )}
//       <div>
//         {candidates.map(candidate => (
//           <button key={candidate.id} onClick={() => setSelectedId(candidate.id)}>
//             Candidate {candidate.id}
//           </button>
//         ))}
//       </div>
//     </>
//   );
// }

// export default MoveCandidate;

// import React from 'react';

// function MoveCandidate({ candidate }) {
//   return (
//     <>
//       {candidate && (
//         <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center ">
//           <div className="left">
//             <img
//               src={candidate.image}
//               className="w-[50px] h-[50px] rounded-full mr-5"
//               alt="person"
//             />
//           </div>
//           <div className="right w-[250px] break-words">
//             <h2 className="flex flex-wrap">{candidate.interview}</h2>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default MoveCandidate;


import React from 'react';

function MoveCandidate({ candidate }) {
  return (
    <>
      {candidate && (
        <div className="moving-candidates bg-white rounded-full p-4 md:w-[300px] lg:w-[400px] xl:w-[500px] break-words flex items-center ">
          <div className="left">
            <img
              src={candidate.image}
              className="w-[50px] h-[50px] rounded-full mr-5"
              alt="person"
            />
          </div>
          <div className="right flex-1 break-words">
            <h2 className="flex flex-wrap">{candidate.interview}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default MoveCandidate;
