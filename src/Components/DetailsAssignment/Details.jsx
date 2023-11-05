import { useLoaderData, } from "react-router-dom";
// import Swal from "sweetalert2";
import useCustomeHook from "../../Hooks/useCustomeHook";

const Details = () => {
  // const { id } = useParams();
  const Assignments = useLoaderData();
  const {user} = useCustomeHook()
  const currentUser = user.email;
  const { _id, PostedUser, Tittle, level, Marks, Date, description, photo } =
  Assignments;
  // const fullForm = {name,brand_name,type,price,description,rating,photo,}

    const handleSubmitButton = (e) => {
      e.preventDefault()
      const Url = e.target.Url.value
      const Note = document.getElementById("Textarea").value;
      console.log(Url,Note);
  //     console.log(_id);
  //     axios.get(`http://localhost:5006/details${_id}`)
  //     .then(data=>console.log(data))
    };
  // onClick={handleDetails}

  return (
    <div>
      <div key={_id}>
        <div className="card card-side bg-base-100 my-20 p-10 shadow-xl shadow-[#FE834C] w-[55rem] mx-auto">
          <figure>
            <img className="w-[30rem]" src={photo} alt="Assignment" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {Tittle.toUpperCase()}
              <div className="badge bg-[#FE834C] text-white p-4">{level}</div>
            </h2>
            <p>{description}</p>
            <p>Total Marks: {Marks}</p>
            <p>Submission Last Date: {Date} at 11:59pm</p>
            {/* Modal Opened */}

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form onSubmit={handleSubmitButton} className="my-10">
                  <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md mb-8">
                    <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
                      Url
                    </span>
                    <input
                      name="Url"
                      type="text"
                      placeholder="Upload Your Assignment Google Drive Link"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md">
                    <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
                      Note
                    </span>
                    <textarea
                      id="Textarea"
                      className="textarea textarea-bordered w-full"
                      placeholder="Enter your text here ..."
                    ></textarea>
                  </label>
                  <div>
                    <button className="btn bg-[#FE834C] text-white" type="submit" >Submit</button> 
                  </div>
                </form>
              </div>
            </dialog>

            {/* Modal Closed */}

            <div className="flex justify-start items-center gap-8">
            {currentUser === PostedUser? "" :
              <button
                className="btn bg-[#FE834C] text-white"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Take Assignment
              </button>
             }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
