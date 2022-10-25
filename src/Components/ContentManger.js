import Barwidget from "./Barwidget";
import Userwidget from "./Userwidget";
import Alertwidget from "./Alertwidget";
import Highlightwidget from "./Highlightwidget";

const ContentManger = () => {
    return(
        
        <div className="content-manger">
            <div className="widget">
                <Userwidget />
            </div>
            <div className="widget">
                <Alertwidget/>
            </div>
            <div className="widget">
                <Barwidget />
            </div>
            <div className="widget">
                <Highlightwidget />
            </div>
        </div>
        
    );
}

export default ContentManger;