// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios"


// function DeleteModal( { setDeleteToggle } ) {
// const navigate = useNavigate();
// const { id } = useParams();
// const API = import.meta.env.VITE_API_URL;

//     async function handleDeleteButton() {
//         try{
//           navigate("/cats");
//           await axios.delete(`${API}/cats/${id}`);
//           navigate("/cats");
//         } catch(error) {
//           console.log(error);
//           navigate("/notfound");
//         }
//   } 

//  return (
//    <div className="m-5 d-flex justify-content-center">
//       <span><b>Are you sure you want 
//         to delete this?</b> </span>
//       <button 
//        type="button"
//        className="btn btn-dark position-relative px-2 me-2"
//       // {/* //  className="btn btn-secondary text-center px-2 me-2" */}
//        onClick={handleDeleteButton}
//        >
//        Delete
//       </button>
//       <button
//       type="button"
//       className="btn btn-dark position-relative px-2 me-2"
//       // className="btn btn-secondary text-center px-2 me-2"
//       onClick={() => setDeleteToggle(false)}
//       >
//      Cancel
//     </button>
//    </div>
//    );
// }



// export default DeleteModal