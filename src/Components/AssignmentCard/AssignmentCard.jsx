/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom";
import useCustomeHook from "../../Hooks/useCustomeHook";

const AssignmentCard = ({ assignment }) => {
  const { user } = useCustomeHook();
  const { PostedUser, _id, Tittle, Date, photo } = assignment;

  const currentUser = user?.email || "No user";

  const handleDelete = () => {

    axios
    .delete(`http://localhost:5006/delete/${_id}`, _id, {
      withCredentials: true,
    })
    .then((data) => {
      console.log(data);
      // const remain = items.filter((datas) => datas._id !== id);
      // if (data.data.acknowledged) {
      //   setItems(remain);
      //   Swal.fire("Deleted!", "Your file has been deleted.", "success");
      // }
    });

    // fetch('http://localhost:5006/delete',{
    //   method:'DELETE',
    //   headers:{
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(_id),
    // })
    // axios.delete("http://localhost:5006/delete", _id)
    //   .then((data) => console.log(data));
  };
  // onClick={handleDetails}

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Assignment" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Tittle}</h2>
        <p>Last Date: {Date} at 11:59pm</p>
        <div className="flex justify-center items-center gap-8">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-[#FE834C] text-white">View</button>
          </Link>
          {currentUser === PostedUser ? (
            <>
              <Link to={`/update/${_id}`}>
                <button className="btn bg-[#FE834C] text-white">Update</button>
              </Link>
              <button
                onClick={handleDelete}
                className="btn bg-[#FE834C] text-white"
              >
                Delete
              </button>
            </>
          ) : (
            <>
              <button className="btn bg-[#FE834C] btn-disabled text-white">
                Update
              </button>
              <button className="btn bg-[#FE834C] btn-disabled text-white">
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
