import { useState } from "react";

const User = ({ userData: { avatar, nickname, lastOnline }, viewMode }) => {
  const [chViewMode, setChViewMode] = useState(viewMode);

  return (
    <div className="User">
      {chViewMode === "compact" ? (
        <div>
          <img src={avatar} alt="avatar" style={{ width: "80px" }} />
          <button
            onClick={() => {
              setChViewMode("detailed");
            }}
          >
            Show more
          </button>
        </div>
      ) : (
        <div>
          <img src={avatar} alt="avatar" width="200px" />
          <h2>{nickname}</h2>
          <p>{lastOnline}</p>
          <button
            onClick={() => {
              setChViewMode("compact");
            }}
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
