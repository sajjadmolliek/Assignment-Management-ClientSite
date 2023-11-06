import { useEffect, useState } from "react";
// import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";
import axios from "axios";
import useCustomeHook from "../../Hooks/useCustomeHook";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AllAssignment = () => {
  const [levelValue, setLevelValue] = useState("All");
  const [level, setLevel] = useState("All");
  const [assignments, setAssignments] = useState([]);
  const { user } = useCustomeHook();
  const currentUser = user?.email || "No user";

  // data loading By Query
  useEffect(() => {
    axios
      .get(`http://localhost:5006/AddAssignmentQuery?level=${level}`)
      .then((data) => setAssignments(data.data));
  }, [level]);

  // Level change to find by query
  const handleChangeLevel = (e) => {
    const LevelValue = e.target.value;
    const lowerCaseValue = LevelValue;
    setLevelValue(LevelValue);
    setLevel(lowerCaseValue);
  };

  // Delete Assignment and change state
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5006/delete/${id}`, id, {
            withCredentials: true,
          })
          .then((data) => {
            const remain = assignments.filter((datas) => datas._id !== id);
            if (data.data.acknowledged) {
              setAssignments(remain);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  // desable Delete Button WIth SweetAlert

  // desable Delete Button WIth SweetAlert
  const desableDeleteBttn = () => {
    Swal.fire(
      "Oops!",
      "Your are not Valid User To Delete This Assignment",
      "error"
    );
  };

  if (assignments.length == 0) {
    return (
      <div>
        <select
          value={levelValue}
          onChange={handleChangeLevel}
          className="input input-bordered w-full"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <p className="text-xl md:text-4xl font-bold italic text-center">
          No Relevant Assignment Published Yet.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <select
          value={levelValue}
          onChange={handleChangeLevel}
          className="input input-bordered w-full"
        >
          <option value="All">All</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <div className="w-[85%] mx-auto my-20">
          <div className="products-container lg:w-[80rem] grid grid-cols-1 lg:grid-cols-2 gap-20">
            {assignments?.map((assignment) => (
              <div key={assignment._id} className="md:card md:flex-row  card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={assignment.photo} alt="Assignment" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{assignment.Tittle}
                  <div className="badge bg-[#FE834C] text-white p-3">{assignment.level}</div>
                  </h2>
                  <p>Total Marks: {assignment.Marks}</p>
                  <p>Last Date: {assignment.Date} at 11:59pm</p>
                  <div className="flex justify-center items-center gap-8">
                    <Link to={`/details/${assignment._id}`}>
                      <button className="btn bg-[#FE834C] text-white">
                        View
                      </button>
                    </Link>
                    <Link to={`/update/${assignment._id}`}>
                      <button className="btn bg-[#FE834C] text-white">
                        Update
                      </button>
                    </Link>
                    {currentUser === assignment.PostedUser ? (
                      <>
                        <button
                          onClick={() => handleDelete(assignment._id)}
                          className="btn bg-[#FE834C] text-white"
                        >
                          Delete
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={desableDeleteBttn}
                          className="btn bg-[#FE834C]  text-white"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default AllAssignment;
