
import React from 'react';

class Allbreack extends React.Component  {

    casser1 = () => {
        var elements = document.querySelectorAll('body,header,div,section,main,div,button,p,span,img,a,Link');
        for(var i = 0; i < elements.length; i++){
        elements[i].style['transform'] = 
        'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';} 
    }
    
    casser2 = () => {
        document.body.style['transition'] = 'transform 3s';
        document.body.style['transform'] = 'rotate(180deg)';
    }
    
    render() {
        return(
            <section className="row">
                <p className="breackP fs-4 mt-5">
                    Je vous ai fait mauvaise impression ?
                </p>
                <p className="p-4">
                    Vous pouvez utiliser un de ces boutons ou les deux pour vous défouler et
                     casser ce qui n'est pas de votre goût.
                </p>
                <div className="breack col-12 col-sm-6 py-3">
                    <button className="breackB" onClick={this.casser1}>Pour tout casser</button>
                </div>
                <div className="breack col-12 col-sm-6 py-3">
                    <button className="breackB" onClick={this.casser2}>Tout retourner</button>
                </div>
            </section>
        );    
    }
}

export default Allbreack;