import React from 'react';

const Footer = () => {
    function githubAction() {
        window.open("https://github.com/seanmisra/seanmisra.com-react", '_blank');
      }


    return(
        <> 
            <div class="footer-wrapper">
                {/* <span>+1 (617) 784-2828, Boston, MA.</span> */}
                <p id="copyright-message">© 2023 Sean Misra. All rights reserved.&nbsp;
                    <span id="built-with-react" onClick={githubAction}>Built with React.</span></p>
            </div>
        </>
    )
}

export default Footer;