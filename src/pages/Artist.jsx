import Sidebar from "../components/Sidebar"
import Artistcomponent from "../components/artistcomponets/Artistcomponent"

import Artists from "../components/Artists"
import Joinplatform from "../components/Joinplatform"
const Artist = () => {
  return (
    <div className="flex m-auto h-[3150px]  min-w-[1400px] max-w-[1440px] overflow-x-hidden  bg-gradient-to-tr from-[#412C3A] to-[#533248] ">
    <div className="h-full">
      <Sidebar/>
    </div>

    <div className="ml-auto h-full mr-auto">
      <Artistcomponent/>
      <hr />
      {/* <Artistplylist/> */}
      <hr />
      <Artists firstname="You also " lastname="like"/>
      <hr />
      <Joinplatform />
    </div>
  </div>
  )
}

export default Artist