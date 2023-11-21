import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


 function IndexPage() {
  const API = import.meta.env.VITE_API_URL;
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getAllCats();
  });

async function getAllCats() {
  try{
    let result = await axios.get(`${API}/cats`);
      // console.log(result.data);
      setCats(result.data);
    } catch(error) {
      console.log(error);
    }
}
   return (
       <div className="px-3"
         style={{
            display: "grid", 
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyContent: "space-evenly", 
            margin: "5px",
            }}
          >
          {cats.map((element) => {
           return (
           <div
            key={element.id}
            className="card mb-5 mt-5"
            style={{ width: "400px"}}
           >
          <Link to={`/cats/${element.id}`} 
            style={{
            backgroundColor: "grey",
            border: "5px solid black",
            textDecorationColor: "black",
            textDecorationThickness: "auto", 
            }}
             >
            <div className="card-header fs-2 bg-light text-black text-uppercase text-center text-secondary">
            {element.name}
            </div>
            <img 
            className="card-img-top"
            style={{
            height: "200px", width:"300px", display: "block",
            margin: "auto", border: "5px solid black",
            }}
            src={element.image}
            alt={element.name}
            />
            <div className="card-body fs-2 text-black text-center text-secondary">
              {/* <p className="card-text"> {element.cat_id}</p> */}
            </div>
          </Link>
        </div>
        );
      })}
     </div>
    );
  }

export default IndexPage;