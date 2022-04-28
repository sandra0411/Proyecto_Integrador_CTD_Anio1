import React from 'react';
import CardRecom from '../home/main/CardRecom';
import '../../styles/index.css';
import '../../styles/my_reservations/my_reservations.css';
import { useNavigate} from 'react-router';
import useUser from '../../hooks/useUser';


export default function Reservations ({myReservations}) {

    const { logout, isLogged } = useUser()
    const navigate = useNavigate();

    const handleClick = () => {
        if (isLogged){
            return navigate("/home")
        }
      }

    const noReservations = (<div id="container_no_reservations">
        <h2>Aún no ha realizado reservas...</h2>
        <img width="250" height="231" src="https://media.giphy.com/media/d1GpZTVp2eV7gQk8/giphy.gif"></img>
        <h3>¿Qué espera para encontrar el lugar de sus sueños?</h3>
        <br/>
        <div class="button_cont" align="center"><a class="example_f" onClick={handleClick} /* href="/home" */ /* target="_blank" */ /* rel="nofollow" */><span>Volver a la home</span></a></div>
    </div>)

    return (<>
        {/* Reutilizar las cards del componente CardsRecom */}  

        {console.log(myReservations)}
        <div className="cardContainerRecom">
            {myReservations.length === 0 ? noReservations : myReservations.map(function (product, index) { 
                {console.log(product.name)}
                return(
                    <CardRecom key={index} id={product.id} img={product.images[0].url} category={product.category.title} title={product.name} location={product.city.name} description={product.description} features={product.features}/>
                )
                
            })}
        </div>
        

        

        

    </>)

}