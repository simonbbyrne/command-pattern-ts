
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
                new ConfigCommand(data).execute();
                break;
            case 'log':
                new LogCommand(data).execute();
                break;
            case 'error':
                new ErrorCommand(data).execute();
                break;
        }
    };

}
