import { FaUser } from "react-icons/fa";
import { users } from "./data";

const Userwidget = () =>{
    return(
        <>
            <h3><FaUser/>  Users</h3>
            <UserPlacer id={<h4>Id</h4>} name={<h4>Username</h4>} email={<h4>EmailId</h4>} status={<h4>Status</h4>}/>
            {users.map((user)=>{
                const {id, name, email, status} = user;
                return(
                    <UserPlacer key={id} id={id} name={name} email={email} status={status}/>
                );
            })}
            
        </>
    );
}

const UserPlacer = ({id, name, email, status}) => {
    let color = "#CDCCFF";
    if(status=="Active"){
        color = "#CCFFCD";
    }
    else if(status=="Running"){
        color = "#FFEFCC";
    }
    else if(status=="Removed"){
        color = "#FFCCCB";
    }
    return (
        <div className="userwidget">
            {/* <div className="inneruserwidget">{id}</div> */}
            <div className="inneruserwidget">{name}</div>
            {/* <div className="inneruserwidget">{email}</div> */}
            <div className="inneroutuserwidget" style={{backgroundColor : color}}>{status}</div>
        </div>
    );
}

export default Userwidget;