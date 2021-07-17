const Header = ({handleClick}) => {
  return (
    <nav className="navbar navbar-light bg-light">
         <div className="d-flex">
      <div className="container-fluid">
        <span className="navbar-toggler-icon"></span>
      <strong> My Tasks</strong>
      </div>
      </div>
      <button onClick={handleClick}>👨 Logout</button>
    </nav>
  );
};

export default Header;
