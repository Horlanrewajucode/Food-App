function MenuCategories() {
  return (
    <div className="flex flex-col gap-3 font-mono bg-[rgba(243,244,246,1)] py-10 md:px-10 px-5">
      <h2 className="md:text-4xl text-2xl">Menu Categories</h2>
      <select
        name="menu"
        id="menu"
        className="w-full outline-0 bg-[rgba(255,225,196,1)] h-12 text-2xl rounded-md px-4 py-2"
      >
        <option value="popular" className="">
          Popular
        </option>
        <option value="jollof-rice">Jollof Rice & Entrees</option>
        <option value="swallow-soups">Swallow & Soups</option>
        <option value="grills-sides">Grills & sides</option>
        <option value="beverage">Beverages</option>
        <option value="desserts">Desserts</option>
      </select>
    </div>
  );
}

export default MenuCategories;
