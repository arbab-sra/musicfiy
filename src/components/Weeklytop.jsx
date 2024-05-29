
import { IoMusicalNotesOutline } from "react-icons/io5";
const Weeklytop = () => {
  return (
    <div className="">
        <div>
            <h2 className="w-[265px] h-[50px] text-white font-serif text-3xl text-center p-2 bg-gray-500 ">Weekly Top <span className="text-[#EE10B0]">Songs</span></h2>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-[180px] p-2 flex flex-col justify-center items-center h-[220px] bg-red-600">
                <div className="w-[150px] h-[150px] bg-black"></div>
                <div className="songtitle mr-5 w-[128px] h-[25px] mt-[6px] mb-[6px] bg-indigo-700"> <h4 className="text-start text-white capitalize"> whatever it takes</h4></div>
                <div className="flex justify-center gap-[70px] items-center">
                    <div className="capitalize w[88] h-[19px] ">Adle</div>
                    <div className=""><IoMusicalNotesOutline/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weeklytop