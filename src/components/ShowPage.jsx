
 import { useNavigate, useParams} from "react-router-dom";
 import axios from "axios";
 import { useState, useEffect } from "react";
 import DeleteModal from "./DeleteModal";

 function ShowPage() {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const  { id } = useParams();

  const [cat, setCat] = useState("");
  const [deleteToggle, setDeleteToggle] = useState(false)
 

   useEffect( ( ) => {
     fetchCat();
   }, );

  async function fetchCat() {
     try {
       let result = await axios.get(`${API}/cats/${id}`);
           setCat(result.data);
          } catch(error) {
          console.log(error);  
         }
      }
    function handleBackButton() {
      navigate("/cats");
   }

  function handleEditButton() {
    navigate(`/cats/${id}/edit`);
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="mt-3 px-5">
       <div className="card mb-5 mt-5" style={ { width: "700px"}}> 
       <div className="card-header fs-2 text-black text-uppercase text-center text-secondary">
        {cat.name}
       </div>
      <img
        className="card-img-top"
        style={ { height: "500px"} }
        src={cat.image}
        alt={cat.name}
       />
    <div className="card-body fs-2 text-black text-center text-secondary">
      <p className="card-text">Cat Id: {cat.cat_id} </p>
      <p className="card-text">Gender: {cat.gender}</p>
      <p className="card-text">Age: {cat.age}</p>
      <p className="card-text">Availability: {cat.is_available}</p>
      <p className="card-text">Cost:${cat.cost}</p>
      <p className="card-text">{cat.description}</p>
    </div>
    <div className="m-5 d-flex justify-content-center">
      <button 
        type="button"
        className="btn btn-secondary px-5 me-5"
        onClick={handleBackButton}
        >BACK
        </button>
          <button
           type="button"
           className="btn btn-secondary px-5 me-5"
           onClick={handleEditButton}
           >
          EDIT
        </button>
          <button 
          type="button"
          className="btn btn-secondary px-5 me-5"
          onClick={() => setDeleteToggle(!deleteToggle)}
          >
          DELETE
        </button>
      </div> 
         deleteToggle && <DeleteModal setDeleteToggle={setDeleteToggle} />
       
     </div>
    </div> 
  </div>   
  )
}

export default ShowPage;