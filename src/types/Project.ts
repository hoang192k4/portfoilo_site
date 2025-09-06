interface Tech {
    name: string;
}

export interface ProjectType {
    id: number;
    title: string;
    time_start: string;
    time_end: string;
    name: string;
    image: string;
    description: string;
    tech: Tech[];
}
