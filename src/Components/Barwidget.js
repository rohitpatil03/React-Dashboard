import {IoLogoGameControllerA} from 'react-icons/io'

const Barwidget = ()=>{
    return(
        <>
            <h3><IoLogoGameControllerA /> Status Control</h3>
            <br />
            <Fillwidget color={"red"} width={"40%"} title={"Cash Flow"}/>
            <br />
            <Fillwidget color={"orange"} width={"60%"} title={"Pensions Pending"}/>
            <br />
            <Fillwidget color={"blue"} width={"80%"} title={"Employee Need"}/>
        </>
    );

}

const Fillwidget = ({ color, width, title }) =>{
    console.log(color)
    return(
        <div className="barwidget">
            
            <div className="fillwidget"  style={{backgroundColor: color, width: width}}>
                
            </div>
            <p className="test"><span  className="namefillwidget">{title}</span><span className="widthfillwidget">{width}</span></p>
        </div>
    );
}

export default Barwidget;