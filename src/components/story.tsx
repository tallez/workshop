export default function Story() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-1/3 py-2">
        <Brick />
      </div>
    </div>
  );
}

export function Brick() {
  return <div className="w-full">Hello</div>;
}
