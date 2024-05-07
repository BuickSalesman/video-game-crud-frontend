export function GamesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateGame(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Game</h1>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input title="title" type="string" />
        </div>
        <div>
          Image: <input name="image" type="string" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Release Date: <input name="release_date" type="date" />
        </div>
        <div>
          Platform: <input name="platform" type="string" />
        </div>
        <button type="submit">Create game</button>
      </form>
    </div>
  );
}
