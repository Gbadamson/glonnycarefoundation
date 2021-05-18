import './Styles.css';
import Header from "./Header";
import logo2 from './images/gcflogo.png';

function Home() {
    return (
        <div>
            <Header />
            <main>
                <div className="projects">
                    <h2>Projects</h2>
                    <div className="cardList">
                        <div className="card">
                            <img src={logo2} height="180px" width="150px" alt="project 1"/>
                            <p>
                                Lorem Ispum vex les una glue make dat use of files make use of file 
                                make use of that cope trape copy vex les una glue make dat use 
                                of files make use of file make use of that cope trape copy
                            </p>
                            <button>Learn More</button>
                        </div>

                        <div className="card">
                            <img src={logo2} height="180px" width="150px" alt="project 1"/>
                            <p>
                                Lorem Ispum vex les una glue make dat use of files make use of file 
                                make use of that cope trape copy vex les una glue make dat use 
                                of files make use of file make use of that cope trape copy
                            </p>
                            <button>Learn More</button>
                        </div>

                        <div className="card">
                            <img src={logo2} height="180px" width="150px" alt="project 1"/>
                            <p>
                                Lorem Ispum vex les una glue make dat use of files make use of file 
                                make use of that cope trape copy vex les una glue make dat use 
                                of files make use of file make use of that cope trape copy
                            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;