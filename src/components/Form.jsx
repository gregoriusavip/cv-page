import './Form.css'

function Form({ title, children, setData }) {
    function handleEdit() {
        console.log("Edit button clicked");
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newData = {
            personalInfo: {
                name: formData.get("name"),
                email: formData.get("email"),
                phone: formData.get("phone")
            },
            education: [],
            experience: []
        }
        setData(newData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{title}</h2>
            {children}

            <div className="buttons">
                <button>Submit</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </form>
    );
}

export default Form; 