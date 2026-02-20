function NewAddition() {
    return (
      <section className="bg-[url('/home-addition-image.png')] bg-no-repeat bg-cover bg-center w-full md:h-87 md:py-30 md:px-25 flex items-start flex-col gap-4 h-[50vh] py-30 px-8 ">
        <h1 className="text-white md:text-4xl text-3xl font-extrabold font-serif ">
          Introducing Our New Menu Additions!
        </h1>
        <p className="text-white md:text-[18px] text-[16px] w-[80%] md:w-[40%] font-serif">
          Explore exciting new dishes, crafted with the freshest ingredients and
          authentic Nigerian flavors. Limited time offer!
        </p>
        <button className=" bg-[rgba(255,122,24,1)] text-white py-2 px-4 rounded-md font-medium font-serif">
          Discover What's new
        </button>
      </section>
    );
}

export default NewAddition;
