


// const [remoteData,setRemoteData]=useState();


export const Tostcard=(data)=>{
    console.log(data);
    const{img,Name,Daysdata,bydata,Title,description,button }=data;

    

    return(
<>
<div className="blog-box">
                  <img src={img}/>
                  <div className="blog-post-inner">
                  <div className="blog-subtitle d-flex"><h4>{Name} |</h4><span>&nbsp;{Daysdata}</span></div>
                  <div className="author d-flex">
                     <img src="../Blog/images/author.png"/>
                     <p><span>By</span>&nbsp;{bydata}</p>
                  </div>
                  {Title}
                  {description}
                  <div className="blog-action-btn d-flex">
                     {button}
                     <a href="#" className="heart-icon"><img src="../Blog/images/heart-icon.svg"/></a>
                  </div>
                </div>
                  
               </div>
</>
        

    );
}