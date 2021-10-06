import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom';


function Home() {
    return (
        
        <div className="home">
    <div className="title">
      
          
       <div className="homeImage">
       <h1>
              <p>Hi</p>
              <p>Iam Hawah</p>
              <p>Software Developer</p>
          </h1>
        <div className="person">
          <img
            src={`${process.env.PUBLIC_URL}/my-imagePM.jpeg`}
            alt="Myphoto"
          />
        </div>
       </div>
       <Link to="about">
        <button  className="btn btn-warning ">More Info</button>
        </Link>
        
       
     
    </div>
        </div>
    )
}

export default Home
