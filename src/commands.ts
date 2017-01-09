
import { Reporter } from './reporter';

export interface Command {
    execute(): void;
}

export class ConfigCommand implements Command {

    constructor(private reporter, private conf?: any) {
    }

    execute(): void {
        this.reporter.config(this.conf);
    }
}

export class ErrorCommand implements Command {

    constructor(private reporter, private message?: any) {
    }

    execute(): void {
        this.reporter.error(this.message);
    }
}

export class LogCommand implements Command {

    constructor(private reporter, private message?: any) {
    }

    execute(): void {
        this.reporter.log(this.message);
    }
}

