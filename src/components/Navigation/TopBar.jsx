import logoLoompa from "assets/logo-loompa.png"


const TopBar = () =>{
    return(<div className="topBar">

        <div className="titleContainer"> 
        <img title="logoLoompa" className="loompaImg" alt="" src={logoLoompa} /> Oompa Loompa's Crew
        </div>
    </div>)
}

export default TopBar