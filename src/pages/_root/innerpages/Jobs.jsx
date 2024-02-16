import React, { useState } from "react";
import JobsCard from "../../../components/JobsCard";
import JobData from "../../../jsondata/csvjson.json";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import Loader from "../../../components/Loader";

function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  const filteredData = JobData.filter((val) => {
    if (searchTerm === "" && searchLocation === "") {
      return true;
    } else if (
      val.job_titel
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()) &&
      val.Loction.toLocaleLowerCase().includes(
        searchLocation.toLocaleLowerCase()
      )
    ) {
      return true;
    }
    return false;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (indexOfLastItem < filteredData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="Jobs flex flex-col items-center text-gray-700">
        {/* search */}
        <div className="jobs-search flex justify-start">
          <div className="search flex justify-start">
            <div className="hero-search my-20">
              <div className="search-input px-10 py-5 drop-shadow-xl bg-white flex flex-col  md:flex-row justify-around items-center rounded-2xl border gap-3 relative md:w-[1040px]">
                <input
                  type="text"
                  className="border-0 outline-none pl-4  md:w-[400px]"
                  placeholder="Search jobs by 'skills'"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />{" "}
                <BiSearch className="text-3xl absolute left-12 top-5 md:top-7 md:left-8 text-gray-500" />
                <RxDividerVertical className="text-gray-100 text-4xl absolute left-[455px] hidden md:block font-light" />
                <input
                  type="text"
                  className="border-0 outline-none pl-3 my-3 md:my-0 md:w-[140px]"
                  placeholder="All cities 'India' "
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                />
                <MdOutlineLocationOn className="text-3xl absolute left-12 top-16 md:top-7 md:left-[500px] text-gray-500 " />
                <button
                  className="min-w-[240px] max-w-full bg-green-700 text-white py-3 px-4 rounded-md mx-3 md:mx-0"
                  onClick={() => setCurrentPage(1)} // Reset page on search
                >
                  Search jobs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Job Cards */}
        <div className="jobs-cards grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
          {currentItems.map((data, id) => (
            <JobsCard
              key={id}
              FIELD1={data.FIELD1}
              job_titel={data.job_titel}
              company_name={data.company_name}
              Location={data.Loction}
              salery={data.salery}
              other_role={data.other_role}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination flex justify-center mt-4 mb-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-gray-200 px-3 py-1 rounded-md mr-2"
          >
            Prev
          </button>
          {/* Page numbers */}
          {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => (
            ((i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1) || i === 0 || i === Math.ceil(filteredData.length / itemsPerPage) - 1) &&
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`bg-gray-200 px-3 py-1 rounded-md mr-2 ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= filteredData.length}
            className="bg-gray-200 px-3 py-1 rounded-md ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Jobs;
