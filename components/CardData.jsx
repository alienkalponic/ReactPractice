import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
export const CardData=()=>{
    return(
        
        <ul>
            {
                seriesData.map((item)=>{
                    return(
                        <SeriesCard key={item.id} curElem={item}/>
                    );
                    
                })
            };
        </ul>
    )
  };

