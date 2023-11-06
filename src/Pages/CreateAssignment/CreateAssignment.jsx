import Swal from "sweetalert2";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCustomeHook from "../../Hooks/useCustomeHook";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [level, setLevel] = useState("Easy");
  const { user } = useCustomeHook();
  const PostedUser = user.email;
  

  const handleChangePage = (e) => {
    setLevel(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const Tittle = form.tittle.value;
    const description = document.getElementById("Textarea").value;
    const Date = document.getElementById("date").value;
    const Marks = parseFloat(form.marks.value);
    const photo = form.photo.value;

    const fullForm = {
      PostedUser,
      Tittle,
      level,
      Marks,
      Date,
      description,
      photo,
      startDate,
      
    };
    const isNotEmpty = Object.values(fullForm).some((value) => value === "");

    if (!isNotEmpty) {
      fetch("http://localhost:5006/AddAssignment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullForm),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            form.reset();
            Swal.fire("Yeahh!", "Successfully added product", "success");
          } else {
            Swal.fire("OPPS!!","Failed to add the product","error");
          }
        });
    } else {
      Swal.fire("Opps!", "You should fill in the entire form", "error");
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mt-10 underline">
        Posting Assignment{" "}
      </h1>
      <form
        onSubmit={handleAdd}
        className="lg:w-3/5 mx-auto bg-[#FE834C33] p-10 my-10 rounded-lg"
      >
        <div className=" flex flex-col lg:flex-row gap-12 mb-10">
          <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
            <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
              Tittle
            </span>
            <input
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
              selected={startDate}
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
              value={level}
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

export default CreateAssignment;
