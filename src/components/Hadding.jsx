 
 
 const Hadding = ({name,lastname ,color='#EE10B0'} ) => {
   return (
    <div className="mt-4">
    <h2 className="w-[265px] h-[50px] text-white font-serif text-3xl text-center p-2  ">
      {name} <span className={`text-[${color}]`}>{lastname}</span>
    </h2>
  </div>
   )
 }
 
 export default Hadding