/**
 * PhantomJS
 */
declare interface PhantomJS {
    onError(msg: string, trace: any[]): void;
    exit(code: number): void;
}
declare type PhantomJSModule = 'webserver' | 'system' | 'webpage' | 'child_process' | 'fs';

declare interface WebServerModule {
    create(): WebServer;
}
declare interface WebServer {
    listen(port: number, listener: (request: WebServerRequest, response: WebServerResponse) => void);
}
declare interface WebServerRequest {
    headers: { [name: string]: string };
    httpVersion: string;
    method: 'GET' | 'POST';
    url: string;
    post: string;
}
declare interface WebServerResponse {
    headers: { [name: string]: string };
    setHeader(name: string, value: string): void;
    setEncoding(encoding: string): void;
    statusCode: number;
    objectName: string;
    write(data: string): void;
    close(): void;
    closeGracefully(): void;
}

declare var phantom: PhantomJS;
// declare var require: (name: PhantomJSModule) => any;
declare var require: {
    (name: 'fs'): any;
    (name: 'system'): any;
    (name: 'webpage'): any;
    (name: 'webserver'): WebServerModule;
};