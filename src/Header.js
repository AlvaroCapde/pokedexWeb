import { Link } from "react-router-dom";


export default function Header(){
    return(
    <div className="bg-red-500 flex justify-evenly items-center">
    <h1 className="text-white text-4xl p-2 ml-4 font-extrabold rounded-lg shadow-lg">PokeDex</h1>
    <Link to={"/"}>
    <div className="p-2 text-red-500 font-bold bg-white rounded-lg border border-white hover:bg-red-500 hover:text-white">
        Go back to pokedex
    </div>
    </Link>
    </div>
);

}