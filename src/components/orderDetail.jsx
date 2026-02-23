import orders from "../data/orders.json";
function Cart() {
  return (
    <main className="md:px-35 md:py-25 px-4 py-15 flex flex-col gap-7 items-start">
      <h2 className="md:text-5xl font-mono font-bold">Your Cart</h2>
      <div className="flex flex-col md:gap-10 gap-5">
        {orders.map((order) => (
          <div className="flex items-center md:gap-10 gap-1  border border-stone-200">
            <img
              src={order.image}
              alt={order.name}
              className="w-25 md:w-30
            "
            />
            <div className="flex flex-col md:flex-row items-center md:gap-40">
              <div className="flex flex-col md:gap-2">
                <h2 className="md:text-3xl font-medium  font-serif">
                  {order.name}
                </h2>
                <p className="md:text-[16px] text-[13px] font-mono">{order.description}</p>
              </div>
              <div className="flex md:gap-60 md:flex-row flex-col gap-5 py-2 px-3">
                <div className="flex items-center justify-between md:justify-center md:gap-15 ">
                  <button className="bg-[rgba(189,189,189,1)] cursor-pointer md:text-[18px] px-1.5 rounded-md md:font-bold">
                    +
                  </button>
                  <h3 className="md:text-4xl md:font-bold">{order.quantity}</h3>
                  <button className="bg-[rgba(189,189,189,1)] cursor-pointer md:text-[18px] px-1.5 rounded-md md:font-bold">
                    -
                  </button>
                </div>
                <div className="flex md:gap-15 md:px-10 items-center gap-45">
                  <p className="text-[rgba(255,122,24,1)] md:text-2xl md:font-bold">{order.price}</p>
                  <button className="md:bg-[rgba(255,122,24,1)] bg-black text-white md:font-bold px-1.5 rounded-md cursor-pointer">X</button>
                </div>
              </div>
            </div>
          </div>
        ))}
              <p>+ Add more items from Chuks Kitchen</p>
      </div>
    </main>
  );
}

export default Cart;
