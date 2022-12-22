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
   const [zoomImage, setZoomImage] = useState(false);

   const [dog, setDog] = useState([]);

   const zoomIn = () => {
      setZoomImage(true)
   }

   const zoomOut = () => {
      setZoomImage(false)
   }

   useEffect(() => {
      if (allDogs.length > 0) {
         const data = allDogs.filter(dog => dog.id === Number(id))
         setDog(data);

      }
   }, [id, allDogs]);


   return (
      <div className={styles.DetailContainerCard}>
         {allDogs.length === 0 ? <LoadingComponent /> : null}
         {dog[0] && (
             
            <div className={styles.container}>
               {zoomImage && <div className={styles.containerImgZoom}> <img onClick={zoomOut} className={styles.imgZoom} src={dog[0].image.url} alt="dog" /></div>}
               <div className={styles.NameDog}>{dog[0].name}</div>
               <div className={styles.AlturaDog}><span>Altura:<p>{dog[0].height.metric[0]}</p></span></div>
               <div className={styles.PesoDog}>Peso:{dog[0].weight.metric[0]}</div>
               <div className={styles.lifeDog}>Altura:{dog[0].life_span}</div>
               <div className={styles.temperamentsDog}>Temperamentos:{dog[0].temperament}</div>

               
               <div className={styles.img}>
                  <img onClick={zoomIn} src={dog[0].image.url} alt="dog"></img>
               </div>
            </div>
         )}
      </div>
   )
}

export default withRouter(Detail);