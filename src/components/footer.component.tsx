import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            <footer className="foot">
                <div className="foot__content foot__content--lets">
                    <p className="foot__content--let">Let's talk about <br /> design is my passion <br /> and the key to success</p>
                    <ul className="foot__content__list">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/about">
                            <li>About&nbsp;Me</li>
                        </Link>
                        <Link to="/resume">
                            <li>My&nbsp;Resume</li>
                        </Link>
                        <Link to="/project">
                            <li>My&nbsp;Projects</li>
                        </Link>
                        <Link to="/githubapi">
                            <li>Github&nbsp;Api</li>
                        </Link>
                    </ul>
                </div>
                <div className="foot__content--icon">
                    <div className="foot__content--icon--envelope"><i className="fas fa-envelope"></i> <span>example@gmail.com</span> </div>
                    <div className="foot__content--icon--map"><i className="fas fa-map-marker-alt"></i> <span>236, The Mall ,Faisalabad ,Punjab</span> </div>
                    <div className="foot__content--icon--phone"><i className="fas fa-phone-alt"></i> <span>+92-XXX-XXXXXXX</span> </div>
                </div>
                <div className="foot__content--socialicon">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-github-alt"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="foot__content--copy">
                    <p>&copy; Copyright 2021 Deign by <Link to="/">Malik&nbsp;Portfolio</Link></p>
                </div>
            </footer>
        </>
    )
}