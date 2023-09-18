import style from "../form/form.module.css"
import { useState, useEffect } from "react"
import Loading from '../loading/loading'
import { useHistory } from 'react-router-dom';

function Form(props) {
  const [loading, setLoading] = useState(false)
  const history = useHistory();


  useEffect(() => {
    // Esta función se ejecutará cuando la ruta cambie (después de la navegación)
    setLoading(false);
  }, [history.location.pathname]);

  return (<div className={style.containerForm}>
    {loading ? <Loading></Loading> : null}

    <div className={style.Title}>
      <h4>- SoyHenry - </h4>
      <div className={style.separadorTitle}></div>
      <h1>PI DOGS</h1>
      <div className={style.separadorTitle}></div>
      <h2>SINGLE PAGE APPLICATION</h2>
    </div>
    
    <button className={style.buttonForm} onClick={() => {
      setLoading(true)
      history.push('/home');
    }}>Comenzar</button>

  </div>)
}

export default Form;