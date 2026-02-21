import { useEffect, useState } from "react";
import api from "../../api/axiosconfig";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";


import React, { useRef } from "react";

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {
    const revText = useRef();
    let pararms = useParams();
    const movieId = pararms.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, [])

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try 
        {
        const response = await api.post("/api/v1/reviews", {reviewBody: rev.value, imbdId: movieId});

        const updatedReviews = [...reviews, {body:rev.value}];

        rev.value = "";

        setReviews(updatedReviews);

        }
        catch(err)
        {
                console.log(err);
        }

    }

    return(
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                < >
                    <Row>
                        <Col>
                            <ReviewForm handleSubmit={addReview} revText={revText} labelText= "Write a review?"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                </> 
                }
                {
                    reviews?.map((r) => {
                        return(
                            < >
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>
                            </>
                        )
                    })
                }
                </Col>
                </Row>
                <Row>
                        <Col>
                            <hr />
                        </Col>
                    </Row>

        </Container>
    )


}
export default Reviews;