import fs from 'fs';
import path from 'path';

export enum LibraryType {
    fileSystem = 'fileSystem'
}

export interface Library {
    libraryType: LibraryType;
    libraryPath: string;
}

export interface CuratorProps {
    library: Library
}

export class Curator {
    library: Library

    constructor(params: CuratorProps) {
        this.library = params.library
    }

    find(name: string, callback: (error: Error | null, project: any) => void) {
        const filePath = path.join(process.cwd(), this.library.libraryPath, `${name}.json`);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading project file:', err);
                callback(err instanceof Error ? err : new Error('Unknown error'), null);
            } else {
                try {
                    const project = JSON.parse(data);
                    callback(null, project);
                } catch (parseError) {
                    console.error('Error parsing project JSON:', parseError);
                    callback(parseError instanceof Error ? parseError : new Error('JSON parse error'), null);
                }
            }
        });
    }

    save(name: string, data: any, callback: (error: Error | null) => void) {
        const filePath = path.join(process.cwd(), this.library.libraryPath, `${name}.json`);
        const jsonData = JSON.stringify(data, null, 2);

        fs.writeFile(filePath, jsonData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing project file:', err);
                callback(err as Error);
            } else {
                console.log('Project saved successfully');
                callback(null);
            }
        });
    }
}
