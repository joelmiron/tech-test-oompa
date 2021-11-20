import logoLoompa from "assets/img/logo-loompa.png"
import { useHistory } from "react-router"


const TopBar = () =>{
    const history = useHistory();
    console.log(history);

const navigation = () =>{
    history.push("/")
}


    return(<div className="topBar">

        <div className="titleContainer"> 
        <img title="logoLoompa" className="loompaImg" alt="" src={logoLoompa} onClick={navigation}/> Oompa Loompa's Crew
        </div>
    </div>)
}

export default TopBar