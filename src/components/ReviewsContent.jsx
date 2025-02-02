export default function ReviewsContent({ review }) {

    const { id, text, vote, name } = review;
    return (
        <div key={id} className="card mb-4">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <strong>Vote: </strong> {vote}
                <address>
                    <i>By {name}</i>
                </address>
            </div>
        </div>
    );

}
