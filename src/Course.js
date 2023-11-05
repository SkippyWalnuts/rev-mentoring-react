import React from "react";
import "./Course.css";

export default function Course() {
    return (
        <div className="Course">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-4 title-col">
                <img src="../images/personal_opinion_undraw.png" className="img-fluid" 
                alt="person holding their personal opinion"></img>
                </div>
                <div className="col title-col">
                <h3>
                    <div className="section-title">Course</div>
                    Overview</h3>

                 </div>
            </div>
            <div className="row">
        <h4> "Diversity is the mix. Inclusion is <strong>making the mix work</strong>" ​ 
            <a href="https://inclusion-paradox.com/site/about-andres-tapia/"
            target="_blank"
            rel="noreferrer"
            alt="Andrés Tapia Inclusion Paradox">Andrés Tapia</a>​</h4>
            </div> 
            <div className="row mt-4 mb-3">
            <div className="col">
            <ul>
                    <li><button>Mentor Advisors</button></li>
                    <li><button>Applications</button></li>
                    <li><button>Match-Making​</button></li>
                    <li><button>Briefings</button></li>

            </ul>
            </div>
            <div className="col">
            <ul>
                    <li><button>Introductions​</button></li>
                    <li><button>Conversations​</button></li>
                    <li><button>Workshops</button></li>
                    <li><button>Accountability​</button></li>
            ​</ul>
            </div>
            </div>
        </div>      
        </div>
    )
}