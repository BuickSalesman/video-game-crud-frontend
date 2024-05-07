export function GamesIndex(props) {
  return (
    <div>
      <h1>All games</h1>
      {props.games.map((game) => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <img src={game.image} />
          <p>Description: {game.description}</p>
          <p>Release date: {game.release_date}</p>
          <p>Platform: {game.platform}</p>
          <button onClick={() => props.onShowGame(game)}>More info</button>
        </div>
      ))}
    </div>
  );
}
