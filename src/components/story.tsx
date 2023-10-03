export default function Story({ project }: { project: StoryProps | null }) {
  if (project) {
    const { title, components } = project;
    return (
      <div className="flex w-full flex-col items-center justify-center">
        <p>{title}</p>
        <div className="flex w-1/2 flex-col items-center justify-center py-2">
          {components.map((c) => (
            <Brick type={c.type} content={c.content} />
          ))}
        </div>
      </div>
    );
  }
}

function Brick({ type, content }: BrickProps) {
  return <div className="w-full">{content}</div>;
}
