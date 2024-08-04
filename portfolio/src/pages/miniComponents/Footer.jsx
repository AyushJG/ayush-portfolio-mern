const Footer = () => {
  return (
    <footer className="p-5 mt-6 w-full max-w-[1200px] mx-auto ">
      <hr className="w-full border-t-2 border-gray-300 " />
      <div className="flex flex-col md:flex-row justify-between items-center mt-5">
        <h1 className="  text-gray-500 text-3xl tracking-[8px] capitalize text-center ">
          AYUSH TIMALSINA
        </h1>
        <div className="text-right">
          <p className="mt-2 text-gray-500 text-center">
            ayushtimalcina@gmail.com
          </p>
          <p className="mt-2 text-gray-500 text-center">+977 9840273479</p>
        </div>
      </div>
      <p className="  mt-2 text-center">
        © AyushJG. All rights reserved {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
