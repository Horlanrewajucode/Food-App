function AsideScreen() {
  return (
    <div className="relative w-[40%] h-screen hidden md:block">
      {/* Background Image */}
      <img
        src="/aside-image.png"
        alt="Chuks Kitchen"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-orange-500 opacity-60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Chuks Kitchen</h1>
        <p className="text-base max-w-xs">
          Your journey to delicious, authentic Nigerian meals starts here. Sign
          up or log in to order your favorites today!
        </p>
      </div>
    </div>
  );
}

export default AsideScreen;
