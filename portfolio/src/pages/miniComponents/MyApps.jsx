import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const MyApps = () => {
  const [apps, setApps] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DOMAIN_URL}/api/v1/softwareapplication/getall`,
        { withCredentials: true }
      );
      setApps(data.softwareApplication);
    };
    getMyApps();
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
          <span className="font-extrabold ml-5 bright-text-effect">
            {" "}
            TOOLS FOR DEV
          </span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {apps.slice(0, 8).map((element) => (
          <Card
            className="bg-slate-900 h-fit p-4 flex flex-col justify-center items-center gap-3"
            key={element._id}
          >
            <img
              src={element.svg && element.svg.url}
              alt="skill"
              className="h-11 sm:h-20 w-auto"
            />
            <p className="text-muted-foreground text-center">{element.name}</p>
          </Card>
        ))}
      </div>
      <div className="self-center">
        <Button
          onClick={handleDialogToggle}
          className="rounded-[30px] flex items-center gap-2 flex-row"
        >
          <span>
            <ExternalLink />
          </span>
          <span>See All Tools </span>
        </Button>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={handleDialogToggle}>
        <DialogContent className="max-w-full max-h-full h-full w-full">
          <DialogHeader className="flex">
            <DialogTitle>All Tools used for Dev</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
            {apps.map((element) => (
              <Card
                className="bg-slate-900 h-fit p-4 flex flex-col justify-center items-center gap-3"
                key={element._id}
              >
                <img
                  src={element.svg && element.svg.url}
                  alt="skill"
                  className="h-11 sm:h-20 w-auto"
                />
                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MyApps;
