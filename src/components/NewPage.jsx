import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

 function NewPage() {
 const navigate = useNavigate();
 const API = import.meta.env.VITE_API_URL;

 const [name, setName] = useState("");
 const [cat_id, setCat_Id] = useState(0);
 const [gender, setGender] = useState("");
 const [age, setAge] = useState("");
 const [is_available, setIs_Available] = useState(false);
 const [cost, setCost] = useState(0);

 async function submitHandler(e) {
   e.prevent.default;
    try{
      await axios.post(`${API}/cats`, {
      name: name,
      cat_id: cat_id,
      gender: gender,
      age: age,
      is_available: is_available,
      cost: cost,
    });
      
      navigate("/cats");
    } catch(error) {
     console.log(error);
  }
}
 return (
       <>
        <h2 className="mt-3 px-5">Application Form</h2>
        <form onSubmit={submitHandler}>
       
        <br />
        <div>
          <label className="px-5 mt-4 fs-5 fw-bold">Name</label>
          <input 
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
           />
        </div>
        <br />
        <div>
          <label className="px-5 mt-4 fs-5 fw-bold">Cat Id</label>
          <input
           type="number"
           value={cat_id}
           onChange={(e) => setCat_Id(e.target.value)}
           />
        </div>
        <br />
        <div>
          <label className="px-5 mt-4 fs-5 fw-bold">Gender</label>
          <input
           type="text"
           value={gender}
           onChange={(e) => setGender(e.target.value)}
           />
        </div>
        <br />
        <div>
          <label className="px-5 mt-4 fs-5 fw-bold">Age</label>
          <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <br />
         <div>
          <label className="px-5 mt-4 fs-5 fw-bold">Is Available</label>
          <input
          type="checkbox"
          checked={is_available}
          onChange={(e) => setIs_Available(e.target.checked)}
          />
         </div>
         <br />
        <div>
          <label className="px-5 mt-4 fs-5 fw-bold">Cost</label>
          <input
          type="number"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <br />
      <button
      type="submit" className="btn btn-secondary px-5 me-5 mt-5 mb-5">
        Submit
       </button>
     </form>
   </>
   )
 }
 


export default NewPage;