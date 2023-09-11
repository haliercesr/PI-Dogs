import style from "../create/create.module.css"
import { useState, useEffect } from "react"
import Loading from '../loading/loading'
import { useHistory,Link } from 'react-router-dom';

function Create(props) {
   const [user, setData] = useState(
      {
         name: "",
         height:[],
         weight:[],
         life_span:[],


      })
   const [errors, setErrors] = useState({})

   const handleSubmit = () => {

   }

   const handleChange = () => {

   }

   return (<div className={style.containerCreate}>
      <form className={style.RegForms} onSubmit={handleSubmit}>

         <div className={style.FormConteiner}>
            <span>Crea un perro</span>
            <div className={style.labelform11}>
               <div className={style.labelReg}>
                  <input placeholder="Nombre" className={style.input1} name="name" onChange={handleChange} />
               </div>
            </div>
            <div className={style.labelform11}>
               <div className={style.labelReg}>
                  <input placeholder="Altura" className={style.input1} name="height" />
               </div>
            </div>
            <div className={errors.email ? style.labelform1 : style.labelform11}>
               <div className={style.labelReg}>
                  <input placeholder="Peso" className={style.input1} name="weight" onChange={handleChange} />
               </div>
               <p className={style.p1}>{errors.email}</p>
            </div>
            <div className={errors.password ? style.labelform22 : style.labelform2}>
               <div className={style.labelReg}>
                  <input placeholder="Años de vida" className={style.input2} type="life_span" name="password" onChange={handleChange} />
               </div>
               <p className={style.p1}>{errors.password}</p>
            </div>
            <div className={style.labelform11}>
               <div className={style.labelReg}>
                  <input placeholder="Temperamentos" className={style.input1} name="temperaments" onChange={handleChange} />
               </div>
            </div>
            <div className={style.buttonSubmit}>
               <button type="submit">Crear</button>
            </div>
            <span ><Link to="/" className={style.SpanLink}>Volver al inicio</Link></span>
         </div>

      </form >

   </div>)
}

export default Create;