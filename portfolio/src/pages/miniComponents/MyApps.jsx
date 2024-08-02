import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const MyApps = () => {
  const [apps, setApps] = useState([]);
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
            MY APPS
          </span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {apps ? (
          apps.map((element) => {
            return (
              <Card
                className="h-fit p-4 flex flex-col justify-center items-center gap-3"
                key={element._id}
              >
                <img
                  src={element.svg && element.svg.url}
                  alt="skill"
                  className="h-12 sm:h-24 w-auto"
                />
                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>
              </Card>
            );
          })
        ) : (
          <>{""}</>
        )}
      </div>
    </div>
  );
};

export default MyApps;
