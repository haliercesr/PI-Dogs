import style from "../create/create.module.css"
import { useState, useEffect } from "react"
import Loading from '../loading/loading'
import { useHistory, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Validation from './Validation';


function Create(props) {
   const allDogsFilter = useSelector(state => state.allDogsFilter)
   const [allTemperaments, SetAllTemperaments] = useState([])
   const [user, setData] = useState(
      {
         name: '',
         heightMin: 0,
         heightMax: 0,
         weightMin: 0,
         weightMax: 0,
         life_span: 0,
         selectedTemperaments: [],

      })
   const [errors, setErrors] = useState({})

   useEffect(() => {



      SetAllTemperaments(allDogsFilter)


   }, []);

   const handleSubmit = () => {

   }

   const handleChange = (e) => {
      const property = e.target.value
      const name = e.target.name
      setData({ ...user, [name]: property })
      setErrors(Validation({ ...user, [name]: property }))
   }




   // Lista de temperamentos disponibles (debes obtenerla de tus datos)
   // const allTemperaments = ['Calm', 'Active', 'Friendly', 'Energetic', 'Loyal'];

   // Manejador de cambio cuando se selecciona o deselecciona un temperamento
   const handleTemperamentChange = (e) => {
      const selectedValue = e.target.value;

      if (user.selectedTemperaments.includes(selectedValue)) {
         // Si ya está seleccionado, quítalo
         const updatedTemperaments = user.selectedTemperaments.filter(
            (temp) => temp !== selectedValue
         );
         setData({ ...user, selectedTemperaments: updatedTemperaments });
      } else {
         // Si no está seleccionado, agrégalo
         setData({ ...user, selectedTemperaments: [...user.selectedTemperaments, selectedValue] });
      }
   };

   return (<div className={style.containerCreate}>
      <form className={style.RegForms} onSubmit={handleSubmit}>

         <div className={style.FormConteiner}>
            <div>
               <span>Crea un perro</span>
               <div className={style.labelform11}>
                  <div className={style.labelReg}>
                     <label >Nombre:</label>
                     <input placeholder=" Nombre" className={style.inputNombre} name="name" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.name}</p>
               </div>
               <div className={style.labelform11}>
                  <div className={style.labelReg}>
                     <label >Altura (M):</label>
                     <input placeholder=" min" type='number' className={style.input1} name="heightMin" onChange={handleChange}/>
                     <input placeholder=" max" type='number' className={style.input1} name="heighMax" onChange={handleChange}/>
                  </div>
               </div>
               <div className={errors.email ? style.labelform1 : style.labelform11}>
                  <div className={style.labelReg}>
                     <label >Peso (Kg):</label>
                     <input placeholder=" min" type='number' className={style.input1} name="weightMin" onChange={handleChange}/>
                     <input placeholder=" max" type='number' className={style.input1} name="weightMax" onChange={handleChange}/>
                  </div>
                  <p className={style.p1}>{errors.email}</p>
               </div>
               <div className={errors.password ? style.labelform22 : style.labelform2}>
                  <div className={style.labelReg}>
                     <label >Años de vida:</label>
                     <input placeholder=" max" className={style.input2} name="life_span" onChange={handleChange} />
                  </div>
                  <p className={style.p1}>{errors.password}</p>
               </div>
            </div>
            <div className={style.listTemperaments}>
               <h3>Selecciona temperamentos:</h3>
               <ul>
                  {allTemperaments.map((temperament) => (
                     <li key={temperament}>
                        <label>
                           <input
                              type="checkbox"
                              value={temperament}
                              checked={user.selectedTemperaments.includes(temperament)}
                              onChange={handleTemperamentChange}
                           />
                           {temperament}
                        </label>
                     </li>
                  ))}
               </ul>
               <div>
                  <h4>Temperamentos seleccionados:</h4>
                  <ul>
                     {user.selectedTemperaments.map((temperament) => (
                        <li key={temperament}>{temperament}</li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
         <div className={style.buttonSubmit}>
            <button type="submit">Crear</button>
         </div>
         <span ><Link to="/" className={style.SpanLink}>Volver al inicio</Link></span>
      </form >

   </div >)
}

export default Create;