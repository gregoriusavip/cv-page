/* Display user inputted data in a structured format */
import './Display.css';

function Display({ personalInfo, education, experience }) {
    return (
        <div className="display">
            <section className="personal-info">
                <h2>Personal Information</h2>
                <p><strong>Name:</strong> {personalInfo.name}</p>
                <p><strong>Email:</strong> {personalInfo.email}</p>
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
            </section>

            <section className="education-info">
                <h2>Educational Experience</h2>
                <p><strong>School name:</strong> {education.school}</p>
                <p><strong>Field of study:</strong> {education.fieldOfStudy}</p>
                <p><strong>Finish date:</strong> {education.finishDate}</p>
            </section>

            <section className="experience-info">
                <h2>Practical Experience</h2>
                <p><strong>Position/Title:</strong> {experience.position}</p>
                <p><strong>Company name:</strong> {experience.company}</p>
                <p><strong>Main responsibilities:</strong> {experience.responsibilities}</p>
                <p><strong>Start date:</strong> {experience.startDate}</p>
                <p><strong>End date:</strong> {experience.endDate}</p>
            </section>
        </div>
    );
}

export default Display;