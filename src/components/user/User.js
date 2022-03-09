const User = ({userData: {avatar, nickname, lastOnline}, viewMode, changeViewMode}) => {
    return (
        <div className="User">
            {(viewMode === 'compact')
                ? ( <div>
                        <img src={avatar} alt="avatar" style={{width: "80px"}} /> 
                        <button onClick={ () => { changeViewMode("detailed") }}>Show more</button>
                    </div>)
                : ( <div> 
                        <img src={avatar} alt="avatar" width="200px" />
                        <h2>{nickname}</h2>
                        <p>{lastOnline}</p>
                        <button onClick={ () => { changeViewMode("compact") }}>Show less</button>
                    </div>
                ) 
            }
        </div>
    );
}

export default User;

