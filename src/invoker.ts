
import { Command } from './commands';

export class Invoker {
    /**
     * Execute a command
     */
    public execute(command: Command): void {
        command.execute();
    }

}
