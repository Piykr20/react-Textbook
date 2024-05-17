import React from 'react';

function Alert(props) {
    //yeah success ka s ko capital krene ke liye 
    const capitalize= (word)=>{
        const lower = word.toLowerCase()
       return lower.charAt(0).toUpperCase()+lower.slice(1); 
    }
    return (
        // props.alert agar null hoga toh aage ka code work ni krega aur agr wo null ni hoga toh aage ka code run krega
        props.alert && <div className="alert alert-success" role="alert">
           <strong>{capitalize(props.alert.type)}: {props.alert.msg}</strong>
        </div>
    );
}

export default Alert;
