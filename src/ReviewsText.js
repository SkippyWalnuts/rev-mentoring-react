import React from "react";

export default function ReviewsText(props) {
const contentsMapping = {
    "Mentor Reviews": <div><p><strong>Shannon Tobias, dentsu Mentor 2023: </strong>​
    “When I initially saw Becca's reverse mentoring scheme invite, I was immediately intrigued as someone had finally created a programme with an opportunity to speak to more senior team 
    members about topics faced in digital marketing! 
    
    I loved my mentorship and when facing new career challenging situations, I was able to openly discuss my circumstances and given fantastic advice from an experienced professional. 
    For that I am grateful! 
    
    However, my defining moment (aha moment) was my training sessions with Becca. Not only was Becca accommodating to my schedule 
    to provide me a 121 sessions but this also enabled a magical teaching moment! Our session on navigating difficult conversations and how to apologise was 
    truly eye opening. Thanks to Becca I carry that lesson with me and apply it on a daily basis. If this is not a sentiment to 
    encourage you to take part in this fantastic initiative, I don't know what is!”​
    </p>
    <p><strong>Bela Patel, dentsu Mentor 2022: </strong>
“I think the premise of the reverse mentoring programme is a very unique way of uncovering and discussing unconscious biases. Awareness is key when it comes to unconscious bias.​ Often, people aren’t simply aware of issues and behaviours unless highlighted, 
so this was a good platform for mutual openness and discussion, and bringing certain issues to the surface.”​
</p>

    </div>,
     "Mentee Reviews": <div>    <p><strong>Peter Huijboom, dentsu Mentee 2022:</strong> “…it’s important that leaders and managers 
     realize that they will need to lead and manage very differently to be successful in this new world. 
     Openness, Transparency, Vulnerability, and Generosity are all critical to mastering these new relationships. 
     For many, this is an important ‘reset’ in how they work, and leaders may benefit from some ‘reverse mentoring’, 
     helping them understand what really drives their partners in the workforce."
     <br />
     <em>Written for the prologue of{" "} 
     <a href="https://www.waterstones.com/book/engaging-the-workforce/nicos-rossides/9781032220352"
     className=""
     target="_blank"
     rel="noreferrer"
     alt="Waterstones website selling book titled 'Engaging the Workforce' by Nicos Rossides, where a previous Reverse Mentoring Mentee wrote this review">
         Engaging the Workforce by Nicos Rossides</a></em></p>
         
<p><strong>Paul Hughes, dentsu Mentee 2022: </strong>
“The Reverse Mentoring programme has been a really worthwhile investment of my time. ​

I've gained some great insights and reflections from my Mentor and also benefited from the regular briefing and coaching from the expert team running the programme.”​


</p>
     </div>,

};

    return (
        <div className="ReviewsText">
{contentsMapping[props.contents]}
       </div>
    )
}