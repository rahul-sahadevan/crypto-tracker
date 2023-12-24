import './style.css'
function Button({text,onClick,outlined}){

    return (
        <div>
            <button className={outlined ? 'outlined-btn' : 'btn'}>{text}</button>
        </div>
    )
}

export default Button