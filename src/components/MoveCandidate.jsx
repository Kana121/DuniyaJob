import React from 'react';

function MoveCandidate({ candidate }) {
  return (
    <>
      {candidate && (
        <div className="moving-candidates bg-white rounded-full p-4 w-[300px] break-words flex items-center">
          <div className="left">
            <img
              src={candidate.image}
              className="w-[50px] h-[50px] rounded-full mr-5"
              alt="person"
            />
          </div>
          <div className="right w-[250px] break-words">
            <h2 className="flex flex-wrap">{candidate.interview}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default MoveCandidate;