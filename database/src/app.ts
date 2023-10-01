import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { Curator, LibraryType } from './utils/curator'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/library', (req, res) => {
    const { action, projectId, newContent } = req.body;

    const library = { libraryType: LibraryType.fileSystem, libraryPath: "/src/library/" }
    const curator = new Curator({ library });

    switch (action) {
        case 'find':
            curator.find(projectId, (error, project) => {
                if (error) {
                    res.status(404).send('Error: Project not found');
                } else {
                    res.send(project);
                }
            });
            break;

        case 'save':
            curator.save(projectId, newContent, (error) => {
                if (error) {
                    res.status(500).send(`Error saving project: ${error}`);
                } else {
                    res.send('Project saved');
                }
            });
            break;

        default:
            res.status(400).send('Invalid action');
    }
});


app.listen(3001, () => { console.log('Listening to 3001') }) 