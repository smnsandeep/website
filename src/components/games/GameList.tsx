"use client";
import Link from "next/link";
import Image from "next/image";

type Game = {
  id: number;
  name: string;
  thumbnail: string;
  path: string;
};

type GamesListProps = {
  games: Game[];
};

const GamesList: React.FC<GamesListProps> = ({ games }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {games.map((game) => (
      <Link key={game.id} href={game.path}>
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <Image
            src={game.thumbnail}
            alt={game.name}
            width={200}
            height={200}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-bold">
            {game.name}
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default GamesList;
