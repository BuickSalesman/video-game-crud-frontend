export function GamesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateGame(props.game.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyGame(props.game);
  };

  return (
    <div className="bg-gray-900 text-gray-300 p-4">
      <h1 className="text-xl font-bold text-blue-500 mb-3"> Information</h1>
      <div className="mb-4">
        <p>Title: {props.game.title}</p>
        <p>Image: {props.game.image}</p>
        <p>Description: {props.game.description}</p>
        <p>Release Date: {props.game.release_date}</p>
        <p>Platform: {props.game.platform}</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-2 mb-3">
        <label className="block">
          Title: <input defaultValue={props.game.title} name="title" type="text" className="bg-gray-800 p-1 rounded" />
        </label>
        <label className="block">
          Image: <input defaultValue={props.game.image} name="image" type="text" className="bg-gray-800 p-1 rounded" />
        </label>
        <label className="block">
          Description:{" "}
          <input
            defaultValue={props.game.description}
            name="description"
            type="text"
            className="bg-gray-800 p-1 rounded"
          />
        </label>
        <label className="block">
          Release Date:{" "}
          <input
            defaultValue={props.game.release_date}
            name="release_date"
            type="date"
            className="bg-gray-800 p-1 rounded"
          />
        </label>
        <label className="block">
          Platform:{" "}
          <input defaultValue={props.game.platform} name="platform" type="text" className="bg-gray-800 p-1 rounded" />
        </label>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Update game
        </button>
      </form>
      <button onClick={handleClick} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Destroy game
      </button>
    </div>
  );
}
