import React from 'react';
import '../../App.css';
import beautifulKittenWithFlowers from '../../images/beautiful-kitten-with-flowers-outdoors.jpg';
import cuteDomesticKittenSitsWindow from '../../images/cute-domestic-kitten-sits-window-staring-outside-generative-ai.jpg';
import cuteKittenSittingOutdoorsSnow from '../../images/cute-kitten-sitting-outdoors-looking-camera-surrounded-by-snow-generated-by-artificial-intelligence.jpg';
import cuteKittenSittingOutdoorsToy from '../../images/cute-kitten-sitting-outdoors-playful-staring-toy-generated-by-artificial-intelligence.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function MiddleContainer() {
    return (
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide mt-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={beautifulKittenWithFlowers} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src={cuteDomesticKittenSitsWindow} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src={cuteKittenSittingOutdoorsToy} className="d-block w-100" alt="Slide 3" />
                    </div>
                    <div className="carousel-item">
                        <img src={cuteKittenSittingOutdoorsSnow} className="d-block w-100" alt="Slide 4" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default MiddleContainer
