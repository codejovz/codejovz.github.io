import { Analytics } from '@vercel/analytics/react';
import { SvgInline } from 'react-svg-inliner';
import Menu from './Menu.tsx';
import './App.css';
import ShowcaseContainer from './features/showcase/ShowcaseContainer.tsx';
import ResumeeContainer from './features/resumee/ResumeeContainer.tsx';

function App() {

    return (
        <>
            <Analytics />
            <Menu />
            <header>@codejovz</header>

            <div className="container">

                <article id="rojo" className="box"> {/*I've named these after color names to make editing more intuitive*/}
                    <h1>Jorge Varela Zamora</h1>
                    <h2>Software developer</h2>
                </article>

                <ShowcaseContainer />

                <ResumeeContainer />

                <article id="amarillo" className="box">

                    <div className="scroll-container">

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/badges-codejovz">badges-codejovz</a> <span className="repVisib">Public</span></p>
                            <p className="repDesc">Ready to use markdown svg badges.</p>
                            <p className="repTags"><a href="https://github.com/topics/react-router">react-router</a> <a href="https://github.com/topics/reactjs">reactjs</a> <a href="https://github.com/topics/badges">badges</a> <a href="https://github.com/topics/public-transport">public-transport</a></p>
                            <p><span className="javascript">javascript</span> <span className="updateDate">Updated on Aug 13, 2025</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/DevHeat">DevHeat</a> <span className="repVisib">Public</span></p>
                            <p className="repFork">Forked from <a href="https://github.com/DAMVA202425/DevHeat" className="forkedLink">DAMVA202425/DevHeat</a></p>
                            <p className="repDesc">Automates GitHub profile edition and creation of READMEs.</p>
                            <p className="repTags"><a href="https://github.com/topics/readme">readme</a> <a href="https://github.com/topics/app">app</a> <a href="https://github.com/topics/automation">automation</a></p>
                            <p><span className="kotlin">Kotlin</span><img className="liscence" src="./octicon_law.svg" /> The Unlicense <span className="updateDate">Updated on Jun 19, 2025</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/404">TFG</a> <span className="repVisib">Private</span></p>
                            <p className="repDesc">Kotlin app for users, Python-driven local AI, a MySQL database, and a Java API for local connections.</p>
                            <p className="repTags"><a href="https://github.com/topics/artificial-intelligence">artificial-intelligence</a> <a href="https://github.com/topics/bcrypt">bcrypt</a> <a href="https://github.com/topics/ktor-server">ktor-server</a></p>
                            <p><span className="kotlin">Kotlin</span> <img className="liscence" src="./octicon_law.svg" />MIT License <span className="updateDate">Updated on Jun 10, 2025</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/autoUpdatingBio">autoUpdatingBio</a> <span className="repVisib">Public</span></p>
                            <p className="repDesc">Script / bot for auto-updating the biography of your Github's account.</p>
                            <p className="repTags"><a href="https://github.com/topics/python">python</a> <a href="https://github.com/topics/github-api">github-api</a> <a href="https://github.com/topics/workflow">workflow</a> <a href="https://github.com/topics/yml">yml</a></p>
                            <p><img className="liscence" src="./octicon_law.svg" />The Unlicense <span className="updateDate">Updated on Aug 17, 2024</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/overlappingJFrameComponents">overlappingJFrameComponents</a> <span className="repVisib">Public</span></p>
                            <p className="repDesc">How to overlapp a JFrame component over Graphics ( Java ).</p>
                            <p className="repTags"><a href="https://github.com/topics/swing-gui">swing-gui</a> <a href="https://github.com/topics/jframes">jframes</a></p>
                            <p className="repLast"><span className="java">Java</span> <img className="liscence" src="./octicon_law.svg" />The Unlicense <span className="updateDate">Updated on Nov 28, 2024</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/Desarrollo_aplicaciones_multiplataforma">Desarrollo_aplicaciones_multiplataforma </a> <span className="repVisib">Public</span></p>
                            <p className="repDesc">Apuntes del Grado Superior de Desarrollo de Aplicaciones Multiplataforma (DAM)</p>
                            <p><span className="java">Java</span> <span className="updateDate">Updated just now.</span></p>
                        </section>

                    </div>
                    <p className="amarillo-footer">Some of my proyects</p>

                </article>

                <article id="naranja" className="box">

                    <button id="fullScreenButton">
                        <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" stroke="black" >
                            <polyline points="10,70 10,10 70,10" id="arIzq" />
                            <polyline points="10,130 10,190 70,190" id="abIzq" />
                            <polyline points="130,10 190,10 190,70" id="arDer" />
                            <polyline points="130,190 190,190 190,130" id="abDer" />
                        </svg>
                    </button>

                    <h2 id="CL_title">More about me &#40;<span id="CL"> <span id="CLcover">C</span><span id="CLleter">L</span></span>&#41;:</h2>

                    <section id="CL_content">
                        <p>Software developer junior.</p>
                        <p>Graduated in Advanced Vocational Training in Cross-Platform Application Development(D.A.M.), Madrid.</p>
                        <p>Drawn to the intersection of business logic and user experience, I research how to optimize the backend by splitting processes and allocating the workload to the server or client depending on the case.</p>
                        <p>My last archievement: I implemented a FastAPI solution to connect an indefinite number of clients by using WebSockets, preventing each client from making a GET request on every update. By sending a unique signal with all the changes from the server, I managed to reduce the workload on both the server and the clients by up to 80%. I also integrated user authentication via Microsoft Azure, providing secure access.</p>
                        <p>I used Artificial Intelligence locally with Hugging Face, Python, VQA y OCR, exposing endpoints, and inserting data at DDBB (MySQL → HeidiSQL).
                            Used to acrhitectures like Hexagonal, Model View Controller (MVC), Monolite, as well as methodologies such as ‘Agile’ y SCRUM’.
                            This allows me not only build scallable and mantenible software, but also to make it understandable for other developers.</p>
                        <p>I use React, TypeScript and Next.js for full-stack web solutions, while for separate solutions, I have more experience with Python / Vite and FastAPI.</p>
                        <p>I stand out because of my quick learning ability, professional honesty, and creative approach to development solutions.</p>
                        <p>I am able to adapt quickly to new tools and methodologies. I am also clear and honest when communicating the real status of my work, which makes coordination easier in multi-disciplinary teams. I have a verifiable B2 level of english, and the High School diploma.</p>
                        <p>Do you want to know something else about me? Visit my <a href="//www.linkedin.com/in/jorge-varela-zamora/">Linkedin</a>!</p>
                    </section>

                </article>


                <nav id="menu">
                    <ul>
                        <li id="menuAbout">
                            <SvgInline
                                className="menu_icon"
                                src="/icons/google/engineering_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg"
                            />
                            <a href="#CL_title">About</a>
                        </li>
                        <li id="menuProjects">
                            <SvgInline
                                className="menu_icon"
                                src="/icons/google/folder_code_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg"
                            />
                            <a href="#amarillo">Projects</a>
                        </li>
                        <li id="menuCoverLetter">
                            <SvgInline className="menu_icon" src="/icons/google/article_person_24dp_E3E3E3_FILL1_wght400_GRAD0_opsz24.svg" />
                            <a href="#naranja">Cover Letter</a>
                        </li>
                    </ul>
                </nav>

                <svg id="menu_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">  {/*SVG MENU*/}
                    <line className="line" id="line1" x1="20" y1="30" x2="80" y2="30" strokeWidth="8" strokeLinecap="round" />
                    <line className="line" id="line2" x1="20" y1="50" x2="80" y2="50" strokeWidth="8" strokeLinecap="round" />
                    <line className="line" id="line3" x1="20" y1="70" x2="80" y2="70" strokeWidth="8" strokeLinecap="round" />
                </svg>

                <footer>
                    <a href="mailto:jorgevarelazamora@gmail.com">
                        <img src="/mail-svgrepo-com.svg" alt="Mail logo" id="mailImg" />
                    </a>

                    <a href="//www.linkedin.com/in/jorge-varela-zamora/">
                        <img src="/linkedin.svg" alt="Linkedin logo" />
                    </a>
                    <a href="https://github.com/codejovz">
                        <img src="/github.svg" alt="Github logo" />
                    </a>

                    <a href="https://codepen.io/codejovz">
                        <img src="/codepen.svg" alt="Codepen logo" />
                    </a>

                </footer>

            </div>


        </>
    )
}

export default App
