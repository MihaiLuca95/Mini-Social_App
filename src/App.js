import User from "./components/user/User";
import {useState} from 'react';

const App = () => {

const [viewMode, setViewMode] = useState("compact");
// const changeViewMode = () => {
//   if(view === "compact") setView("detailed");
//   if(view === "detailed") setView("compact");
// }


return (
  <div className="App">
      <User 
        userData = {{
          avatar: "/images/avatar_1.png",
          nickname: "John Biden",
          lastOnline: "05-02-2022 18:00:00"
        }} 
        viewMode = {viewMode}
        changeViewMode = {setViewMode}
      />
  </div>
);
}

export default App;
