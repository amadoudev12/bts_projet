
import React  from "react";
import { Link } from "react-router-dom";
import AppRoutes from "./routes";
function App() {


  return (
    <>
      <nav>
        <Link to="/etudiant/add">Ajouter un etudiant</Link>
        <Link to="/etudiants">Voir la liste des etudiants</Link>
      </nav>
      <AppRoutes/>
    </>
  )
}

export default App
