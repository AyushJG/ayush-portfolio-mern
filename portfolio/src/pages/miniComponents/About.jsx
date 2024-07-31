const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem]
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px]
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.png"
              alt="avatar"
              className=" p-2 sm:p-4 rotate-[0deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              Hey there, I am Ayush Timalsina , an experienced Product Engineer
              specializing frontend. I am skilled in data analysis, web
              development, UI design, and quality assurance. Proficient in
              JavaScript, ReactJS, NextJS, NodeJS, Express, Typescript and
              additionally Python along with Django,
            </p>
            <p>
              I have interests not only in technology but also in movies,
              series, video games, and cooking. I excel in meeting deadlines for
              my work.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I excel in delivering robust software solutions with strong
          leadership and communication abilities honed throughout my
          professional experience.
        </p>
      </div>
    </div>
  );
};

export default About;
