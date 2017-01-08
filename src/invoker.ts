
import { Command } from './commands';
import { ConfigCommand, LogCommand, ErrorCommand } from './commands';

export class Invoker {

    /**
     * Execute a command
     */
    public execute(command: any): void {
        let fn = command[0];
        let data = command[1];

        switch (fn) {
            case 'config':
                this.invoke(new ConfigCommand(data));
                break;
            case 'log':
                this.invoke(new LogCommand(data));
                break;
            case 'error':
                this.invoke(new ErrorCommand(data));
                break;
        }
    };

    /**
     * Invoke a concrete command
     */
    private invoke(command: Command): void {
        command.execute();
    }
}
