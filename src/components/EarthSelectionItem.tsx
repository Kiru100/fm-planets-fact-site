import { MdArrowForwardIos } from "react-icons/md";
import clsx from "clsx";

type EarthSelectionItemProps = {
    planet_color: string;
    name: string;
};

export const EarthSelectionItem = ({
    planet_color,
    name
}: EarthSelectionItemProps) => {

    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
                <div 
                    className={clsx(`w-5 h-5 rounded-full`, `bg-${planet_color}`)}
                ></div>
                <p className="ml-6 text-white var(--font-spartan) text-[25px] leading-[1.5625rem] font-bold">{name}</p>
            </div>
            <div><MdArrowForwardIos height={8} width={4}/></div>
        </div>
    )
};