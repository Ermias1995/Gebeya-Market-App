function Checkout() {
  return (
    <div className="flex">
      <div className=" flex flex-col p-4">
        <h1 className='font-semibold text-2xl my-4'>Shipping Address</h1>
        <h1 className="font-semibold text-lg">Name</h1>
        <input type="text" placeholder="First & Last Name" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
        <h1 className="font-semibold text-lg mt-3">Address 1</h1>
        <input type="text" placeholder="5kilo Addis Ababa, Ethiopia" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
        <h1 className="font-semibold text-lg mt-3">Address 2</h1>
        <input type="text" placeholder="Addis Ababa University" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
        <div className=" flex flex-row items-center gap-4">
          <div className="">
            <h1 className="font-semibold text-lg mt-3">City</h1>
            <input type="text" placeholder="Enter City" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          </div>
          <div className="">
            <h1 className="font-semibold text-lg mt-3">State</h1>
            <select name="State" className="border border-[#C1C1C1] rounded-lg h-14 p-3">
              <option value="">Select State</option>
              <option value="">Addis Ababa</option>
              <option value="">Bahir Dar</option>
              <option value="">Mekelle</option>
              <option value="">Hawassa</option>
              <option value="">Dire Dawa</option>
            </select>
          </div>
          <div className="">
            <h1 className="font-semibold text-lg mt-3">Zip</h1>
            <input type="text" placeholder="Zip code" className="border border-[#C1C1C1] rounded-lg h-14 p-2"/>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold text-2xl my-4">Order Summery</h1>
      </div>
    </div>
  )
}
export default Checkout