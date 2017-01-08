
export class Reporter {

    static log(message: string): void {
        console.log('LOG: ', message);
    }

    static warn(message: string): void {
        console.log('WARN: ', message);        
    }

    static error(message: string): void {
        console.log('ERROR: ', message);        
    }

    static config(conf: any) {
        console.log('CONFIG: ', conf);
    }

}