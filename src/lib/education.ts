export interface EducationItem {
    id: string;
    degree: string;
    institution: string;
    period: string;
    description?: string;
}

export const education: EducationItem[] = [
    {
        id: "ug",
        degree: "Bachelor of Science in Information Technology",
        institution: "University of Ghana, Legon",
        period: "2023",
    },
    {
        id: "wassce",
        degree: "West African Senior School Certificate",
        institution: "Presbyterian Senior High School, Suhum",
        period: "2019",
    },
    {
        id: "bece",
        degree: "Basic Education Certificate Examination",
        institution: "Peace Paradise International School, Tema",
        period: "2016",
    }
];
