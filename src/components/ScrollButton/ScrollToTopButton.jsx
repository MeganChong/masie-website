import "./ScrollToTopButton.css";

export default function ScrollToTopButton(props) {
    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    function display() {
        return (
            <div onClick={scroll} className="scrollDiv">
                <div className="arrow" style={{color: `${props.textColor}`}}>&#x279C;</div>
            </div>
        );
    }
    return display();
}