
import './App.css';

function App() {
  return (
    <div className="App">

<div className="container-fluid content">
    <div className="titles">
        <h1>
           Reverse Mentoring
        </h1>
        <h2>
            Supporting the development of inclusive leadership
        </h2>
    </div>
   

    <img src="./images/reverse-mentoring.webp"
    className="img-fluid rev-mentor-img"    
    alt="Reverse Mentoring" />

    <hr />

    <div>
        <p>
            In the 2022 Reverse Mentoring scheme with Global Media, employees with under-represented identities at
            leadership-level became{" "}
            <span className="participants">Mentors</span> to a large number of volunteers within the Executive Leadership
            team.{" "}
            <span className="participants">Mentors</span> shared life experiences and perspectives on a monthly basis to
            help
            leaders develop a more inclusive mindset at dentsu, building partnerships between people who may never
            normally
            interact outside of
            such a programme.
            <br />

            <br />
            Workshops led by{" "}<span className="participants">Mentor Advisors</span>{" "}gave guidance and a chance to reflect
            with
            peers on inclusion-related
            topics:
        </p>

        <ul>
            <li className="workshops">Privilege</li>
            <li className="workshops">Empathy</li>
            <li className="workshops">Setting boundaries</li>
            <li className="workshops">Accountability</li>
        </ul>

        <p>
            To close the year,{" "}<span className="participants">Mentors</span>{" "}were asked to help{" "}<span
                className="participants">Mentees</span>{" "}set a 2023 performance objective to
            further educate themselves as a direct result of their mentoring relationship.
            <br />
            <br />
            The success and impact of the programme was measured by the feedback and regular participation of those
            involved;{" "}<span className="participants">14 partnerships were considered a success by December 2022</span>{" "}
            as a result of star-ratings submitted by participants:
        </p>

        <h3>
            How helpful do you feel Reverse Mentoring is in developing a more inclusive mindset at dentsu?
        </h3>

        <ul>
            <li>
                Mentors ⭐
                4.8 / 5 ⭐
            </li>
            <li>
                Mentees ⭐
                4.8 / 5 ⭐</li>

        </ul>
        <h3>
            How likely are you to recommend Reverse Mentoring to a colleague?
        </h3>
        <ul>
            <li>Mentors ⭐ 4.7 / 5 ⭐</li>
            <li>Mentees ⭐ 5 / 5 ⭐</li>
        </ul>

        <p>
            We are opening applications for 2023 and inviting other service lines from <em>January 23rd – February
                24th</em>,
            in which{" "}<span className="participants">Mentors</span>{" "}or{" "}<span className="participants">Mentees</span>{" "}are
            determined
            by job level and matched according to application-form responses.
        </p>

        <a href="https://www.bbc.com/worklife/article/20221110-reverse-mentorship-how-young-workers-are-teaching-bosses"
            target="_blank" className="learn-more">
            👉🏽Reverse mentorship: How young workers are teaching bosses: BBC Worklife👈🏾
        </a>

        <button>
            <strong>APPLY HERE!<br />👋🏽👋🏿👋🏻👋🏾 </strong>
        </button>
    </div>
    <br />
</div>

    </div>
  );
}

export default App;
