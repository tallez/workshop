import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { find, save } from './utils/project'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/project', (req, res) => {
    const { action, projectId, newContent } = req.body
    switch (action) {
        case ('find'):
            find(projectId, (error, project) => {
                if (error) {
                    res.send('error : project not found')
                } else {
                    res.send(project)
                }
            });
        case ('save'):
            save(projectId, newContent, (error) => {
                if (error) {
                    res.send(`error saving project: ${error}`);
                } else {
                    res.send('project saved')
                }
            });
    }
})

app.listen(3001, () => { console.log('Listening to 3001') }) 