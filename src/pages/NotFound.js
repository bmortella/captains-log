import notfoundimg from "../img/captains-log.png";

function NotFound() {
  return (
    <div>
      <h1>404 Not found</h1>
      <img className="pics" src={notfoundimg}></img>
    </div>
  );
}

export default NotFound;
