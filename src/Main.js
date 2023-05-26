import Side from "./Side/Side";
import Mainarea from "./Mainarea/Mainarea";

const Main = () =>{
    return(
        <>
            <div style={{display:"flex"}}>
            <div style={{flex:"2"}} >
            <Side/>
            </div>
            <div style={{flex:"6"}} >
            <Mainarea/>
            </div>
            </div>
        </>
    )
}

export default Main;