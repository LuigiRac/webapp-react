import { useState, useEffect } from "react";
import axios from "axios";


const initialData = {
    name: "",
    text: "",
    vote: 0,
};

const apiUrl = import.meta.env.VITE_API_URL;
const movieEndPoint = "/movies";

export default function FormReviews() {
    const [formData, setFormData] = useState(initialData);

    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formData);
        axios.post(`${apiUrl}${movieEndPoint}/${movie_id}/reviews`, formData).then((res) => {
            console.log(res);
            setFormData(initialData)

        }).catch((error) => {
            console.log(error);;
        }).finally(() => {
            console.log("finito");

        })

    }

    function setFieldValue(e) {
        console.log(e.target.value, e.target.name);
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
                            step="1"
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