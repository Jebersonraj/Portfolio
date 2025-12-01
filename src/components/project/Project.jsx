import React, {useState} from 'react';
import "./project.css";

function Project({link,img,desc,title}) {

    const [show,setShow]=useState(false);

    return (
        <a href={link}>
            <div className="project-card" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                {
                    show ? (
                        <div>
                            <h2>{title}</h2>
                            <p>{desc}</p>
                        </div>
                    ) : (
                        <img src={img} alt="project-img"/>
                    )
                }
            </div>
        </a>
    );
}

export default Project;