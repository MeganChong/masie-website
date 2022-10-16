import "./Header.css";

export default function HeaderCarousel() {
    function display() {
        return (
            <div className="header">
                <div id="img1" class="slideSm md:slideHorizontal" style={{backgroundColor: "#b7c4f7"}}>MASIE</div>
                <div id="img2" class="slideSm md:slideHorizontal" style={{backgroundColor: "#f4c3f7"}}>DESIGN</div>
                <div id="img3" class="slideSm md:slideHorizontal" style={{backgroundColor: "#fafa23"}}>IMAGINE</div>
                <div id="img4" class="slideSm md:slideHorizontal" style={{backgroundColor: "#c9ffd2"}}>CREATE</div>
                
                <div class="downwardArrow">
                    <p>&#xFE40;</p>
                </div>
            </div>
        );
    }

    return display();
}