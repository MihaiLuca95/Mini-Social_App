import User from "./components/UI/User";
import {User as UserModel} from "./components/model/User";
// import {getUser} from "./components/model/User";
// import Carousel from "./components/carousel/Carousel";
import {useEffect, useState} from 'react';

const App = () => {

  let [user, setUser] = useState(null); 
  
  useEffect(() => {
    // UserModel.get((userObject) => {
    //   setUser(userObject) 
    //   console.log(user);
    // })
    UserModel.get().then(data => {
      let userObject = new UserModel(data.nickname, data.avatar, data.lastOnline)
      setUser(userObject) 
    })
  }, [])

  return (
    <div className="App">
        <User 
          userObject = {user} 
          viewMode = "compact"
        />
        {/* <Carousel 
          usersImg = {[
            "/images/avatar_1.png",
            "/images/avatar_2.png",
            "/images/avatar_3.png",
            "/images/avatar_4.png",
            "/images/avatar_5.png",
            "/images/avatar_6.png",
            "/images/avatar_7.png"
          ]}
        /> */}
    </div>
  );
}

export default App;
