import Form from "./Form";

function ExperienceForm({ data, setData }) {
    function changeData(formData) {
        const newExperience = {
            position: formData.get("position"),
            company: formData.get("company"),
            responsibilities: formData.get("responsibilities"),
            startDate: formData.get("startDate"),
            endDate: formData.get("endDate")
        };
        const newData = {
            ...data,
            experience: newExperience,
        }
        setData(newData);
    }

    return (
        <Form id="experience" title="Practical Experience" changeData={changeData}>
            <label for="position">Enter your position/title: </label>
            <input type="text" name="position" id="position" required />

            <label for="company">Enter your company name: </label>
            <input type="text" name="company" id="company" required />

            <label for="responsibilities">Enter your main responsibilities: </label>
            <textarea name="responsibilities" id="responsibilities" required></textarea>

            <label for="startDate">Enter your start date: </label>
            <input type="date" name="startDate" id="startDate" required />

            <label for="endDate">Enter your end date/date you will end: </label>
            <input type="date" name="endDate" id="endDate" required />
        </Form>
    )
}

export default ExperienceForm;