import explorePopular from "../data/explorePopular.json";

function ExplorePopular() {
  return (
    <main className="bg-[rgba(243,244,246,1)] flex items-center flex-col justify-center">
      <div className="gap-10 flex flex-col items-start">
        <h2 className="text-4xl font-serif font-black">Popular</h2>
        <div className="md:grid md:grid-cols-3 md:gap-16 flex flex-col gap-8">
          {explorePopular.map((popular, index) => (
            <div
              key={popular.id}
              className={` bg-white md:w-100 w-95 flex flex-col md:pb-6 pb-8 gap-7 md:gap-5  font-serif ${index >= 3 ? "hidden md:flex" : ""}`}
            >
              <img src={popular.image} alt={popular.name} />
              <div className="px-6 flex flex-col gap-3">
                <div className="flex flex-col gap-2.5">
                  <h2 className="text-2xl">{popular.name}</h2>
                  <p className="text-[14px] font-mono">{popular.description}</p>
                </div>
                <div className="flex items-center justify-between relative">
                  <p className="text-[rgba(255,122,24,1)]">{popular.price}</p>
                  <button className="bg-[rgba(255,122,24,1)] rounded-full w-6 h-6 cursor-pointer font-extrabold text-white font-mono">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="md:hidden text-[rgba(30,136,229,1)] mt-3.5 text-2xl">
            View All Categories
          </button>
        </div>
      </div>
    </main>
  );
}

export default ExplorePopular;
