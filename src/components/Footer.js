import React from 'react';

function Footer() {
    const styles = {
        footer: {
            gridArea: 'footer',
            backgroundColor: 'black',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return (
        <>
            <div className="footer" style={styles.footer}>
                <div className="container mb-0">
                    <div className="row justify-content-center fixed-bottom bg-primary">
                        <div className="col text-center">

                            <a href="https://www.linkedin.com/in/george-joseph-brown/"
                                className="text-white btn-floating btn-lg btn-li" type="button" role="button" target="_blank" rel="noreferrer"><i
                                    className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/joeybrown-ctrl" className="text-white btn-floating btn-lg btn-git"
                                type="button" role="button" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                            <a href="mailto:gjoey.brown@gmail.com" className="text-white btn-floating btn-lg btn-email"
                                type="button" role="button" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>

                            <br />
                            <p className="text-light">&copy;2021 George Joseph Brown. All rights reserved.</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;