import "./Header.css";

export default function HeaderCarousel() {
    function display() {
        return (
            <div className="header">
                <div id="img4" class="slide" style={{backgroundColor: "#c9ffd2"}}>CREATE</div>
                <div id="img2" class="slide" style={{backgroundColor: "#f4c3f7"}}>DESIGN</div>
                <div id="img3" class="slide" style={{backgroundColor: "#fafa23"}}>IMAGINE</div>
                <div id="img1" class="slide" style={{backgroundColor: "#b7c4f7"}}>MASIE</div>
            </div>
        );
    }

    return display();
}