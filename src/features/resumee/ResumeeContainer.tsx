import WorkExperience from "./components/WorkExperience/WorkExperience";
import styles from "./ResumeeContainer.module.css";

export default function ResumeeContainer() {
    return (
        <article id="about" className={styles.resumeeContainer + " box"}>
            <h2>About</h2>
            <p>Drawn to the intersection of business logic and user experience, I research how to optimize the backend by splitting processes and allocating the workload to the server or client depending on the case.</p>
            <p>I use React, TypeScript and Next.js for full-stack web solutions, while for separate solutions, I have more experience with Python / Vite and FastAPI.</p>
            <p>I stand out because of my quick learning ability, professional honesty,  and creative approach to development solutions.</p>
            <p>I am able to adapt quickly to new tools and methodologies. I am also clear and honest when communicating the real status of my work, which makes coordination easier in multi-disciplinary teams. I have a verifiable B2 level of english, and the High School diploma.</p>
            <h3 id="experiences">Experiences</h3>
            <div className={styles.experiencesTimeline}>
                <progress className={styles.resumeeProgressBar} max={100} value={100} />
                <WorkExperience
                    companyLogoPath="companyLogos/grupo_atisa_logo.jpg"
                    jobTitle="Software Developer"
                    company="Atisa" contractType="Full-time"
                    startDate="2025-09"
                    workLocation="Madrid, Community of Madrid, Spain"
                    workTypeLocation="Hybrid"
                    description="Archievement: I implemented a FastAPI solution to connect an indefinite number of clients using WebSockets, preventing each client from making a GET request for every data change. By sending a single signal with all changes from the server, I was able to reduce the workload on both the clients and the server by up to 80%. I also implemented user authentication by Microsoft Azure, providing a secure and scalable access.
I used Artificial Intelligence locally with Hugging Face, Python, VQA and OCR. I followed Hexagonal Architecture, MVC and Monolythic patterns, using a FastAPI backend, with Swagger UI and Postman, while managing a MySQL database with HeidiSQL. I built full-stack solutions with Python (pydantic), React.js, Next.js / Vite and TypeScript."
                    skills={["FastAPI", "Python", "React.js", "Next.js", "TypeScript"]} />

                <WorkExperience
                    jobTitle="Software Developer"
                    contractType="Internship"
                    startDate="2025-09" endDate="2025-12"
                    workLocation="Madrid, Community of Madrid, Spain"
                    workTypeLocation="On-site"
                    description="Artificial Inteligence developement using Python, Flutter for cross-platform mobile solutions, and MySQL for databases. I worked on a real proyect focused on automating the processing of legal documents, 'standing out for my quick learning, professional honesty, and creativity in developing technological solutions'. I have a letter of recomendation."
                    skills={["Artificial Intelligence", "GitHub", "Hugging Face Products", "Python", "Flutter", "ModelViewController (MVC)", "Flutter", "PHP"]}
                    company=""
                />
            </div>
        </article>
    )
}