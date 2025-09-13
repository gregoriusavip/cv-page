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
        </div>
    );
}

export default Display;