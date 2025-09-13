import Form from "./Form";

function EducationForm({ data, setData }) {
    function changeData(formData) {
        const newData = {
            ...data,
            education: {
                school: formData.get("school"),
                fieldOfStudy: formData.get("study"),
                finishDate: formData.get("graduation")
            },
        }
        setData(newData);
    }

    return (
        <Form id="education" title="Educational Experience" changeData={changeData}>
            <label for="school">Enter your school name: </label>
            <input type="text" name="school" id="school" required />

            <label for="study">Enter your field of study: </label>
            <input type="text" name="study" id="study" required />

            <label for="graduation">Enter your graduation date/date you will graduate: </label>
            <input type="date" name="graduation" id="graduation" required />
        </Form>
    )
}

export default EducationForm;