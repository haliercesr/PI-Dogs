import style from "../form/form.module.css"
import { useState, useEffect } from "react"
import Loading from '../loading/loading'
import { useHistory } from 'react-router-dom';

 function Form (props){
  const [loading,setLoading]=useState(false)
  const history = useHistory();

  
  useEffect(() => {
    // Esta función se ejecutará cuando la ruta cambie (después de la navegación)
    setLoading(false);
  }, [history.location.pathname]);

    return(<div className={style.containerForm}>
          {loading?<Loading></Loading>:null}
           <button onClick={()=>{
            setLoading(true)
            history.push('/home');
            }}>Comenzar</button>
    </div>)
 }

 export default Form;