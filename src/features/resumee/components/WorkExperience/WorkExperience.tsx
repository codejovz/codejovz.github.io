import { calculateDuration } from "../../utils/calculateDuration";
import styles from "../../ResumeeContainer.module.css";

type ContractType = 'Full-time' | 'Part-time' | 'Internship'
type WorkTypeLocation = 'Remote' | 'Hybrid' | 'On-site'

type WorkExperienceProps = {
    companyLogoPath?: string;
    jobTitle: string;
    company: string;
    contractType?: ContractType;
    startDate: string;
    endDate?: string;
    workLocation?: string;
    workTypeLocation?: WorkTypeLocation;
    description: string;
    skills?: string[];
}

export default function WorkExperience({
    companyLogoPath,
    jobTitle,
    company,
    contractType,
    startDate,
    endDate,
    workLocation,
    workTypeLocation,
    description,
    skills,
}: WorkExperienceProps) {
    const firstTwoSkills = skills?.slice(0, 2)
    const remainingSkills = skills?.slice(2)

    return (
        <section className={styles.workExperience}>
            {companyLogoPath && <img src={companyLogoPath} alt={company} loading="lazy" className={styles.companyLogo} />}
            {company && <h3>{company}</h3>}
            <div className={styles.jobMarkerContainer}>
                <span className={styles.jobMarker}></span>
                <h4>{jobTitle}</h4>
            </div>
            <div className={styles.jobMeta}>
                <small className={styles.period}>{startDate} - {endDate ?? "Present"} · {calculateDuration(startDate, endDate)}</small>
                {contractType && <small>{contractType}</small>}
                {(workLocation || workTypeLocation) && (
                    <small>
                        {workLocation}
                        {workLocation && workTypeLocation && ' · '}
                        {workTypeLocation}
                    </small>
                )}
            </div>
            <p>{description}</p>

            {skills && skills.length > 0 && (
                <>
                    <img src="diamond_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                    {skills.length <= 2 ? (
                        <p>{skills.join(', ')}</p>
                    ) : (
                        <details className={styles.skillsDetails}>
                            <summary>
                                {firstTwoSkills?.join(', ')}
                                <span className={styles.moreSkills}> + {remainingSkills?.length} more</span>
                            </summary>
                            <span className={styles.remainingSkills}>, {remainingSkills?.join(', ')}</span>
                        </details>
                    )}
                </>
            )}
        </section>
    )
}
