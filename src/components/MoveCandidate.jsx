import React from 'react';

function MoveCandidate({ candidate }) {
  return (
    <>
      {candidate && (
        <div className="moving-candidates bg-white rounded-full p-4 w-full md:w-[300px] break-words flex flex-col md:flex-row items-center">
          <div className="left hidden md:block"> {/* Hide on small screens */}
            <img
              src={candidate.image}
              className="logo-image"
              alt="logo"
            />
          </div>
          <div className="right w-full md:w-[250px] break-words mt-4 md:mt-0 md:ml-4">
            <h2 className="flex flex-wrap">{candidate.interview}</h2>
          </div>
        </div>
      )}
      <style jsx>{`
        .logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-bottom: 10px;
        }
        
        @media only screen and (max-width: 768px) {
          .moving-candidates {
            width: 100%;
            flex-direction: column; /* Stack items vertically */
            align-items: center; /* Center align items */
          }
          .right {
            width: 100%;
            text-align: center; /* Center align text */
            margin: 0; /* Reset margins */
          }
          .logo-image {
            display: none; /* Hide the logo on smaller screens */
          }
        }
      `}</style>
    </>
  );
}

export default MoveCandidate;
