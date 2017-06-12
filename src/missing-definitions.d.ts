/**
 * PhantomJS
 */
declare interface PhantomJS {
    onError(msg: string, trace: any[]): void;
    exit(code: number): void;
}
declare var phantom: PhantomJS;

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
declare interface System {
    args: string[];
    env: { [name: string]: string };
    os: {
        architecture: string;
        name: string;
        version: string;
    };
    pid: number;
    platform: string;
}
declare interface PhantomFileSystem {
    separator: string;
    workingDirectory: string;
    absolute(path: string): string;
    changeWorkingDirectory(dir: string): boolean;
    copyTree(src: string, dest: string): void;
    copy(src: string, dest: string): void;
    exists(path: string): boolean;
    isAbsolute(path: string): boolean;
    isDirectory(path: string): boolean;
    isExecutable(path: string): boolean;
    isFile(path: string): boolean;
    isLink(path: string): boolean;
    isReadable(path: string): boolean;
    isWritable(path: string): boolean;
    lastModified(path: string): Date;
    list(path: string): string[];
    makeDirectory(path: string): boolean;
    makeTree(path: string): boolean;
    move(src: string, dest: string): void;
    open(path: string, params: FileAccessParams): FileStream;
    readLink(path: string): string;
    read(path: string, params: FileAccessParams): string;
    removeDirectory(path: string): void;
    removeTree(path: string): void;
    remove(path: string): void;
    size(path: string): number;
    touch(path: string): void;
    write(source: string, content: string, params: FileAccessParams): void;
}

declare type FileAccessParams = FileAccessMode | FileOptions;
declare type FileAccessMode = 'r' | 'w' | 'a' | '+' | 'b';
declare interface FileOptions {
    mode: FileAccessMode;
    charset: string;
}

declare interface FileStream {
    atEnd(): boolean;
    close(): void;
    flush(): void;
    readLine(): string;
    read(): void;
    seek(): void;
    writeLine(content: string): void;
    write(content: string): void;
}

declare var require: {
    (name: 'child_process'): any;
    (name: 'fs'): PhantomFileSystem;
    (name: 'system'): System;
    (name: 'webpage'): any;
    (name: 'webserver'): WebServerModule;
};