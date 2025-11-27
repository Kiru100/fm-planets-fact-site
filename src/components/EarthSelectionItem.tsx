import { MdArrowForwardIos } from "react-icons/md";

type PlanetSelectionItemProps = {
    planet_color: string;
    name: string;
};

export const PlanetSelectionItem = ({
    planet_color,
    name
}: PlanetSelectionItemProps) => {

    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: planet_color }}></div>
                <p className="ml-6 text-white var(--font-spartan) text-[25px] leading-[1.5625rem] font-bold">{name}</p>
            </div>
            <div><MdArrowForwardIos height={8} width={4}/></div>
        </div>
    )
};