import categories from "../data/categories.json";

function PopularCategories() {
  return (
    <section className="bg-[rgba(243,244,246,1)] flex items-center flex-col justify-center">
      <div className="mt-20 text-center gap-10 flex flex-col items-center ">
        <h2 className="font-bold text-3xl">Popular Categories</h2>
        <div className="md:grid md:grid-cols-3 md:gap-20 md:mt-6 flex flex-col gap-12 ">
          {categories.map((category, index) => (
            <div
              className={`bg-white flex flex-col items-center md:pb-15 md:gap-14 pb-4 gap-4 ${index >= 3 ? "hidden md:flex" : ""}`}
              key={category.id}
            >
              <img src={category.image} alt={category.title}/>
              <p className="font-semibold font-serif">{category.title}</p>
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

export default PopularCategories;
