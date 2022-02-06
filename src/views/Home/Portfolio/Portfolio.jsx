import Posts from "../../../components/Posts/Posts";
import Topbar from "../../../components/Topbar/Topbar";
import "./portfolio.css"

export default function Portfolio() {
  return <div className='portfolio'>
    <Topbar/>
       <style>{'body { background-color: rgb(152, 152, 212); }'}</style>
     <div className="heading">
     <title className="headerTitleTab">My Portfolio!</title>
     <span className="headerTitle"> Welcome to my Portfolio!</span>
     </div>
     <div className="portPosts"></div>
     <Posts/>
  </div>;
}
