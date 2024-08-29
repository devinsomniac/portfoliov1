import React from "react";
import '../App.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const SideBar = () => {
    return (
        <div className="sideDiv">
            <div className="nameAbout" style={{ marginBottom: "5%",color:"#F5F5F5" }}>
                <h1>Inzamam Ul Haque Chowdhury</h1>
                <h2>Full-Stack Developer</h2>
                <p style={{ marginRight: "50%" }}>I build scalable web applications with seamless front-end and back-end integration.</p>
            </div>

            <div className="navs" style={{ marginBottom: "5%" ,color:"#F39C12"}}>
                <ul style={{ listStyle: "none", textAlign: "left", padding: 0 }}>
                    <li>About</li>
                    <hr/>
                    <li>Work Experience</li>
                    <hr />
                    <li>Projects</li>
                    <hr />
                    <li>Blogs</li>
                    <hr/>
                </ul>
            </div>

            <div className="social" style={{ marginBottom: "5%" ,color:"#ECF0F1"}}>
                <FacebookIcon style={{ marginRight: "10px" }} />
                <InstagramIcon style={{ marginRight: "10px" }} />
                <WhatsAppIcon style={{ marginRight: "10px" }} />
                <GitHubIcon style={{ marginRight: "10px" }} />
            </div>
            <div className="ad">
                <h3 style={{color:"white"}}>Made with Love by Insomniac</h3>
            </div>
        </div>
    );
}

export default SideBar;
