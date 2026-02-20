function HomeScreen() {
  return (
    <main className="bg-[url('/Home-screen-mobile.svg')] md:bg-[url('/Welcome.jpg')] bg-cover bg-center bg-no-repeat min-h-[50vh] md:min-h-[70vh] backdrop-blur-xs relative">
      <div className="flex flex-col gap-6 md:py-50 md:px-20 py-50 px-6">
        <h1 className="text-[rgba(255,255,255,1)] md:text-5xl md:font-extrabold font-serif md:w-4xl text-3xl font-extrabold w-[95%]">
          The Heart of Nigerian Home Cooking
        </h1>
        <p className="text-[rgba(255,255,255,1)] font-serif md:text-2xl md:font-extrabold font-bold text-[14px]">
          Handcrafted with passion, delivered with care.
        </p>
        <button className="flex bg-[rgba(255,122,24,1)] w-[65%] text-[rgba(255,255,255,1)] md:w-[13%] rounded-[10px] py-4 px-4 font-serif text-center cursor-pointer hover:bg-amber-600 transition-all font-medium ease-in-out md:font-bold">
          Discover What's new
        </button>
      </div>
    </main>
  );
}

export default HomeScreen;
