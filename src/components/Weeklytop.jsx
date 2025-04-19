import { Allsong } from "../constext/useContext";
import PropTypes from "prop-types";
import Card from "./Card";
import Hadding from "./Hadding";

import { IoMusicalNotesOutline } from "react-icons/io5";
import { useContext } from "react";

const Weeklytop = ({ secondhadding, firsthadding }) => {
  const { weeklytop } = useContext(Allsong);
  // console.log(weeklytop);
  return (
    <div className=" flex overflow-x-auto w-[100%] mb-7 no-scrollbar">
      <div className="w-full ">
        <Hadding name={firsthadding} lastname={secondhadding} />
        <marquee
          scrollamount="10"
          bhavior="scroll"
          direction="left"
          className="w-full"
        >
          <div className="flex mt-9  mb-9 justify-center items-center w-full  h-[245px]  ">
            {weeklytop.length > 0
              ? weeklytop
                  .sort(() => 0.5 - Math.random())
                  .map((e) => {
                    {
                      return (
                        <Card
                          key={e._id}
                          image={e.themnail}
                          icon={
                            <IoMusicalNotesOutline
                              color="white"
                              size={"15px"}
                            />
                          }
                          title={e.title}
                          artist={e.artist}
                          id={e._id}
                          url={e.url}
                          type={"weeklytopsong"}
                        />
                      );
                    }
                  })
              : "No Data"}
          </div>
        </marquee>
      </div>
    </div>
  );
};

Weeklytop.propTypes = {
  secondhadding: PropTypes.string.isRequired,
  firsthadding: PropTypes.string.isRequired,
};
export default Weeklytop;
