import FAQs from "../../_root/footerpages/FAQPage";
// import FilterCategory from "../components/FilterCategory";
import JobsCard from "../../../components/JobsCard";
// import Search from "../components/Search";
// import { HiFilter } from "react-icons/hi";
import JobData from "../../../jsondata/csvjson.json";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import React, { Suspense } from "react";
import Loader from "../../../components/Loader";

import { Link } from "react-router-dom";

function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setLocation] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
                <Link onClick={scrollToTop} to="/JobSearch">
                  <Suspense fallback={<Loader />}>
                    <button className="min-w-[240px] max-w-full bg-green-700 text-white py-3 px-4 rounded-md mx-3 md:mx-0">
                      Search jobs
                    </button>
                  </Suspense>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="category w-[90%] lg:w-[54%]">
          <h2 className="text-2xl font-medium">Showing all jobs</h2>
          {/* filter */}
          {/* <div className="jobs-categories flex justify-center items-center gap-3">
            <button>
              <HiFilter className="text-4xl border rounded-full p-2" />
            </button>
            <div className="scrollable flex justify-start items-center overflow-auto">
              <FilterCategory category="Department" />
              <FilterCategory category="Salary" />
              <FilterCategory category="Experience" />
              <FilterCategory category="Education" />
              <FilterCategory category="Work mode" />
              <FilterCategory category="Work type" />
              <FilterCategory category="work shift" />
              <FilterCategory category="Posted in" />
              <FilterCategory category="Company" />
              <FilterCategory category="Sort by" />
              <FilterCategory category="Others" />
            </div>
          </div> */}
        </div>
        {/* Job Cards */}
        <div className="jobs-cards grid grid-rows-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2">
          {JobData &&
            // eslint-disable-next-line array-callback-return
            JobData.filter((val) => {
           
              if (searchTerm === "" && searchLocation === "") {
                return val;
              } else if (
                val.job_titel
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase()) &&
                val.Loction.toLocaleLowerCase().includes(
                  searchLocation.toLocaleLowerCase()
                )
              ) {
                return val;
              } 
            
            }
         
              ).map((data, id) => {
              return (
                <JobsCard
                  FIELD1={data.FIELD1}
                  job_titel={data.job_titel}
                  company_name={data.company_name}
                  Location={data.Loction}
                  salery={data.salery}
                  other_role={data.other_role}
                />
              );
            })}
        </div>
        <div className="bg-gray-100 w-full flex justify-center">
          <FAQs />
        </div>
      </div>
    </>
  );
}

export default Jobs;
