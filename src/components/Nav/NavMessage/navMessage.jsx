import "./navMessage";

const NavMessage = () => {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-chat-left-text"></i>
        <span className="badge bg-primary badge-number">3</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
        <li className="dropdown-header">
          You have 3 new messages
          <a href="#">
            <span className="badge rounded-pill bg-primary p-2 ms-2">
              View all
            </span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <div>
            <h4>SDP group</h4>
            <p>Quae dolorem earum veritatis oditseno..etc</p>
            <p>30 mins ago</p>
          </div>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li className="message-item">
          <div>
            <h4>Mobile group</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 mins ago</p>
          </div>
        </li>
      </ul>
    </li>
  );
};
export default NavMessage;
