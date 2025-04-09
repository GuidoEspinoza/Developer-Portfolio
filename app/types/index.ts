export interface MetaData {
    title: string;
    description: string;
    keywords: string[];
    author: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    duration: string;
}

export interface Skill {
    name: string;
    icon: string;
    level: number;
}