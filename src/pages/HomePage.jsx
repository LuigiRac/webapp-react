import { useEffect, useState } from "react";
import axios from "axios";


export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/movies")
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <h1>
            <div>
                <div className="d-flex justify-content-center gap-3 m-4">
                    {
                        movies.map((movie) => (
                            <div className="card" style={{ width: '18rem' }} key={movie.id}>
                                <img className="card-img-top" src={movie.image} alt={movie.title}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.abstract}</p>
                                    <a href="#" className="btn btn-primary" >Leggi di più</a>
                                    {/* <button onClick={() => deletePost(movie.id)} className="btn btn-primary">Delete</button> */}

                                </div>
                            </div>
                        ))
                    }

                </div >
            </div>
        </h1 >
    )
};



