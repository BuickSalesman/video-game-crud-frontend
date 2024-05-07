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
    <div>
      <h1>Photo information</h1>
      <p>Title: {props.game.title}</p>
      <p>Image: {props.game.image}</p>
      <p>Description: {props.game.description}</p>
      <p>Release Date: {props.game.release_date}</p>
      <p>Platform: {props.game.platform}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.game.title} name="title" type="string" />
        </div>
        <div>
          Image: <input defaultValue={props.game.image} name="image" type="string" />
        </div>
        <div>
          Description: <input defaultValue={props.game.description} name="description" type="text" />
        </div>
        <div>
          Release Date: <input defaultValue={props.game.release_date} name="release_date" type="date" />
        </div>
        <div>
          Platform: <input defaultValue={props.game.platform} name="platform" type="string" />
        </div>
        <button type="submit">Update game</button>
      </form>
      <button onClick={handleClick}>Destroy game</button>
    </div>
  );
}
