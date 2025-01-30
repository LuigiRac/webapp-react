import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";




export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, [id]);


    return (
        <>
            <div>
                <div className="card" style={{ width: '18rem' }} key={movie.id}>
                    <img className="card-img-top" src={movie.image} alt={movie.title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                </div>
            </div>
        </>
    )
};



