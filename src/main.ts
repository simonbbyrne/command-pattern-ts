
import { Invoker } from './invoker';

let commands = [
    ['config', { a: 'a' }],
    ['log', 'a log message'],
    ['error', 'an error message'],
    ['log', 'another log message'],
];

let invoker = new Invoker();

for(let command of commands) {
    invoker.execute(command);
}

