const Contact = () => {
  return (
    <div className="text-center pt-10">
      <h2 className="text-3xl font-bold font-mono">Contact Us</h2>
      <div>
        <form className="mt-10" onSubmit={(e)=>e.preventDefault()}>
            <div>
         
            <label>Name :</label>
          <input type="text" placeholder="Name" className="border border-black p-2 m-2 rounded-lg" />

          <label className="text-red-600 font-semibold">error..</label> <br />
         

          <label>Mobile no :</label>
          <input type="text" placeholder="Mobile No" className="border border-black p-2 m-2 rounded-lg" />
          <label className="text-red-600 font-semibold">error..</label> <br />

           
            <label>Email id :</label>
          <input type="text" placeholder="Email id" className="border border-black p-2 m-2 rounded-lg" />
          <label className="text-red-600 font-semibold">error..</label> <br />



   
         <label className="text-center">Your Message :</label>
         <input type="text"  placeholder="Your Message Here..." className="border border-black p-2 m-2 rounded-lg" />
    
            </div>
            <button className="bg-gray-700 text-white p-2 px-7 font-mono m-2 rounded-lg mt-10">Send</button>

          
          
        </form>
      </div>
    </div>
  );
};
export default Contact;
