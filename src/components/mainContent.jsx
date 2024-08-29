import React from "react";
import "../App.css"
import BasicCard from "./Card";
import jobImage from "../assets/RecSysJob.jpg"
import UseButton from "./logInBtn";


const MainContent = () => {
    return(
        <>
        <div className="mainDiv">
            <div className="AboutDetails" >
                <h1 style={{color:"#F39C12"}}>About</h1>
                <hr/>
                <p style={{color:"whitesmoke"}}> 
                I first got into coding in the 9th grade when I created a calculator using Java. 
                This project ignited my passion for programming and problem-solving. 
                By the 11th grade, I took things a step further and represented my school at a 
                state-level science exhibition with a smart home project developed using DTMF technology and 
                Arduino. These early experiences laid the foundation for my journey into software development.
                </p>
                <p style={{color:"whitesmoke"}}>
                In June 2024, I graduated from the National Institute of Technology, 
                Kurukshetra, Haryana, India. Throughout my academic journey, I honed my 
                skills as a full-stack developer, mastering technologies like React.js, 
                Node.js, Express.js, and MongoDB for building robust web applications. 
                I have experience with PostgreSQL for relational database management, 
                ensuring scalability and efficiency in back-end systems. 
                My focus is on creating scalable, user-centric applications that offer 
                seamless integration between the front end and back end, providing both 
                intuitive design and powerful functionality.
                </p >
                <p style={{color:"whitesmoke"}}>
                Currently, I am a Research Associate under Dr. Vijay Verma at NIT Kurukshetra, 
                working on a research paper focused on recommender systems. 
                This research has allowed me to dive deeper into data science and machine learning, 
                leveraging technologies like Python and TensorFlow. I am always open to new opportunities and 
                collaborations, eager to contribute to innovative projects that push the boundaries of 
                technology and enhance user experiences.
                </p>
            </div>
            <div className="workExperience" style={{color:"whitesmoke"}}>
                <h2 style={{color:"#F39C12"}}>Work Experience</h2>
                <hr/>
                <BasicCard
                designation = "Research Associate"
                date = "Aug/2024 - present"
                image = {jobImage}
                />
            </div>
            <div className="projects" style={{color:"whitesmoke"}}>
                <h2 style={{color:"#F39C12"}}>Projects</h2>
                <hr/>
                <BasicCard
                />
                <BasicCard/>
                <BasicCard/>
                <BasicCard/>
            </div>
            <div className="adminLogIn" style={{display:"flex", justifyContent:"end"}}>
                <UseButton/>
            </div>
        </div>
        </>
    )
}

export default MainContent