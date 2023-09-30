import fs from 'fs';
import path from 'path';

export function find(projectId: string, callback: (error: Error | null, project: any) => void) {
    const filePath = path.join(process.cwd(), `/src/library/${projectId}.json`)

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Handle the error when the file is not found or any other error occurs
            console.error('Error reading project file:', err);
            callback(err instanceof Error ? err : new Error('Unknown error'), null);
        } else {
            try {
                // Parse the JSON data if the file was read successfully
                const project = JSON.parse(data);
                callback(null, project);
            } catch (parseError) {
                // Handle any JSON parsing errors
                console.error('Error parsing project JSON:', parseError);
                callback(parseError instanceof Error ? parseError : new Error('JSON parse error'), null);
            }
        }
    });
}

export function save(projectId: string, data: any, callback: (error: Error | null) => void) {
    const filePath = path.join(process.cwd(), `/src/library/${projectId}.json`)

    // Convert the data to JSON format
    const jsonData = JSON.stringify(data, null, 2); // Use null and 2 for pretty-printing

    fs.writeFile(filePath, jsonData, 'utf8', (err) => {
        if (err) {
            // Handle the error when the file cannot be written
            console.error('Error writing project file:', err);
            callback(err as Error);
        } else {
            console.log('Project saved successfully');
            callback(null);
        }
    });
}
