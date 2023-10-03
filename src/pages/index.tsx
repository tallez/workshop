import Story from "@components/story";
import { LIBRARY_ENDPOINT } from "@constants";
import { getFile } from "@utils/library-client";

export default function Home(props: { project: StoryProps | null }) {
  const { project } = props;
  return (
    <main className="w-full">
      <Story project={project} />
    </main>
  );
}

export const getServerSideProps = async (context) => {
  const req = await getFile("ro");
  if (req.success) {
    const { result } = req;
    return {
      props: {
        project: result,
      },
    };
  }
  return {
    props: {
      project: null,
    },
  };
};
