import { MdArrowOutward } from "react-icons/md";
import AnimateBtn from "./AnimateBtn";

const ReserveBtn = () => {
    return (
        <div className="fixed right-6 top-6 md:top-[2vw] z-49 w-[100px] md:w-[8.5vw] bg-[#f4efe7] px-2 py-1 flex justify-between items-center rounded-full gap-2 shadow-sm">
            <AnimateBtn btnName="Reserve"/>
            <MdArrowOutward className="bg-[#2a2725] text-[#b3a694] w-6 h-6 md:w-[2.2vw] md:h-[2.2vw] flex-shrink-0 rounded-full p-1" />
        </div>
    )
}

export default ReserveBtn;