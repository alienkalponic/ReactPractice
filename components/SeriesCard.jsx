export const SeriesCard=({curElem})=>{
    
    const{name,img_url,rating,description,watchUrl}=curElem;
    return(
        <li>
            <img src={img_url} alt={img_url} width="20%" height="40%"/>
            <h2>Name:{name}</h2>
            <h3>Rating:{rating}</h3>
            <p>sumary:{description}</p>
            <a href={watchUrl} className="btn btn-success">Watch Now</a>
        </li>

    )
};