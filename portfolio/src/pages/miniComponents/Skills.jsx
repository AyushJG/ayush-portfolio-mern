import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from "axios";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DOMAIN_URL}/api/v1/skill/getall`,
        { withCredentials: true }
      );
      setSkills(data.skills);
    };
    getMySkills();
  }, []);

  const handleDialogToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-12">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[1.5rem] sm:text-[2rem]
    md:text-[2.25rem] lg:text-[2.5rem] leading-[40px] md:leading-[50px]
    lg:leading-[80px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          <span className="font-extrabold ml-5 bright-text-effect"> STACK</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.slice(0, 6).map((element) => (
          <Card
            className="h-fit p-4 flex flex-col justify-center items-center gap-2"
            key={element._id}
          >
            <img
              src={element.svg && element.svg.url}
              alt="skill"
              className="h-10 sm:h-20 w-auto"
            />
            <p className="text-muted-foreground text-center text-sm">
              {element.title}
            </p>
          </Card>
        ))}
      </div>
      <div className=" self-center">
        <Button
          onClick={handleDialogToggle}
          className="rounded-[30px] flex items-center gap-2 flex-row"
        >
          <span>
            <ExternalLink />
          </span>
          <span>See All Stack </span>
        </Button>
      </div>

      {skills.length > 4 && (
        <Dialog open={isDialogOpen} onOpenChange={handleDialogToggle}>
          <DialogContent className="w-11/12 max-w-6xl h-5/6">
            <div className="w-full h-full overflow-y-auto p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((element) => (
                  <Card
                    className="h-fit p-4 flex flex-col justify-center items-center gap-2"
                    key={element._id}
                  >
                    <img
                      src={element.svg && element.svg.url}
                      alt="skill"
                      className="h-10 sm:h-20 w-auto"
                    />
                    <p className="text-muted-foreground text-center text-sm">
                      {element.title}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Skills;
