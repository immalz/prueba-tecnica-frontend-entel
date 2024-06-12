import { User } from "../interfaces/User";

interface CardProps {
    user: User
}

import cardStyle from '../styles/Card.module.css';

function Card(props: CardProps) {
    const { user } = props;
    return (
        <div className={cardStyle.card}>
            <div key={user.id}>
                <h2> {user.name} </h2>
                <p> <b>Usuario:</b> {user.username}</p>
                <p> <b>Correo:</b> {user.email}</p>
                <p> <b>Celular:</b> {user.phone}</p>
                <p> <b>Empresa:</b> {user.company.name}</p>
                <p> <b>Ciudad:</b> {user.address.city}</p>
            </div>
        </div>
    )
}

export default Card;