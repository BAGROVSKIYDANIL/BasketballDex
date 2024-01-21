import PageSignIn from "./pages/PageSignIn";
import PageSignUp from "./pages/PageSignUp";
import Teams from "./pages/TeamsCard";
import PageTeamEmpty from "./pages/PageTeamEmpty";
import TeamAdd from "./pages/TeamAdd";
import TeamDetail from "./pages/TeamDetail";
import PlayersCard from "./pages/PlayersCard";
import PagePlayersEmpty from "./pages/PagePlayersEmpty";
import PagePlayersAdd from "./pages/PagePlayersAdd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/router/PrivateRoute";
import PagePlayersDetails from "./pages/PagePlayersDetails";
import { Layout } from "./common/components/ui/layout/layout";


function App() {

  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<PageSignIn/>}/>
        <Route path="/SignUp" element={<PageSignUp/>}/>
        <Route element={<PrivateRoute/>}>
            <Route path="/PageEmptyTeam" element={<PageTeamEmpty/>}/>
            <Route path="/PageTeamAdd" element={<TeamAdd/>}/>
            <Route path="/PageEmptyPlayer" element={<PagePlayersEmpty/>}/>
            <Route path="/PagePlayerAdd" element={<PagePlayersAdd/>}/>
            <Route path="/PageTeamCard" element={<Teams/>}/>
            <Route path="PagePlayerCard" element={<PlayersCard/>}/>
            <Route path="/TeamDetail/:id" element={<TeamDetail/>}/>
            <Route path="/PlayersDetail/:name" element={<PagePlayersDetails/>}/>
        </Route>
      </Routes>
      </Router>
    </>
  )
}

export default App;

