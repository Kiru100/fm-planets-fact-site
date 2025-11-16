import { EarthSelectionItem } from "./EarthSelectionItem";

const planet_list = [
    {
        planet_color: "light-blue",
        name: "Mercury"
    },
    {
        planet_color: "#F7CC7F",
        name: "Venus"
    },
    {
        planet_color: "green",
        name: "Earth"
    },
    {
        planet_color: "red",
        name: "Mars"
    },
    {
        planet_color: "yellow",
        name: "Jupiter"
    },
    {
        planet_color: "orange",
        name: "Saturn"
    },
    {
        planet_color: "purple",
        name: "Uranus"
    },
    {
        planet_color: "blue",
        name: "Neptune"
    }
];

export const NavBar = () => {
	return (
		<nav className="flex flex-row justify-between mx-6 my-4">
            <ul className="w-full">
                {planet_list.map((planet) => (
                    <li className="w-full my-5">
                        <EarthSelectionItem planet_color={planet.planet_color} name={planet.name} />
                    </li>
                ))}
            </ul>
		</nav>
	)
}