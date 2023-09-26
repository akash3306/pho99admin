import './button.css';

function Button({btntext,btnfnc}){
    return(
        <button onClick={btnfnc}>{btntext}</button>
    );
}

export default Button;