interface Tech {
    id: number;
    name: string;
}

export interface ProjectType {
    id: number;
    time_start: string;
    time_end: string;
    name: string;
    image: string;
    link: string;
    description: string;
    type_project: string;
    tech: Tech[];
}
