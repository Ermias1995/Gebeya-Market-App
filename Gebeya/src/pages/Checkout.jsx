function Checkout() {
  return (
    <div>
      <div className=" flex flex-col p-4">
        <h1 className='font-semibold text-2xl my-4'>Shipping Address</h1>
        <h1 className="font-semibold text-lg">Name</h1>
        <input type="text" placeholder="First & Last Name" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
        <h1 className="font-semibold text-lg mt-3">Address 1</h1>
        <input type="text" placeholder="5kilo Addis Ababa, Ethiopia" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
        <h1 className="font-semibold text-lg mt-3">Address 2</h1>
        <input type="text" placeholder="Addis Ababa University" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
      </div>
      <div className="">

      </div>
    </div>
  )
}
export default Checkout