import fs from 'fs';
import path from 'path';

export enum LibraryType {
    fileSystem = 'fileSystem'
}

interface Library {
    libraryType: LibraryType;
    libraryPath: string;
}

interface CuratorProps {
    library: Library
}

export class Curator {
    libraryType: LibraryType;
    libraryPath: string;

    constructor(params: CuratorProps) {
        this.libraryType = params.library.libraryType;
        this.libraryPath = params.library.libraryPath; // Initialize libraryPath
    }

    find(projectId: string, callback: (error: Error | null, project: any) => void) {
        const filePath = path.join(process.cwd(), this.libraryPath, `${projectId}.json`);

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

    save(projectId: string, data: any, callback: (error: Error | null) => void) {
        const filePath = path.join(process.cwd(), this.libraryPath, `${projectId}.json`);

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
