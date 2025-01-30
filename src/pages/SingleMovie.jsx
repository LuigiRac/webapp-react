import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";




export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(response => {
                console.log(response.data);
                setMovie(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            })
    }, [id]);

    console.log(movie);

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



