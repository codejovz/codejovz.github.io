import { Analytics } from '@vercel/analytics/react'
import  Menu from './Menu.tsx';
import './App.css'

function App()  {

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

                <article id="verde" className="box">

                    <section>
                        <h2>🛠️ Technologies:</h2>
                        <img className="badge" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python"/>
                        <img className="badge" src="https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin"/>
                        <img className="badge" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
                        <img className="badge" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>

                        <img className="badge" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt=""/>
                        <img className="badge" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt=""/>
                        <img className="badge" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt=""/>
                        <img className="badge" src="https://img.shields.io/badge/VB-Visual_Basic-325a99?style=for-the-badge&logoColor=white&labelColor=1c3969" alt=""/>
                    </section>

                    <section>
                        <h2>💻 IDEs/Editors:</h2>
                        <img className="badge" src="https://img.shields.io/badge/Eclipse-FE7A16.svg?style=for-the-badge&logo=Eclipse&logoColor=white" alt="Eclipse"/>
                        <img className="badge" src="https://img.shields.io/badge/android%20studio-1a82de?style=for-the-badge&logo=android%20studio&logoColor=white" alt="Android Studio"/>
                        <img className="badge" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Visual Studio Code"/>
                        <img className="badge" src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="Visual Studio"/>
                        <img className="badge" src="https://img.shields.io/badge/Java%20WindowBuilder-%23FFFFFF?style=flat&logo=Java&labelColor=%232C2255&color=%232C2255" alt="Java Window Builder"/>
                    </section>

                    <section>
                        <h2>📚 Libraries & Frameworks:</h2>
                        <img className="badge" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/>
                        <img className="badge" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next JS"/>
                        <img className="badge" src="https://img.shields.io/badge/Swing-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="SWING"/>
                        <img className="badge" src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" alt=".NET"/>
                    </section>

                    <section>
                        <h2>CRMs:</h2>
                        <img className="badge" src="https://img.shields.io/badge/Odoo-000000?style=for-the-badge&labelColor=797979&color=ba60b8" alt="Odoo"/>
                    </section>

                    <section>
                        <details>
                        <summary>🧠Learning and interested on:</summary>
                            <img className="badge" src="https://img.shields.io/badge/%F0%9F%A4%96-Artificial%20Intelligence-4c2271?style=for-the-badge&labelColor=lightgrey" alt="Artificial intelligence"/>
                            <img className="badge" src="https://img.shields.io/badge/%F0%9F%93%B1-Mobile%20development-4c2271?style=for-the-badge&labelColor=lightgrey" alt="Mobile Development"/>
                            <img className="badge" src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"/>
                        </details>
                    </section>

                    <section>
                        <h2>Find me on:</h2>
                        <img className="badge" src="https://img.shields.io/badge/Codepen-@codejovz-000000?style=for-the-badge&logo=codepen&logoColor=white&labelColor=000000" alt="codepen" />
                        <img className="badge" src="https://img.shields.io/badge/GMAIL-jorgevarelazamora%40gmail.com-%23FFFFFF?style=for-the-badge&logo=Gmail&logoColor=%23FFFFFF&labelColor=%23EA4335&color=%23EA4335&link=mailto%3Ajorgevarelazamorad%40gmail.com" />
                    </section>
                </article>


                <article id="amarillo" className="box">

                    <div className="scroll-container">

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/DevHeat">DevHeat</a> <span className="repVisib">Public</span></p>
                            <p className="repFork">Forked from <a href="https://github.com/DAMVA202425/DevHeat" className="forkedLink">DAMVA202425/DevHeat</a></p>
                            <p className="repDesc">Automates GitHub profile edition and creation of READMEs.</p>
                            <p className="repTags"><a href="https://github.com/topics/readme">readme</a> <a href="https://github.com/topics/app">app</a> <a href="https://github.com/topics/automation">automation</a></p>
                            <p><span className="kotlin">Kotlin</span><img className="liscence" src="./octicon_law.svg"/> The Unlicense <span className="updateDate">Updated on Jun 19, 2025</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/badges-codejovz">badges-codejovz</a> <span className="repVisib">Public</span></p>
                            <p className="repDesc">Ready to use markdown svg badges.</p>
                            <p className="repTags"><a href="https://github.com/topics/react-router">react-router</a> <a href="https://github.com/topics/reactjs">reactjs</a> <a href="https://github.com/topics/badges">badges</a> <a href="https://github.com/topics/public-transport">public-transport</a></p>
                            <p><span className="javascript">javascript</span> <span className="updateDate">Updated on Aug 13, 2025</span></p>
                        </section>
                        
                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/404">TFG</a> <span className="repVisib">Private</span></p>
                            <p className="repDesc">Kotlin app for users, Python-driven local AI, a MySQL database, and a Java API for local connections.</p>
                            <p className="repTags"><a href="https://github.com/topics/artificial-intelligence">artificial-intelligence</a> <a href="https://github.com/topics/bcrypt">bcrypt</a> <a href="https://github.com/topics/ktor-server">ktor-server</a></p>
                            <p><span className="kotlin">Kotlin</span> <img className="liscence" src="./octicon_law.svg"/>MIT License <span className="updateDate">Updated on Jun 10, 2025</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/autoUpdatingBio">autoUpdatingBio</a> <span className="repVisib">Public</span></p>
                            <p className="repDesc">Script / bot for auto-updating the biography of your Github's account.</p>
                            <p className="repTags"><a href="https://github.com/topics/python">python</a> <a href="https://github.com/topics/github-api">github-api</a> <a href="https://github.com/topics/workflow">workflow</a> <a href="https://github.com/topics/yml">yml</a></p>
                            <p><img className="liscence" src="./octicon_law.svg"/>The Unlicense <span className="updateDate">Updated on Aug 17, 2024</span></p>
                        </section>

                        <section className="scroll-item">
                            <p><a className="repTitle" href="https://github.com/codejovz/overlappingJFrameComponents">overlappingJFrameComponents</a> <span className="repVisib">Public</span></p>
                            <p className="repDesc">How to overlapp a JFrame component over Graphics ( Java ).</p>
                            <p className="repTags"><a href="https://github.com/topics/swing-gui">swing-gui</a> <a href="https://github.com/topics/jframes">jframes</a></p>
                            <p className="repLast"><span className="java">Java</span> <img className="liscence" src="./octicon_law.svg"/>The Unlicense <span className="updateDate">Updated on Nov 28, 2024</span></p>
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
                            <polyline points="10,70 10,10 70,10" id="arIzq"/>
                            <polyline points="10,130 10,190 70,190" id="abIzq"/>
                            <polyline points="130,10 190,10 190,70" id="arDer"/>
                            <polyline points="130,190 190,190 190,130" id="abDer"/>
                        </svg>
                    </button>

                    <h2>More about me &#40;<span id="CL"> <span id="CLcover">C</span><span id="CLleter">L</span></span>&#41;:</h2>
        
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
                    <li id="menuLin"><a href="https://www.linkedin.com/in/jorge-varela-zamora/">Linkedin</a></li>     
                    <li id="menuGit"><a href="https://github.com/codejovz">Github</a></li>
                    <li id="mailLink"><a href="mailto:jorgevarelazamora@gmail.com">Mail me</a></li>
                </ul>
            </nav>

            <svg id="menu_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">  {/*SVG MENU*/}
                <line className="line" id="line1" x1="20" y1="30" x2="80" y2="30" strokeWidth="8" strokeLinecap="round"/>
                <line className="line" id="line2" x1="20" y1="50" x2="80" y2="50" strokeWidth="8" strokeLinecap="round"/>
                <line className="line" id="line3" x1="20" y1="70" x2="80" y2="70" strokeWidth="8" strokeLinecap="round"/>
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
