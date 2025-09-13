import { useState } from 'react'
import './Form.css'

function Form({ title, children, changeData }) {
    const [className, setClassName] = useState("");

    function toggleInputs(inputs) {
        for (const input of inputs) {
            input.toggleAttribute("disabled")
        }
    }

    function handleEdit(e) {
        e.preventDefault()
        const editButton = e.currentTarget;
        const form = editButton.parentNode.parentNode;
        toggleInputs(form.querySelectorAll("input, textarea"));

        setClassName("");
    }

    function isSubmitted() {
        return className === "submitted";
    }

    function handleSubmit(e) {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = new FormData(form)
        changeData(formData);

        toggleInputs(form.querySelectorAll("input, textarea"));
        setClassName("submitted");
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <h2>{title}</h2>
            {children}

            <div className="buttons">
                <button disabled={isSubmitted()}>Submit</button>
                <button onClick={handleEdit} disabled={!isSubmitted()}>Edit</button>
            </div>
        </form>
    );
}

export default Form; 