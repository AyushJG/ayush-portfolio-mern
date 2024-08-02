import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_DOMAIN_URL}/api/v1/user/me`,
        {
          withCredentials: true,
        }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  console.log({ user });
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-green-400 rounded-full h-2 w-2"></span>
        <p>Online</p>
      </div>

      <h1
        className="overflow-x-hidden text-[1.3rem] sm:text-[1.75rem]
      md:text-[2.2rem] lg:text-[2.8rem] tracking-[2px] mb-4"
      >
        Hey, I'm Ayush
      </h1>
      <h1
        className="text-tubeLight-effect overflow-x-hidden text-[1.3rem]
      sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]"
      >
        <Typewriter
          words={["PRODUCT ENGINEER", "LEARNER", "FREELANCER"]}
          loop={50}
          cursor
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <div className="flex justify-between items-center">
        <img
          src="/me.png"
          alt="avatar"
          className=" p-2 sm:p-4 rotate-[0deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
        />
      </div>
      <div></div>
      <div className="flex gap-5">
        <div
          style={{ alignItems: "center" }}
          className="w-fit px-5 py-2 bg-slate-50 rounded-[20px] flex gap-5
      items-center mt-4 md:mt-8 lg:mt-10"
        >
          <Link to={user?.instagramURL} target="_blank">
            <Instagram className="text-pink-500 w-7 h-7" />
          </Link>
          <Link to={user?.facebookURL} target="_blank">
            <Facebook className="text-blue-800 w-7 h-7" />
          </Link>
          <Link to={user?.linkedInURL} target="_blank">
            <Linkedin className="text-sky-500 w-7 h-7" />
          </Link>
        </div>
        <div
          style={{ alignItems: "center" }}
          className="mt-4 md:mt-8 lg:mt-10  flex gap-3"
        >
          <Link to={user?.githubURL} target="_blank">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row">
              <span>
                <Github />
              </span>
              <span>Github</span>
            </Button>
          </Link>
          <Link to={user?.resume && user?.resume?.url} target="_blank">
            <Button className="rounded-[30px] flex items-center gap-2 flex-row">
              <span>
                <ExternalLink />
              </span>
              <span>Resume </span>
            </Button>
          </Link>
        </div>
      </div>

      <p className="mt-8 text-xl tracking-[2px] text-justify ">
        {user?.aboutMe}
      </p>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default Hero;
