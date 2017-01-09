
import { Invoker } from './invoker';
import { ConfigCommand, LogCommand, ErrorCommand } from './commands';
import { Reporter } from './reporter';

let commands = [
    ['config', { a: 'a' }],
    ['log', 'a log message'],
    ['error', 'an error message'],
    ['log', 'another log message'],
];

let invoker = new Invoker();

let executor = (command: any) => {
    let fn = command[0];
    let data = command[1];

    switch (fn) {
        case 'config':
            invoker.execute(new ConfigCommand(Reporter, data));
            break;
        case 'log':
            invoker.execute(new LogCommand(Reporter, data));
            break;
        case 'error':
            invoker.execute(new ErrorCommand(Reporter, data));
            break;
    }
};

for (let command of commands) {
    executor(command);
}

