function SearchBox() {
  return (
    <div className="flex items-center justify-center -mt-7.5 absolute md:px-90 px-5">
      <div className="relative flex items-center justify-center">
        <img
          src="/Search-icon.svg"
          alt="Search-icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-70"
        />
        <input
          type="name"
          placeholder="What are you craving for today?"
          className="bg-white px-12 md:w-4xl w-92 outline-0 h-12 rounded-[15px] placeholder:text-[16px] placeholder:font-bold placeholder:text-gray-600"
        />
      </div>
    </div>
  );
}

export default SearchBox;
