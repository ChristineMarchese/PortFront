import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


 function EditPage() {
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const index = useParams();

  const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  const [cat_id, setCat_Id] = useState(0);
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [is_available, setIs_Available] = useState(false);
  const [cost, setCost] = useState(0);
  const [description, setDescription] = useState("");
    
   useEffect(() => {
     fetchCat();
   }, [])

   async function fetchCat() {
     try{
       let result = await axios.get(`${API}/cities/${index}`);
       console.log(result);
       setName(result.data.name);
       setCat_Id(result.data.cat_id);
       setGender(result.data.gender);
       setAge(result.data.age);
       setIs_Available(result.data.is_available);
       setCost(result.data.cost);
       setDescription(result.data.description);
     } catch(error) {
       console.log(error);
     }
   }

  async function handleSubmit(e) {
   e.prevent.default();
    try{
    await axios.put(`${API}/cats/${index}`, {
     name: name,
     cat_id: cat_id,
     gender: gender,
     age: age,
     is_available: is_available,
     cost: cost,
     description: description,
   });
    navigate("/cats")
    } catch(error) {
      console.log(error)
    }
  }

return (
  <>
   <h2 className="mt-3 px-5">Edit Form</h2>
   <div className="m-5 px-5 "></div>
   <form>
       <div>
        <label className="px-5 mt-5 fs-5 fw-bold">Name</label>
        <input 
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
        </div>
        <br />
        <div>
          <label className="px-5 mt-5 fs-5 fw-bold">Cat Id</label>
          <input 
          type="number"
          value={cat_id}
          onChange={(e) => setCat_Id(e.target.value)}
          />
        </div>
        <br />
        <div>
         <label className="px-5 mt-5 fs-5 fw-bold">Gender</label>
         <input
         type="text"
         value={gender}
         onChange={(e) => setGender(e.target.value)}
         />
        </div>
        <br />
        <div>
          <label className="px-5 mt-5 fs-5 fw-bold">Age</label>
          <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <br />
          <div>
          <label className="px-5 mt-5 fs-5 fw-bold">Availability</label>
          <input
          type="checkbox"
          checked={is_available}
          onChange={(e) => setIs_Available(e.target.checked)}
          />
          </div>
          <br />
         <div>
          <label className="px-5 mt-5 fs-5 fw-bold">Cost</label>
          <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          />
         </div>
          <br />
       <div onSubmit={handleSubmit}>
       <button>Submit</button>
      </div>
    </form>
    </>
  );
}

export default EditPage;