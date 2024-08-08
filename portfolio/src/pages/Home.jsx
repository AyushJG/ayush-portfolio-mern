import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import MyApps from "./miniComponents/MyApps";
import About from "./miniComponents/About";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";
import { Loader } from "@/components/Loader";

const Home = ({ setLoading, loading }) => {
  if (!loading) {
    return <Loader />;
  }
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-18 xl:mt-20 sm:mx-auto w-full max-w-[1200px] flex flex-col gap-14">
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Portfolio setLoading={setLoading} />
      <MyApps />
      <Contact />
    </article>
  );
};

export default Home;
