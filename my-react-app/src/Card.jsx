import profilePic from "./assets/OIP.jpeg"

function Card(){
    return(
        <div className='card'>
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="cardtitle">Flo</h2>
            <p className="card-text">I am sudding in the Karl von Closen Gymnasium</p>
        </div>
    )
}

export default Card