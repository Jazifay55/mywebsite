import Header from "../../components/Header/header";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./home.css"



export default function Home() {
  return <div className="Home">
    <>
      <Topbar/>
      <Header/>
      <Sidebar/>
      <div className="homeIntro">     
      </div>
    </>
  </div>;
}
