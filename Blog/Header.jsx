import "bootstrap/dist/css/bootstrap.min.css";
import "../Blog/responsive.css";
import "../Blog/font-awesome.css";
export const Header=()=>{
    return(
    <header id="myHeader">
         <div className="container">
            <div className="header-inner">
               <div className="main-menu-part"> 
               <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>                 
                  <div className="site-logo">
                     <a href="index.html"><img src="../Blog/../Blog/images/logo.svg"/></a>
                  </div>
                  
                  <nav className="navigation">
                     <ul className="main-nav ">
                        <li className="nav-link">
                           <a href="javascript:void(0);" className="aerow">DIAGNOSTIC SERVICES </a>
                           <div className="mega-menu">
                              <div className="container">
                                 <ul className="diagnostic-ser">
                                    <li>
                                          <div className="inner-menu-item">
                                             <div className="img-wrap">
                                                <img src="../Blog/images/menuf-1.png" className="menui1"/>
                                             </div>
                                             <a href="javascript:void(0);">Patch Test</a>
                                          </div>
                                    </li>
                                    <li>
                                          <div className="inner-menu-item">
                                             <div className="img-wrap">
                                                <img src="../Blog/images/menuf-2.png" className="menui2"/>
                                             </div>
                                       <a href="javascript:void(0);">Face Mapping & <br/>Skin Analysis</a>
                                          </div>
                                    </li>
                                    <li>
                                          <div className="inner-menu-item">
                                             <div className="img-wrap">
                                                <img src="../Blog/images/menuf-3.png" className="menui3"/>
                                             </div>
                                       <a href="javascript:void(0);">Video Consultation</a>
                                          </div>
                                    </li>
                                    <li>
                                          <div className="inner-menu-item">
                                             <div className="img-wrap">
                                                <img src="../Blog/images/menuf-4.png" className="menui4"/>
                                             </div>
                                          <a href="javascript:void(0);">Live Chat</a>
                                          </div>
                                       
                                    </li>
                                    <li>
                                          <div className="inner-menu-item">
                                             <div className="img-wrap">
                                                <img src="../Blog/images/menuf-5.png" className="menui5"/>
                                             </div>
                                       <a href="javascript:void(0);">DNA Skin Analysis</a>
                                          </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                        <li className="nav-link"><a  href="javascript:void(0);" className="aerow">SHOP</a>
                           <div className="mega-menu">
                              <div className="container">
                                 <ul className="diagnostic-ser shop-menu">
                                    <li>
                                       <div className="inner-menu-item">
                                          <div className="img-wrap">
                                             <a href="javascript:void(0);">
                                             <img src="../Blog/images/menus-1.png"/>
                                          </a>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="inner-menu-item">
                                          <div className="img-wrap">
                                             <a href="javascript:void(0);">
                                             <img src="../Blog/images/menus-2.png"/>
                                          </a>
                                          </div>
                                       </div>
                                    </li>
                                    <li>
                                       <div className="inner-menu-item">
                                          <div className="img-wrap">
                                             <a href="javascript:void(0);">
                                             <img src="../Blog/images/menus-3.png"/>
                                          </a>
                                          </div>
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </div>

                        </li>
                        <li className="nav-link"><a href="javascript:void(0);" className="aerow">SKIN CONCERNS </a>
                           <div className="mega-menu skin-concerns-menu">
                              <div className="container-sm">
                                 <div className="concern-menu">
                                    <div className="concern-left">
                                       <ul className="cncern-list">
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-1.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Signs-of-Ageing
                                             </a>
                                          </li>
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-2.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Acne/Breakouts 
                                             </a>
                                          </li>
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-3.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Pores/Oilness
                                             </a>
                                          </li>
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-4.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Brightening <br/>/Skin Tone
                                             </a>
                                          </li>
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-5.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Lack of Firmness/ Dehydration
                                             </a>
                                          </li>
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-6.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Dark Circles/ Puffy Eyes
                                             </a>
                                          </li>
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-7.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Sun Damage/ Pigmentation
                                             </a>
                                          </li>
                                          <li className="concern-list">
                                             <div className="concern-icon">
                                                <img src="../Blog/images/concern-8.svg"/>
                                             </div>
                                             <a href="javascript:void(0);">
                                                Sensitive Skin/ Redness
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="concern-right">
                                       <div className="concern-img">
                                          <img src="../Blog/images/concern-img.jpg"/>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>

                        </li>
                        <li className="nav-link"><a href="javascript:void(0);">BLOGS </a></li>
                        <li className="nav-link"><a href="javascript:void(0);">Why MSH?</a></li>
                        <li className="nav-link"><a href="javascript:void(0);">MY PORTAL </a></li>
                     </ul>
                  </nav>
               </div>
               <div className="right-header">
                  <div className="head-search">
                     <a href="javascript:void(0);" className="search-toggle"><img src="../Blog/images/search-icon.svg"/></a>
                     <div className="search-form">
                        <form>
                           <div className="search-field">
                              <input type="text" name="" placeholder="Search here..."/>
                              <button type="submit"><img src="../Blog/images/search-white.svg"/></button>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="my-account">
                     <a href="javascript:void(0);" className="user-toggle"><img src="../Blog/images/User-icon.svg"/></a>
                  </div>
                  <div className="mini-cart">
                     <a href="javascript:void(0);" className="cart-toggle with-aerow"><img src="../Blog/images/cart-icon.svg"/></a>
                  </div>
               </div> 
            </div>
         </div>
      </header>
    );
}