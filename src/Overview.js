import React from "react";

export default function Overview() {
    return (
        <div className="Overview">
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
            <ul>
                    <li><button>MENTOR ADVISORS</button></li>
                    <li><button>APPLICATIONS</button></li>
                    <li><button>MATCH-MAKING​</button></li>
                    <li><button>MENTOR & MENTEE BRIEFINGS</button></li>
                    <li><button>INTRODUCING A MATCH​</button></li>
                    <li><button>MONTHLY MENTOR CONVERSATIONS​</button></li>
                    <li><button>WORKSHOPS​</button></li>
                    <li><button>TAKING ACCOUNTABILITY​</button></li>
                ​</ul>
            </div>
        </div>      
        </div>
    )
}