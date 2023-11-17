import React from "react";

export default function CourseDetails(props) {
const contentsMapping = {
    "Mentors": <p>Employees who do not feel represented at leadership level</p>,
     "Mentees": <p>Senior Leaders, Executives, Managers, Industry Leaders</p>,
     "Advisors": <p>Advisors agree on timeline for overall programme, 
     resulting in agreed application closure and match-making date(s). 
     Update presentations with schedule and aim at town halls, team meetings, 
     Talent Champions, HR Huddles etc. – encourage word of mouth with Mentor
      & Mentee recommendations, ask for invites to relevant meetings. Share 
      advert with attendees of meetings following presentation, including 
      application links</p>,
      "Workshops": <p>Conversation Starters, Empathy, Privilege, Setting Boundaries, Taking Accountability</p>

};

    return (
        <div className="CourseDetails">
{contentsMapping[props.contents]}
       </div>
    )
}