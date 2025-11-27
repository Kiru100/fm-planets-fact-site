import type { PlanetType } from "../types/planet.type";
import { PlanetSelectionItem } from "./EarthSelectionItem";

const planet_list: PlanetType[] = [
    {
        planet_color: "var(--color-light-blue)",
        name: "Mercury"
    },
    {
        planet_color: "#F7CC7F",
        name: "Venus"
    },
    {
        planet_color: "var(--color-teal)",
        name: "Earth"
    },
    {
        planet_color: "var(--color-red)",
        name: "Mars"
    },
    {
        planet_color: "var(--color-gold)",
        name: "Jupiter"
    },
    {
        planet_color: "var(--color-orange)",
        name: "Saturn"
    },
    {
        planet_color: "var(--color-purple)",
        name: "Uranus"
    },
    {
        planet_color: "#497EFA",
        name: "Neptune"
    }
];

export const NavBar = () => {
	return (
		<nav className="flex flex-row justify-between mx-6 my-4">
            <ul className="w-full">
                {planet_list.map((planet: PlanetType) => (
                    <li className="w-full my-5">
                        <PlanetSelectionItem planet_color={planet.planet_color} name={planet.name} />
                    </li>
                ))}
            </ul>
		</nav>
	)
}