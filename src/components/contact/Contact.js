

function Contact() {
    return(
        <section className="contact container-fluid text-white">
            <div className="boxcontact">
                <div className="contentcontact">
                    <h3>Pour me contacter</h3>
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