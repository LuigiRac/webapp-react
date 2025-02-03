import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewsContent from "../components/ReviewsContent";
import FormReviews from "../components/FormReviews";


const apiUrl = import.meta.env.VITE_API_URL;
const movieEndPoint = "movies";

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(getData, [id]);
    function getData() {
        setLoading(true);
        axios
            .get(`${apiUrl}${movieEndPoint}/${id}`)
            .then((res) => {
                // console.log(res.data);
                setMovie(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finito");
                setLoading(false);
            });

    }

    // console.log(movie);


    function renderReviews() {
        if (movie?.reviews?.length > 0) {
            return movie.reviews.map((review) => (
                <div className="col-12" key={review.id}>
                    <ReviewsContent review={review} />
                </div>
            ));
        } else {
            return <div className="col-12">No reviews yet for this movie</div>;
        }
    }

    return (
        <>
            <section>
                <div className="card" style={{ width: '18rem' }} key={movie.id}>
                    {/* <img className="card-img-top" src={movie.image} alt={movie.title} /> */}
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.abstract}</p>
                    </div>
                </div>
                <div className="reviews-section mt-4">
                    <h3>Reviews</h3>
                    <div className="row">
                        {renderReviews()}
                    </div>
                </div>
            </section>

            <section className="container-fluid py-4">
                <FormReviews movie_id={movie?.id} reloadReviews={getData} />
            </section>


        </>
    )
};



