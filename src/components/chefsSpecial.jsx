import chefsSpecial from "../data/chefsSpecial.json";

function ChefsSpecial() {
  return (
    <section className="bg-[rgba(243,244,246,1)] flex items-center flex-col justify-center ">
      <div className="gap-10 flex flex-col items-center mt-40 ">
        <h2 className="font-bold text-3xl">Chef's Special</h2>
        <div className="md:grid md:grid-cols-3 md:gap-20 md:mt-6 flex flex-col gap-12">
          {chefsSpecial.map((special, index) => (
            <div
              className={`w-100 flex flex-col bg-white md:pb-10 pb-12 gap-3 md:gap-5 font-serif ${index >= 3 ? "hidden md:flex" : ""}`}
              key={special.id}
            >
              <img src={special.image} alt={special.title} />
              <div className="px-4 flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                  <p className="text-[22px] font-semibold">{special.title}</p>
                  <p className="text-[16px] w-[90%]">{special.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[rgba(255,122,24,1)]">{special.price}</p>
                  <button className="bg-[rgba(255,122,24,1)] py-2 px-4 rounded-md text-white font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="md:hidden text-[rgba(30,136,229,1)] -mt-7.5 text-2xl">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
export default ChefsSpecial;
