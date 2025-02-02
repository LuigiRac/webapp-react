import { useState } from "react";


const initialData = {
    name: "",
    text: "",
    vote: 0,
};

export default function FormReviws() {
    const [formData, setFormData] = useState(initialData);

    function handleSubmit() {
        e.preventDefault();
    }

    function setFieldValue(e) {
        console.log(e.target.value);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }
    return (
        <div className="card">
            <header className="card-header">
                <h5>Aggiungi la tua recensione</h5>
            </header>
            <div className="card-body">
                <form
                    onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea
                            className="form-control"
                            name="text"
                            value={formData.text}
                            onChange={setFieldValue}

                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input
                            type="number"
                            min="1"
                            max="5"
                            name="vote"
                            className="form-control"
                            value={formData.vote}
                            onChange={setFieldValue}

                        />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}