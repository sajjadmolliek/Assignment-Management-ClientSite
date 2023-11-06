import { useLoaderData } from "react-router-dom";

const SubmittedAssignment = () => {
  const SubmittedAssignment = useLoaderData();
  console.log(SubmittedAssignment.length);
  if (SubmittedAssignment.length > 0) {
    return (
      <div className="w-[85%] mx-auto my-20">
        <div className="products-container items-center justify-center grid grid-cols-1 lg:grid-cols-2 gap-20">
          {SubmittedAssignment?.map((assignment) => (
            <div
              key={assignment._id}
              className="md:card md:flex-row md:w-[38rem] h-80 card-side bg-base-100 hover:shadow-xl border-2"
            >
              <div className="card-body">
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
                <p className="text-2xl font-bold">
                  <span className="text-lg font-semibold">
                    Assignment Link:
                  </span>{" "}
                  {assignment.Url}
                </p>

                {/* Modal Opened */}

                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <form 
                    // onSubmit={handleSubmitButton} 
                    className="my-10">
                      <label className="input-group md:w-4/5 lg:w-full mx-auto input-group-md mb-8">
                        <span className="w-[10rem] bg-[#FE834C] text-white font-bold">
                          Url
                        </span>
                        <input
                          name="Url"
                          type="text"
                          placeholder="Upload Your Assignment Google Drive Link"
                          className="input input-bordered w-full"
                          required
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
                      <div className="flex justify-center items-center mt-10">
                        <button
                          className="btn bg-[#FE834C] text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>

                {/* Modal Closed */}

                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="btn bg-[#FE834C] mt-5 text-white font-bold"
                >
                  Check
                </button>
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
