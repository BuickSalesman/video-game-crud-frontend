export function GamesIndex(props) {
  return (
    <div className="bg-gray-900 text-gray-300 min-h-screen p-5">
      <h1 className="text-4xl font-bold text-blue-400 mb-5">All games</h1>
      {props.games.map((game) => (
        <div key={game.id} className="mb-10 p-5 border border-gray-700 rounded-lg">
          <h2 className="text-3xl text-white mb-3">{game.title}</h2>
          <img src={game.image} className="w-full mb-3 rounded-lg shadow-lg" />
          <p className="mb-1">Description: {game.description}</p>
          <p className="mb-1">Release date: {game.release_date}</p>
          <p className="mb-3">Platform: {game.platform}</p>
          <button
            onClick={() => props.onShowGame(game)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            More info
          </button>
        </div>
      ))}
    </div>
  );
}
