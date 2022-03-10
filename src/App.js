import User from "./components/user/User";

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
  </div>
);

export default App;
