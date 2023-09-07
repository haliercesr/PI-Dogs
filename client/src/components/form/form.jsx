import style from "../form/form.module.css"

 export default function Form (props){

    function LoadingComponent() {
        return (
          <div  className="loading">
            <image></image>
            <p>Cargando...</p>
          </div>
        );
      }
    

    return(<div className={style.containerForm}>
           <button onClick={()=>{}}>
            Comenzar
           </button>
    </div>)
 }