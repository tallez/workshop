import { StoryProps } from "@components/story"

export async function getFile(name: string) {
    const project = await fetch("http://localhost:3001/library", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: "find",
            name: name
        }),
    }).then((res) => res.json())

    return project
}

export async function saveFile(name: string, content: StoryProps) {
    const project = await fetch("http://localhost:3001/library", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            action: "save",
            name: name,
            content: content
        }),
    }).then((res) => res.json())

    return project
}   