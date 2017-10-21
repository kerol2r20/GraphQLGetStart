declare module 'csv' {
    interface ParseOption {
        auto_parse: boolean,
    }
    export function parse(data: string, callback: (err: NodeJS.ErrnoException, data: any) => void): void;
    export function parse(data: string, options: ParseOption,callback: (err: NodeJS.ErrnoException, data: any) => void): void;
}