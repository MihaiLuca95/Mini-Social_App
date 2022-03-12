import User from "./components/user/User";
import Carousel from "./components/carousel/Carousel";

const App = () => (
  <div className="App">
      <User 
        userData = {{
          avatar: "/images/avatar_1.png",
          nickname: "John Biden",
          lastOnline: "05-02-2022 18:00:00"
        }} 
        viewMode = "compact"
      />
      <Carousel 
        usersImg = {[
          "/images/avatar_1.png",
          "/images/avatar_2.png",
          "/images/avatar_3.png",
          "/images/avatar_4.png",
          "/images/avatar_5.png",
          "/images/avatar_6.png",
          "/images/avatar_7.png"
        ]}
      />
  </div>
);

export default App;
