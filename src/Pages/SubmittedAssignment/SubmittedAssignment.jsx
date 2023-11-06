import {  Link, useLoaderData } from "react-router-dom";

const SubmittedAssignment = () => {
  const SubmittedAssignment = useLoaderData();


  if (SubmittedAssignment.length > 0) {
    return (
      <div className="w-[85%] mx-auto my-20">
        <div className="products-container items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-20">
          {SubmittedAssignment?.map((assignment) => (
            <div
              key={assignment._id}
              className="md:card md:flex-row md:w-[38rem]  card-side bg-base-100 hover:shadow-xl border-2"
            >
              <div className="card-body w-[100%]">
                <h2 className="text-3xl font-bold text-center mb-2 underline">
                  {assignment.Tittle ? assignment.Tittle : "Nothing"}
                </h2>
                <p className="text-2xl font-bold">
                  <span className="text-lg font-semibold">Submitted By:</span>{" "}
                  {assignment.SubmitterName}
                </p>
                <p className="text-2xl font-bold">
                  <span className="text-lg font-semibold">Total Marks:</span>{" "}
                  {assignment.Marks}
                </p>
                <Link to={`/GiveMarks/${assignment._id}`}className="btn bg-[#FE834C] mt-5 text-white font-bold">
                  Give Marks
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <p className="text-xl md:text-4xl py-48 font-bold italic text-center">
        No Relevant Assignment Submit Yet.
      </p>
    );
  }
};

export default SubmittedAssignment;
