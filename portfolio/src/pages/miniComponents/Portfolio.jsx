import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { FaEye } from "react-icons/fa";
import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DOMAIN_URL}/api/v1/project/getall`,
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getMyProjects();
  }, []);

  const getDeployedInfo = (element) => {
    if (element.deployed === "Yes") {
      return <Check className="mx-auto" />;
    }
  };

  return (
    <>
      <div>
        <div className="relative mb-12">
          <h1
            className="flex gap-4 items-center text-[1.5rem] sm:text-[2rem]
    md:text-[2.25rem] lg:text-[2.5rem] leading-[40px] md:leading-[50px]
    lg:leading-[80px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
            style={{
              background: "hsl(222.2 84% 4.9%)",
            }}
          >
            <span className="font-extrabold ml-5 text-tubeLight-effect">
              PROJECTS
            </span>
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.length > 0 ? (
            projects.slice(0, 4).map((element) => (
              <Link to={`/project/${element._id}`} key={element._id}>
                <Card className=" bg-slate-900 relative h-72 flex flex-col justify-center items-center overflow-hidden group">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-lg mb-2">
                      {element.title}
                    </p>
                    <FaEye className="text-white text-4xl" />
                  </div>
                  <div className="h-full w-full transition-filter duration-300">
                    <img
                      src={
                        element.projectBanner?.url || "path/to/placeholder.jpg"
                      }
                      alt={element.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="text-muted-foreground text-center text-base mt-2 flex items-center justify-center">
                      <span>Active: </span>
                      <span className="ml-2 flex items-center justify-center">
                        {getDeployedInfo(element)}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <>No Project available</>
          )}
        </div>
      </div>
      <div className=" self-center">
        <Button
          onClick={() => {
            handleDialogToggle();
          }}
          className="rounded-[30px] flex items-center gap-2 flex-row"
        >
          <span>
            <ExternalLink />
          </span>
          <span>See All Project </span>
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogToggle}>
        <DialogContent className="max-w-full max-h-full h-full w-full">
          <DialogHeader className="flex">
            <DialogTitle>All Project</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
            {projects.map((element) => (
              <Link to={`/project/${element._id}`} key={element._id}>
                <Card className=" bg-slate-900 relative h-72 flex flex-col justify-center items-center overflow-hidden group">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-lg mb-2">
                      {element.title}
                    </p>
                    <FaEye className="text-white text-4xl" />
                  </div>
                  <div className="h-full w-full transition-filter duration-300">
                    <img
                      src={
                        element.projectBanner?.url || "path/to/placeholder.jpg"
                      }
                      alt={element.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="text-muted-foreground text-center text-base mt-2 flex items-center justify-center">
                      <span>Active: </span>
                      <span className="ml-2 flex items-center justify-center">
                        {getDeployedInfo(element)}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
