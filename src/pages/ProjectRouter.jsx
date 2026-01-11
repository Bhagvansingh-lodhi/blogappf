import { useParams } from "react-router-dom";
import DosaClub from "./Dosaclub";

const ProjectRouter = () => {
  const { slug } = useParams();

  if (slug === "dosa-club") return <DosaClub />;

  return <div className="pt-40 text-center">Project not found</div>;
};

export default ProjectRouter;
