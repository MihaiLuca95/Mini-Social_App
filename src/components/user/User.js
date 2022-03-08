const User = ({userData: {avatar, nickname, lastOnline}, viewMode, children}) => {

    return (
        <div className="User">
            {(viewMode === 'compact')
                ? ( <div>
                        <img src={avatar} alt="avatar" style={{width: "80px"}} /> 
                        {children}
                    </div>)
                : ( <div> 
                        <img src={avatar} alt="avatar" width="200px" />
                        <h2>{nickname}</h2>
                        <p>{lastOnline}</p>
                        {children}
                    </div>
                ) 
            }
        </div>
    );
}

export default User;

