export const Footer=()=>{
    return(
        <footer>
         <div className="container">
            <div className="footer-top">
               <div className="ft-leftpart">
                  <div className="ft-log">
                     <a href="index.html">
                     <img src="../Blog/images/ft-logo.svg"/>
                     </a>
                  </div>
                  <div className="newsletter-form">
                     <h5>SIGN UP TO RECEIVE NEWSLETTER</h5>
                     <p>Signup to receive exclusive updates and content</p>
                     <form className="news-form">
                        <div className="news-inner">
                           <div className="news-field">
                              <input type="email" name="" placeholder="Enter your email adrerss"/>
                           </div>
                           <button type="submit" className="sub-btn">SUBSCRIBE</button>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="ft-rightpart">
                  <div className="ft-parts">
                     <h5>SHOP & DIGITAL SERVICES</h5>
                     <ul className="ft-links">
                        <li><a href="javascript:void(0);">My Portal</a></li>
                        <li><a href="javascript:void(0);">Offers & Rewards</a></li>
                     </ul>
                  </div>
                  <div className="ft-parts">
                     <h5>HELP & SUPPORT</h5>
                     <ul className="ft-links">
                        <li><a href="javascript:void(0);">About us</a></li>
                        <li><a href="javascript:void(0);">Why MSH?</a></li>
                        <li><a href="javascript:void(0);">Frequently Asked Questions</a></li>
                        <li><a href="javascript:void(0);">Request a callback</a></li>
                     </ul>
                  </div>
                  <div className="ft-parts">
                     <h5>FOLLOW US</h5>
                     <ul className="socila-share">
                        <li className="facebook-icon"><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li className="twitter-icon"><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li className="insta-icon"><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
                  <div className="ft-parts">
                     <h5>DELIVERY</h5>
                     <ul className="ft-links">
                        <li><a href="javascript:void(0);">Delivery</a></li>
                        <li><a href="javascript:void(0);">Returns</a></li>
                     </ul>
                  </div>
                  <div className="ft-parts">
                     <h5>POLICIES</h5>
                     <ul className="ft-links">
                        <li><a href="javascript:void(0);">Privacy Policies</a></li>
                        <li><a href="javascript:void(0);">Terms & Conditions</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="footer-bottom">
               <p><span className="copy-right">Copyright © 2021 MySkinHealth. </span>
                  <span className="copy-link">
                  <a href="#">Cookie notice</a><span>|</span><a href="#">Manage cookies</a><span>|</span><a href="#">Privacy notice</a><span>|</span><a href="#">Legal notice</a><span>|</span><a href="#">Terms of sale</a><span>|</span><a href="#">Competition/offers terms</a>
                  </span>
               </p>
            </div>
         </div>
      </footer>

    );
}