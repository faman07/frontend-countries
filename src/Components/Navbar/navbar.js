import style from './navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/searchBar'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAllCountries } from '../../redux/actions/index'
import {filterCountriesByActivity,filterCountriesByContinent,sortCountriesByAlph,sortCountriesByPoblation}from'../../redux/actions/index'
import  icono  from './homa.png'


export default function Navbar({setCurrentPage,setOrden}){
    const dispatch=useDispatch()
    const allActivities=useSelector(state=>state.activities);
    const allContinents=useSelector(state=>state.continents);
    function handleFilterByActivities(e){
        dispatch(filterCountriesByActivity(e.target.value))
        setCurrentPage(1)
    }
    function handleFilterByContinent(e){
        dispatch(filterCountriesByContinent(e.target.value))
        setCurrentPage(1)
    }
    function handleSortByAlph(e){
        dispatch(sortCountriesByAlph(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleSortByPoblation(e){
        dispatch(sortCountriesByPoblation(e.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${e.target.value}`)
    }
    function handleClick(e) {
        e.preventDefault();
        dispatch(getAllCountries());
        window.location.reload();
      }
    return(
        <div className={style.navbarContainer}>
            <div className={style.navbar}>
               
                <NavLink to= '/'>
                    <img  onClick={()=>{
                    dispatch(getAllCountries())
                    setCurrentPage(1)
                }}src={icono} alt='Icono' className={style.icono}/>
                </NavLink>
                
                <ul>
                    <li>
                        <SearchBar setCurrentPage={setCurrentPage}></SearchBar>
                    </li>
                    <li>
                        <Link to='/home/create'>
                            <button className={style.bfiltro}>Crear actividad</button>
                        </Link>
                    </li>
                    <li>
                        <select name='alphabetical' onChange={handleSortByAlph}>
                            <option>Orden alfabetico</option>
                            <option value='AS'>Asc</option>
                            <option value='DES'>Desc</option>
                        </select>
                        
                    </li>
                    <li>
                        <select name='poblation' onChange={handleSortByPoblation}>
                            <option>Ordenar por Poblacion </option>
                            <option value='AS'>Asc</option>
                            <option value='DES'>Desc</option>
                        </select>
                    </li>
                    <li>
                        <select onChange={handleFilterByActivities} name='activitiesType'>
                            <option value='All'>Filtrar por actividad</option>
                            {
                                allActivities.length&&allActivities.map(a=><option value={a}>{a}</option>)
                            }
                        </select>
                    </li>
                    <li>
                        <select onChange={handleFilterByContinent} name='continents'>
                            <option value='All'>Filtrar por continente</option>
                            {  
                                allContinents.length&&allContinents.map(c=><option value={c}>{c}</option>)
                            }
                        </select>
                        
                    </li>
                    <li>
                       <button onClick={e => { handleClick(e) }} className={style.bfiltro}>
                                 Limpiar filtro
                             </button>
                    </li>
                </ul>
            </div>
        </div>
    )
} 
                             
                        
                   