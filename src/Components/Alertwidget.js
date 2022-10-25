import {GoAlert} from 'react-icons/go'

const Alertwidget = () => {
    return(
        <>
            <h3><GoAlert /> Alert</h3>
            <br />
            <Subalertwidget backgroundcolor={"#CCFFCD"} width={"100%"} color={"green"} title={"Success : Excuted Successfully"}/>
            <br />
            <Subalertwidget backgroundcolor={"#FFCCCB"} width={"100%"} color={"red"} title={"Danger : Please check the Problem"}/>
            <br />
            <Subalertwidget backgroundcolor={"#FFEFCC"} width={"100%"} color={"orange"} title={"Warning : Indicates minor issues"}/>
            <br />
            <Subalertwidget backgroundcolor={"#CDCCFF"} width={"100%"} color={"blue"} title={"Info : Gives infomation"}/>
        </>
    );
}

const Subalertwidget = ({ backgroundcolor, width, title, color }) =>{
    console.log(color)
    return(
        <div className="subalertwidget">
            
            <div className="fillwidget"  style={{backgroundColor: backgroundcolor, width: width}}>
                
            </div>
            <p className="test" style={{ color:color,  padding:"10px"}}><span >{title}</span></p>
        </div>
    );
}

export default Alertwidget;