type IT<T> = {
    name: string;
    age: number;
    skill: T;
};

const dev1: IT<string> = {
    name: "Nam",
    age: 22,
    skill: "TypeScript",
};

const dev2: IT<string[]> = {
    name: "Lan",
    age: 24,
    skill: ["React", "Node.js", "TypeScript"],
};