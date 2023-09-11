import style from '../home/home.module.css';
import { withRouter } from 'react-router-dom';
import Searchbar from '../searchbar/searchbar'
import { useSelector } from 'react-redux';
import { getDogs, queryDogs, orderCards, filterCards } from '../redux/actions/actions';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '../card/card'
import LoadingComponent from '../loading/loading';
import axios from 'axios';

function Home(props) {
    const { location } = props;
    const pathname = location.pathname;
    const allDogs = useSelector(state => state.allDogs)
    const searchDogs = useSelector(state => state.searchDogs)
    const queryState = useSelector(state => state.queryState)
    const dispatch = useDispatch()
    const [numberpage, setNumberpage] = useState(1)
    const [num, setNum] = useState(1)
    const URL = 'http://localhost:3001'
    const [temper, setTemper] = useState([])

    const nextpage = () => {

        setNumberpage(numberpage + 1)
        window.scrollTo({ top: 0, behavior: 'auto' })                   //la funcion scrollTo de windows me lllea a la parte superior y con de forma instantanea con behavior:auto
    }



    const prevpage = () => {
        setNumberpage(numberpage - 1)
        window.scrollTo({ top: 0, behavior: 'auto' })
    }

    function arraygroup(array1) {
        let group = []
        let k = 0
        for (let i = 0; array1.length > i; i) {
            i = i + 8
            group.push(array1.slice(k, i))
            k = k + 8
        }
        return group

    }


    useEffect(() => {
        //si lo pongo directamente en el return me da error porque es una funcion asincronica y tarda en completarse
        dispatch(getDogs())
        // Obtener la lista de temperamentos
        axios.get(`${URL}/temperaments`)
            .then(response => {
                const temperamentos = response.data;
                setTemper(temperamentos)

                // Aquí puedes hacer lo que necesites con la lista de temperamentos
            })
            .catch(error => {
                console.error("Error al obtener la lista de temperamentos:", error);
            });

        return () => {
            dispatch(queryDogs(false))
        };
    }, []);

    const pagination = () => {
        const data = queryState ? searchDogs : allDogs;
        return <div className={style.paginationContenedor}>
            <ul className={style.paginationPage}>
                {numberpage > 1 && <li ><button onClick={prevpage}>Anterior</button></li>}
                <li ><button>{numberpage}</button></li>
                <li className={style.paginationPage}>de</li>
                <li ><button>{arraygroup(data).length}</button></li>
                {numberpage < arraygroup(data).length && <li ><button button onClick={nextpage}>Siguiente</button></li>}
            </ul>
        </div>

    }

    function handleOrder(e) {
        const types = queryState ? "searchDogs" : "allDogs"
        const evento = e.target.value
        if (evento === 'A' || evento === 'D') dispatch(orderCards([evento, "name", types]))
        if (evento === 'AA' || evento === 'DD') dispatch(orderCards([evento, "weight", types]))
        setNum(num + 1)// CON ESTO PUEDO HACER QUE SE ACTUALIZE EL USEEFFECT Y ME RENDERICE EL NUEVO ALLDOGS EN ORDEN ALFABETICO


    }

    const handleFilter = (e) => {

        const evento = e.target.value
        dispatch(filterCards(String(evento)))
        queryState === true && setNum(allDogs.length)
        queryState === false && setNum(searchDogs.length)
        console.log(evento)

    }

    const handleFilterFuente = (e) => {

    }



    return (<div className={style.contenedorHome}>
        {searchDogs.length === 0 && num !== 0 && queryState === true ? <LoadingComponent /> : null}
        {allDogs.length === 0 && num !== 0 && queryState === false ? <LoadingComponent /> : null}
        {pathname === '/home' ? <Searchbar /> : null}
        
        {pagination()}
        <div>
            <h3>filtrar por:</h3>
            <div >
                <select onChange={handleOrder}>
                    <option value="A">A-Z</option>
                    <option value="D">Z-A</option>
                    <option value="AA">Mayor peso</option>
                    <option value="DD">Menor peso</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Todos">Todos</option>
                    {temper.length > 0 && (temper.map(tem => { return <option value={tem[0]}>{tem[0]}</option> }))}
                </select>
                <select onChange={handleFilterFuente}>
                    <option value="Todos">Todos</option>
                    <option value="API>">API</option>
                    <option value="BASE DE DATOS>">BASE DE DATOS</option>
                </select>
            </div>
        </div>
        {num===0 && allDogs.length === 0 && queryState === false && <h2>No hay resultados</h2>}
        {num===0 && searchDogs.length === 0 && queryState === true && <h2>No hay resultados</h2>}
        <div className={style.Home}>

            {searchDogs.length > 0 && queryState === true && arraygroup(searchDogs)[numberpage - 1].map((element) => {
                return <Card
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    image={element.image}
                    temperament={element.temperament}
                    weight={element.weight}

                />
            })}
            {allDogs.length > 0 && queryState === false && arraygroup(allDogs)[numberpage - 1].map((element) => {
                return <Card
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    image={element.image}
                    temperament={element.temperament}
                    weight={element.weight}

                />
            })}

            {allDogs.length > 0 && pagination()}
        </div>
    </div>)
}

export default withRouter(Home);