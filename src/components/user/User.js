// Main User Module
// FUNCTIONAL COMPONENTS

// User Component:
//  * user data
//  * view modes: compact, datailed
const User = ({userData: {avatar, nickname, lastOnline}, viewMode}) => {

    return (
        <div className="User">
            {(viewMode === 'compact')
                ? ( <div>
                        <img src={avatar} alt="avatar" style={{width: "80px"}} /> 
                    </div>)
                : ( <div> 
                        <img src={avatar} alt="avatar" />
                        <h2>{nickname}</h2>
                        <p>{lastOnline}</p>
                    </div>
                ) 
            }  
        </div>
    );
}

export default User;

