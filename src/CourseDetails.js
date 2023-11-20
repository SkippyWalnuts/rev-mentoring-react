import React from "react";

export default function CourseDetails(props) {
const contentsMapping = {
    "Mentors": <p>Employees are supported & empowered in holding discussions on what inclusive leadership looks like through their eyes.
        We accept Mentor applications from all Employees outside management teams & select participants based on application form responses. 
        If an Employee is not assigned a Mentee, they will be wait-listed until someone suitable becomes available & encouraged 
        to join the group workshops. We aim to practice inclusivity from every angle; telling anyone they don't have a perspective worth 
        sharing is simply not true!
    </p>,
     "Mentees": <p>Senior Leaders, Executives, Managers, Industry Leaders - anyone typically considered a 'Mentor' in standard mentoring programmes,
        seeking to lead with empathy & humility. Mentees are given the opportunity to build a connection with someone they may never 
        normally interact with. We encourage Leaders to practice taking part in the more challenging conversations surrounding inclusivity by embracing 
        vulnerabilities within a respectful, contained environment.
     </p>,
     "Advisors": <p>Mentor Advisors are responsible for the implementation & development of Reverse Mentoring within your company. 
        Our experts have varied career histories, but share a common interest in Mediation, Coaching, Counselling, 
        Mental Health Support & Psychology. We invite up to 3 of your own Employees from Human Resources (HR), DEI (Diversity, Equity & Inclusion), Social Impact 
        or similar to take part as an Advisor on our panel. These volunteers aid us in matching Mentors to Mentees, share insights 
        during group discussions & help your company maintain 'in-house' Reverse Mentoring once our consultation has ended.
     </p>,
      "Workshops": <p>Conversation Starters, Empathy, Privilege, Setting Boundaries, Taking Accountability</p>

};

    return (
        <div className="CourseDetails">
{contentsMapping[props.contents]}
       </div>
    )
}