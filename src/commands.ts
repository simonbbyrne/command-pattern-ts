
import { Reporter } from './reporter';

export interface Command {
    execute(): void;
}

export class ConfigCommand implements Command {

    constructor(private conf?: any) {
    }

    execute(): void {
        Reporter.config(this.conf);
    }
}

export class ErrorCommand implements Command {

    constructor(private message?: any) {
    }

    execute(): void {
        Reporter.error(this.message);
    }
}

export class LogCommand implements Command {

    constructor(private message?: any) {
    }

    execute(): void {
        Reporter.log(this.message);
    }
}