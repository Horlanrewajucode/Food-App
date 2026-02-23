import jollofRice from "../data/jollofRice.json";

function ExploreJollof() {
  return (
    <section className="bg-[rgba(243,244,246,1)] flex flex-col items-center justify-center">
      <div className="pt-20 flex flex-col items-start gap-10">
        <h2 className="md:text-4xl text-3xl font-serif font-black">
          Jollof Rice & Entrees
        </h2>
        <div className="md:grid md:grid-cols-3 flex flex-col md:gap-16 gap-10">
          {jollofRice.map((jollof) => (
            <div
              key={jollof.id}
              className="md:w-100 flex flex-col gap-6 w-95 md:pb-4 pb-4 bg-white"
            >
              <img src={jollof.image} alt={jollof.name} />
              <div className="flex flex-col gap-4 px-4">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-serif">{jollof.name}</h2>
                  <p className="text-[14px] font-mono">{jollof.description}</p>
                </div>
                <div className="flex items-center justify-between relative">
                  <p className="text-[rgba(255,122,24,1)] font-serif">
                    {jollof.price}
                  </p>
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
    </section>
  );
}

export default ExploreJollof;
