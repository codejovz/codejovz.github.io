
export const calculateDuration = (startDate: string, endDate?: string): string => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    // Adjust for cases where the specific day of the month might affect the calculation?
    // Usually for resumes, month-precision is enough.
    // However, "Present" logic uses current date. 

    // If the result is 0 months and 0 years (e.g. same month), maybe show "Less than a month"?
    // Or just "1 mo".

    // Let's format the output.
    const parts: string[] = [];
    if (years > 0) {
        parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    }
    if (months > 0) {
        parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
    }

    if (parts.length === 0) {
        return 'Less than a month';
    }

    return parts.join(' ');
};
