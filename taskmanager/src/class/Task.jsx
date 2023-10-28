export class Task {
    constructor(title, priority, description) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.status = 'waiting';
    }
}