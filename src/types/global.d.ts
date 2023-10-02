export { }

declare global {
    interface StoryProps {
        title: string;
        components: BrickProps[];
    }

    interface BrickProps {
        type: BrickTypes;
        content: string;
    }

    enum BrickTypes {
        TITLE = "title",
    }
}