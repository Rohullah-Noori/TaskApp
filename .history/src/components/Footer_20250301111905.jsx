function Footer() {
  return (
    // <div className=" w- md:w-full ">

    // </div>
    <div className="bg-blue-400 w-screen   md:w-full min-h-20 pt-5 flex flex-wrap    justify-center  space-x-5 lg:space-x-13 text-white items-center">
      <div>
        <h1>contact us :</h1>
      </div>
      <div className="flex flex-wrap md:flex-row space-x-10 md:space-x-24 cursor-pointer justify-center">
        <span>Github</span>
        <span>linkdin</span>
        <span>Instagram</span>
        <span>Twitter</span>
      </div>
    </div>
  );
}

export default Footer;
