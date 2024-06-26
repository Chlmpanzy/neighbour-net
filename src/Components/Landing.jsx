import { Link } from "react-router-dom";
import LocalBusiness from "../assets/local-business-image.jpg";

function Landing() {
    return (
        <div className="landing-page">
            <div className="title">
                <p>Connect to your Neighbourhood Community</p>
            </div>
            <svg
                width="98vw"
                height="25vw"
                xmlns="http://www.w3.org/2000/svg"
                id="rect">
                <rect
                    width="97vw"
                    height="25vw"
                    x="10"
                    y="0"
                    rx="20"
                    ry="20"
                    fill="#3d30a2"
                />
            </svg>
            <p id="description">
                NeighbourNet is a platform for local neighborhoods to discover,{" "}
                <br />
                connect with, and support nearby businesses. We aim to cultivate{" "}
                <br />a sense of belonging and pride in local economies,
                enhancing the <br />
                vitality and sustainability of neighborhoods.
            </p>
            <Link to="/sign-in">
                <button id="get-started" href="/sign-in">
                    Get Started
                </button>
            </Link>
            <img id="local-business-icon" src={LocalBusiness}></img>
        </div>
    );
}

export default Landing;
