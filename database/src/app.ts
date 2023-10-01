import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { Curator, LibraryType } from './utils/curator'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/library', (req, res) => {
    const { action, name, content } = req.body;

    const library = { libraryType: LibraryType.fileSystem, libraryPath: "/src/library/" }
    const curator = new Curator({ library });

    switch (action) {
        case 'find':
            curator.find(name, (error, project) => {
                if (error) {
                    res.status(404).send({ success: false, result: 'Error: Project not found' });
                } else {
                    res.status(200).send({ success: true, result: project });
                }
            });
            break;

        case 'save':
            curator.save(name, content, (error) => {
                if (error) {
                    res.status(500).send({ success: false, result: `Error saving project: ${error}` });
                } else {
                    res.status(200).send({ success: true, result: 'Project saved' });
                }
            });
            break;

        default:
            res.status(400).send('Invalid action');
    }
});


app.listen(3001, () => { console.log('Listening to 3001') }) 