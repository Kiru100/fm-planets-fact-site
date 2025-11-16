import { Menu } from "./Menu";

export const Headers = () => {
	return (
		<header className="flex flex-row justify-between mx-6 my-4">
			<h1 className="m-0">The Planets</h1>
            <Menu/>
		</header>
	)
}