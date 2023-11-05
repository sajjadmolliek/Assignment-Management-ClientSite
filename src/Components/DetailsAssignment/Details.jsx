import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const products = useLoaderData();
  const findData = products.find((data) => data._id == id);
  const {name,brand_name,type,price,description,rating,photo} = findData;
  const fullForm = {name,brand_name,type,price,description,rating,photo,}



const handleAddToCart = () =>{
  
  fetch("https://server-of-shoes-store.vercel.app/cartProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullForm),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            Swal.fire("Yeahh!", "Successfully added product", "success");
          } else {
            Swal.fire("Opps!","Failed to add the product","error");
          }
        });
}




  if (findData) {
    return (
      <div>
        <div key={findData._id}>
          <div className="card shadow-xl  bg-[#FFF9ED]">
            <figure>
              <img src={findData.photo} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {findData.name.toUpperCase()}
                <div className="badge bg-[#FFA800] text-white">NEW</div>
              </h2>
              <p>{findData.description}</p>
              <div className="card-actions justify-end">
                
                <button onClick={handleAddToCart} className="btn border-0 bg-[#FFA800] text-white font-bold btn-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center p-10 my-8">
          No Data Available <br /> Or <br /> You Deleted All Items
        </h1>
      </div>
    );
  }
};

export default Details;


