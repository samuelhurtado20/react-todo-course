
function Create({ title, onclick, className }) {
    return (
        <button className={className} onClick={() => onclick()}>{title}</button>
    )
}

export {Create}