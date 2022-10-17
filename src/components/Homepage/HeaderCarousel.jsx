import "./Header.css";

import carousel1 from "../../assests/homepage/header/Carousel1.jpg";
import carousel2 from "../../assests/homepage/header/Carousel2.jpg";
import carousel3 from "../../assests/homepage/header/Carousel3.jpg";
import carousel4 from "../../assests/homepage/header/Carousel4.jpg";

export default function HeaderCarousel() {
    function display() {
        return (
            <div className="header">
                <img src={carousel1} class="slide" id="img1" alt="Imagine"/>
                <img src={carousel2} class="slide" id="img2" alt="Create"/>
                <img src={carousel3} class="slide" id="img3" alt="Design"/>
                <img src={carousel4} class="slide" id="img4" alt="Let's get started"/>
                
                <div class="downwardArrow">
                    <p>&#xFE40;</p>
                </div>
            </div>
        );
    }

    return display();
}