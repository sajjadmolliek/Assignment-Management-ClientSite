import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCustomeHook from "../../Hooks/useCustomeHook";

const UpdateAssignment = () => {
  const Assignments = useLoaderData();
  const { _id, Tittle, level, Marks, startDate, description, photo } =
    Assignments;
  const date = new Date(startDate);
  const [updateDate, setStartDate] = useState(date);
  const [updateLevel, setUpdateLevel] = useState(level);
  const { user } = useCustomeHook();
  const PostedUser = user.email;

  const handleChangePage = (e) => {
    setUpdateLevel(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const Tittle = form.tittle.value;
    const description = document.getElementById("Textarea").value;
    const Date = document.getElementById("date").value;
    const Marks = parseFloat(form.marks.value);
    const photo = form.photo.value;
    const startDate = updateDate;
    const fullForm = {PostedUser,Tittle,level,Marks,Date,description,photo,startDate};
  
    fetch(`http://localhost:5006/details/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          form.reset();
          Swal.fire("Yeahh!", "Successfully Update product", "success");
        }
      });
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mt-10 underline">
        Updating Assignment{" "}
      </h1>
      <form
        onSubmit={handleUpdate}
        className="lg:w-3/5 mx-auto bg-[#FE834C33] p-10 my-10 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
            <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
              Tittle
            </span>
            <input
              defaultValue={Tittle}
              name="tittle"
              type="text"
              placeholder="Tittle"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="  flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
              Marks
            </span>
            <input
              defaultValue={Marks}
              name="marks"
              type="text"
              placeholder="Marks"
              className="input input-bordered w-full"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="lg:w-[31%] md:w-[23%] w-[33%] bg-[#FE834C] text-white font-bold">
              Date
            </span>
            <DatePicker
              id="date"
              className="input input-bordered lg:w-[17rem] md:w-[27rem] w-[15rem] rounded-tl-none rounded-bl-none text-[#a8a6a6]"
              selected={updateDate}
              onChange={(date) => setStartDate(date)}
            />
          </label>
        </div>

        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
              Image URL
            </span>
            <input
              defaultValue={photo}
              name="photo"
              className="w-full input input-bordered input-md"
              type="text"
              placeholder="Thumbnail Image URL"
            />
          </label>
          <label className="input-group md:w-4/5 lg:w-1/2 mx-auto lg:input-group-md">
            <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
              Level
            </span>
            <select
              defaultValue={updateLevel}
              value={updateLevel}
              onChange={handleChangePage}
              className="input input-bordered w-full"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>
        </div>

        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
            <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
              Description
            </span>
            <textarea
              defaultValue={description}
              id="Textarea"
              className="textarea w-full"
              placeholder="Enter your description"
            ></textarea>
          </label>
        </div>

        <input
          className="w-full text-center btn text-white text-bold text-lg bg-[#FE834C]"
          type="submit"
          value="Post Assignment"
        />
      </form>
    </div>
  );
};

export default UpdateAssignment;
