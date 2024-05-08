export function GamesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };

  return (
    <div className="bg-gray-900 text-gray-300 p-4">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">New Game</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          Title:{" "}
          <input name="title" type="text" className="bg-gray-800 text-white p-2 rounded border border-gray-700" />
        </div>
        <div>
          Image:{" "}
          <input name="image" type="text" className="bg-gray-800 text-white p-2 rounded border border-gray-700" />
        </div>
        <div>
          Description:{" "}
          <input name="description" type="text" className="bg-gray-800 text-white p-2 rounded border border-gray-700" />
        </div>
        <div>
          Release Date:{" "}
          <input
            name="release_date"
            type="date"
            className="bg-gray-800 text-white p-2 rounded border border-gray-700"
          />
        </div>
        <div>
          Platform:{" "}
          <input name="platform" type="text" className="bg-gray-800 text-white p-2 rounded border border-gray-700" />
        </div>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create game
        </button>
      </form>
    </div>
  );
}
