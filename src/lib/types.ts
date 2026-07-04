export type IconItem = {
    name: string;
    icon: string;
    style?: string;
    link?: string;
};

export type AboutType = {
    firstName: string;
    lastName: string;
    aliases: string[];
    title: string;
    location: {
        city: string;
        region: string;
        country: string;
        countryCode: string;
    };
    social: IconItem[];
    summary: string;
    bio: string;
};

export type CareerType = {
    category: "education" | "internship" | "job";
    title: string;
    organization: string;
    organizationUrl?: string;
    startDate: Date;
    endDate?: Date;
    isCurrent: boolean;
    description: string;
    learnedSkills?: IconItem[];
};