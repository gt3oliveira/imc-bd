import Calculadora from "./Calculadora";

export default function View(props) {

    return (   
        <div className="view container-fluid">            
            {props.children}     
        </div>          
    )
}