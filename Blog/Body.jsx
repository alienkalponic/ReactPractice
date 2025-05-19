import { Tostcard } from "./TostCard";
import axios from "axios";
const APi_Url = import.meta.env.VITE_BLOG_API;

export const Body=()=>{


 const getShiftType = async () => {
    
    try {
      const response = await axios.get(
        `${APi_Url}master/getall-ShiftType`,

        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            
          },
        }
      );

      if (response.data.statusCode == 200 && response.data.success) {
        console.log("hcp  response", response.data.response);
      //   const getData = JSON.parse(response.data.response);
        
      }

      // Handle response data as needed
    } catch (error) {
      console.log("education get error", error);
      
    }
  };

    return(
        <div className="blog-pagewrapper">
      <div className="inner-banner padd-130px">
      <div className="container">
         <div className="banner-inner concern-banner-1 blog-banner">
            <div className="banner-lefside">
               <div className="banner-text">
                  <h2>MY SKIN HEALTH<br/><span className="brown">BLOG</span></h2>
               </div>
            </div>
            <div className="banner-rightside">
               <div className="wrap">
                  <form>
                     <label>Search article</label>
                     <div className="search">
                        <input type="text" className="searchTerm" placeholder="Keyword/author name"/>
                        <button type="submit" className="searchButton">
                        <img src="../Blog/images/search-icon.svg"/>
                        </button>
                     </div>
                  </form>
                  </div>
                  <div className="select-bar">
                     <div className="form-field">
                        <label>Artciles by</label>
                        <div className="select-input">
                           <select>
                              <option>Popularity</option>
                              <option>Banti</option>
                              <option>Dilip</option>
                              <option>Other</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
         </div>
         <section className="main-blog">
            <div className="container">
               <div className="inner-container">
                 <div className="banner-blog">
                 <div className="blog-left-side-image">
                  <img src="../Blog/images/blog-banner.jpg"/>
                 </div>
                 <div className="blog-right-side-content">
                  <div className="wid-418">
                  <div className="blog-subtitle d-flex"><h4>PATCH TEST |</h4><span>&nbsp;2 days ago</span></div>
                  <div className="blog-title"><h3>Curabitur nec vestibulum<br/> risus id luctus odio</h3></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis risus neque. Integer at tempor magna.</p>
                  <div className="blog-action-btn d-flex">
                     <a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> 
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;LUCY JOHNSTON</p>
                  </div>
                 </div>
               </div>
            </div>

            <div className="blog-post column-3 img-height">

            <Tostcard
               key={1}
               img="../Blog/images/blog-imag1.jpg"
               Name="PATCH TEST"
               Daysdata="2 days ago"
               bydata="LUCY JOHNSTON"
               Title={<div className="blog-title"><h3>Curabitur nec vestibulum<br/> risus id luctus odio</h3></div>}
               description={<p className="blog-p-content">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>}
                button={<button  className="round-btn wid-150" onClick={getShiftType}>READ MORE</button> }
               // button={<button  className="round-btn wid-150" onClick={()=>alert("Hi")}>READ MORE</button> }
               />


               <Tostcard
               key={2}
               img="../Blog/images/blog-imag2.jpg"
               Name="PATCH TEST"
               Daysdata="2 days ago"
               bydata="LUCY JOHNSTON"
               Title={<div className="blog-title"><h3>Curabitur nec vestibulum<br/> risus id luctus odio</h3></div>}
               description={<p className="blog-p-content">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>}
               button={<a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> }
               />


               <Tostcard
               key={3}
               img="../Blog/images/blog-imag3.jpg"
               Name="PATCH TEST"
               Daysdata="2 days ago"
               bydata="LUCY JOHNSTON"
               Title={<div className="blog-title"><h3>Curabitur nec vestibulum<br/> risus id luctus odio</h3></div>}
               description={<p className="blog-p-content">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>}
               button={<a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> }
               />
               {/* <div className="blog-box">
                  <img src="../Blog/images/blog-imag2.jpg"/>
                  <div className="blog-post-inner">
                  <div className="blog-subtitle d-flex"><h4>PATCH TEST |</h4><span>&nbsp;2 days ago</span></div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;LUCY JOHNSTON</p>
                  </div>
                  <div className="blog-title"><h3>Curabitur nec vestibulum<br/> risus id luctus odio</h3></div>
                  <p className="blog-p-content">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
                  <div className="blog-action-btn d-flex">
                     <a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> 
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                </div>
               </div>
               <div className="blog-box">
                  <img src="../Blog/images/blog-imag3.jpg"/>
                  <div className="blog-post-inner">
                  <div className="blog-subtitle d-flex"><h4>PATCH TEST |</h4><span>&nbsp;2 days ago</span></div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;LUCY JOHNSTON</p>
                  </div>
                  <div className="blog-title"><h3>Curabitur nec vestibulum<br/> risus id luctus odio</h3></div>
                  <p className="blog-p-content">Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.</p>
                  <div className="blog-action-btn d-flex">
                     <a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> 
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                </div>
               </div> */}
            </div>
            <div className="blog-post column-2 img-height">
               <div className="blog-box">
                  <img src="../Blog/images/blog-imag4.jpg"/>
                  <div className="blog-post-inner">
                  <div className="blog-subtitle d-flex"><h4>PATCH TEST |</h4><span>&nbsp;2 days ago</span></div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;LUCY JOHNSTON</p>
                  </div>
                  <div className="blog-title"><h3>Mauris consequat gravida velit, sit<br/> amet hendrerit nulla in hac.</h3></div>
                  <p className="blog-p-content">Sed scelerisque pretium convallis. Etiam suscipit<br/> ac sapien nec suscipit. Donec non neque nibh.</p>
                  <div className="blog-action-btn d-flex">
                     <a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> 
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                </div>
               </div>
               <div className="blog-box">
                  <img src="../Blog/images/blog-imag5.jpg"/>
                  <div className="blog-post-inner">
                  <div className="blog-subtitle d-flex"><h4>PATCH TEST |</h4><span>&nbsp;2 days ago</span></div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;LUCY JOHNSTON</p>
                  </div>
                  <div className="blog-title"><h3>Mauris consequat gravida velit, sit<br/> amet hendrerit nulla in hac.</h3></div>
                  <p className="blog-p-content">Sed scelerisque pretium convallis. Etiam suscipit<br/> ac sapien nec suscipit. Donec non neque nibh.</p>
                  <div className="blog-action-btn d-flex">
                     <a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> 
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                </div>
               </div>
               
            </div>
            <div className="blog-post column-2 column-hor">
                <div className="blog-box">
                  <img src="../Blog/images/blog-imag6.jpg"/>
                  <div className="blog-post-inner">
                  <div className="blog-subtitle d-flex"><h4>PATCH TEST |</h4><span>&nbsp;2 days ago</span></div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;LUCY JOHNSTON</p>
                  </div>
                  <div className="blog-title"><h3>Curabitur nec<br/> vestibulum risus idluc.</h3></div>
                 
                  <div className="blog-action-btn d-flex">
                     <a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> 
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                </div>
               </div>
                 <div className="blog-box">
                   <img src="../Blog/images/blog-imag7.jpg"/>
                  <div className="blog-post-inner">
                  <div className="blog-subtitle d-flex"><h4>PATCH TEST |</h4><span>&nbsp;2 days ago</span></div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;LUCY JOHNSTON</p>
                  </div>
                  <div className="blog-title"><h3>Curabitur nec<br/> vestibulum risus idluc.</h3></div>
                  
                  <div className="blog-action-btn d-flex">
                     <a href="javascript:void(0);" className="round-btn wid-150">READ MORE</a> 
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                </div>
               </div>
               
            </div>
            <div className="load-more-btn text-center">
               <a href="javascript:void(0);" className="round-btn wid-150">Load more</a> 
            </div>
         </div>
            </div>
         </section>
        
      </div>
    );
};