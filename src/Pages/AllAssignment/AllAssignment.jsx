import { useEffect, useState } from "react";
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard";

const AllAssignment = () => {
  //   const [itemsPerPage, setItemsPerPage] = useState(10);
  const [levelValue, setLevelValue] = useState("All");
  const [level, setLevel] = useState("All");
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5006/AddAssignment?level=${level}`)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [level]);

  const handleChangeLevel = (e) => {
    const LevelValue = e.target.value;
    const lowerCaseValue = LevelValue.toLowerCase();
    setLevelValue(LevelValue);
    setLevel(lowerCaseValue);
  };



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
        <div className="products-container w-[80rem] grid grid-cols-1 lg:grid-cols-2 gap-20">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
            ></AssignmentCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAssignment;
