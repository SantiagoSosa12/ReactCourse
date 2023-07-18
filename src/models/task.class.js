import { LEVELS } from "./leves.enum";

export class Task {
    name = '';
    description = '';
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name , description , completed , level) {
        this.name = name;
        this.description = description;
        this.level = level;
        this.completed = completed;
    }
}