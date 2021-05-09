

function Contact() {
    return(
        <section className="contact container-fluid text-white">
            <p className="contactP">
                <h2>Je vous ai fait bonne impression ?</h2>
            </p>
            <div className="boxcontact">            
                <div className="contentcontact">                    
                    <h3>Vous pouvez me contacter</h3>
                    <button>
                        <span>
                            <span>                        
                                <a className="lienscontact" data-attr-a="Par mail" 
                                    href="mailto:email@example.com, thomaspanier.pro@gmail.com">
                                    <span data-attr-span="Par mail">Par mail</span>
                                </a>                            
                            </span>
                        </span>
                    </button>
                </div>
            </div>        
        </section>
    );
}

export default Contact;