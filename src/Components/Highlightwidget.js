import {FaPhoneAlt, FaEnvelope, FaHistory, FaInfoCircle} from 'react-icons/fa';
import {HiBellAlert} from 'react-icons/hi2'

const Highlightwidget = () =>{
    return(
        <>
            <div>
                <h3><HiBellAlert />  HighLights</h3>
                <br />
                <p style={{fontSize:"20px"}}><span><FaPhoneAlt /></span> <span style={{margin:"25px"}}>Missed Calls</span> <span style={{height:"25px", color:"white", backgroundColor:"red", padding:"10px", borderRadius:"10px"}}>5</span> </p>
                <br />
                <p style={{fontSize:"20px"}}><span><FaEnvelope /></span> <span style={{margin:"25px"}}>Messages</span> <span style={{height:"25px", color:"white", backgroundColor:"orange", padding:"10px", borderRadius:"10px"}}>30+</span> </p>
                <br />
                <p style={{fontSize:"20px"}}><span><FaHistory /></span> <span style={{margin:"25px"}}>History</span> </p>
                <br />
                <p style={{fontSize:"20px"}}><span><FaInfoCircle /></span> <span style={{margin:"25px"}}>Info</span> </p>
            </div>
        </>
    );
}

export default Highlightwidget;