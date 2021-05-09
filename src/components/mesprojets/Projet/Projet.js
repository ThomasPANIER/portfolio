

function Elements(props) {
    return(
        <div className="col-12 col-sm-6 col-md-4">
            <div className="containerproject">
                <div className="background-img">
                    <div className="box">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="content">
                            <p className="p_liens">
                                <a
                                    className="liens"
                                    href={'https://thomaspanier.github.io/'+props.content}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    {props.content}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Elements;