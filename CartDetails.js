import { MdDelete } from 'react-icons/md';


const CartDetails = ({ items }) => {

  console.log(items);
  return (
    <div className='flex '>
        <div className="shadow-lg ">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-400 text-left flex justify-between "
        >
          {/* <img src={CARD_IMAGE_CDN_URL+ item.card.info.imageId} className="w-14"/> */}
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span> <br />
              <span> ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>

          {item?.card?.info?.imageId && (
            <div className="w-3/12 ">
             

              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_190,h_130/" +
                  item?.card?.info?.imageId
                }
                className="w-full rounded-md"
                alt="img"
              />
            </div>
          )}

            <div className="">
                <button
                  className="p-2 ml-5 mt-8 bg-black text-white shadow-lg rounded-lg"
                >
                 <MdDelete/>
                </button>
              </div>
        </div>
        
      ))}
      
        </div>
        <div className='h-[380px] w-[340px] bg-[#D5CEA3] absolute right-0 '>
            <h3 className='font-semibold text-lg font-mono mt-3'>Calculating Your Bills...</h3>
            {items.map((item)=>
            <p className='my-5 flex justify-evenly font-mono'><span>Item Total</span><span>{item.card.info.price / 100 || item.card.info.defaultPrice / 100}₹</span></p>

            
            
            )}
            <p className='my-5 flex justify-evenly font-mono'><span>Delivery Fee</span><span>30₹</span></p>
            
            <div className="border-b-2 border-black mt-40"></div>
            <h2 className='flex justify-evenly mt-3 font-bold font-mono'> <span className=''>TO PAY</span> <span>1000₹</span> </h2>
        </div>
    </div>
  );
};
export default CartDetails;
