import axios from "axios";
import { useEffect, useState } from "react";
import useCustomeHook from "../../Hooks/useCustomeHook";

const MyAssignment = () => {
  const { user } = useCustomeHook();
  const [myAssignmentData, setMyAssignmentData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5006/SubmitAssignmentQuery?email=${user.email}`)
      .then((data) => setMyAssignmentData(data.data));
  }, [user.email]);

  if (myAssignmentData.length < 1) {
    return (
      <div>
        <p className="text-xl md:text-4xl font-bold italic text-center p-20">
          No Relevant Assignment Published Yet.
        </p>
      </div>
    );
  } else {
    
    return (
      <div className="w-[85%] mx-auto my-20">
        <div className="products-container items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-20">
          {myAssignmentData?.map((assignment) => (
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
                  <span className="text-lg font-semibold">Assignment Marks:</span>{" "}
                  {assignment.Marks}
                </p>
                <p className="text-2xl font-bold">
                  <span className="text-lg font-semibold">Obtain Marks:</span>{" "}
                  {assignment?.ObtainMarks? assignment?.ObtainMarks: "Result Not Published Yet"}
                </p>
                <p className="text-2xl font-bold">
                  <span className="text-lg font-semibold">
                    Assignment Status:
                  </span>{" "}
                  {assignment?.ObtainMarks? "Complete" : "Pending"} 
                </p>
                <p className="text-2xl font-bold">
                  <span className="text-lg font-semibold">Feedback:</span>{" "}
                  {assignment?.Feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default MyAssignment;
