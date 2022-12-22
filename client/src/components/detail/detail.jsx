import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './detail.module.css';
import { useSelector } from 'react-redux';
import LoadingComponent from '../loading/loading';
import Searchbar from '../searchbar/searchbar'
import { withRouter } from 'react-router-dom';

function Detail(props) {
   const { location } = props;
   const pathname = location.pathname;
   console.log(pathname)
   const { id } = useParams();
   const allDogs = useSelector(state => state.allDogs)
   

   const [dog, setDog] = useState([]);
 
   useEffect(() => {                       
         if (allDogs.length>0) { 
            const data=allDogs.filter(dog=>dog.id===Number(id))                   
            setDog(data);
          
         }
   }, [id,allDogs]);


   return (
      <div className={styles.DetailContainerCard}>
         {allDogs.length === 0 ? <LoadingComponent /> : null}
         {dog[0] && (
            <div className={styles.container}>
               <div className={styles.Detail}>
                  <div className={styles.titleDetail}>
                     <h1 className={styles.titleDet}> {dog[0].name}</h1>
                  </div>
                  <div className={styles.textDetail}>
                  <h2><span>Id:</span> {dog[0].id}</h2>
                  <h2><span>Altura:</span> {dog[0].height.metric}</h2>
                  <h2><span>Peso:</span> {dog[0].weight.metric}</h2>
                  <h2><span>Temperamentos:</span> {dog[0].temperament}</h2>
                  <h2><span>Años de vida:</span> {dog[0].life_span}</h2>
                  </div>
               </div>
               <div className={styles.img}>
                  <img src={dog[0].image.url} alt="dog"></img>
               </div>
            </div>
         )}
      </div>
   )
}

export default withRouter(Detail);