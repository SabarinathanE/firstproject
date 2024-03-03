import Proptypes from "prop-types";

export default function Square (props) {
    const {title, value, isFree, onClick} = props;
    return <div className="sr" onClick={onClick}>
        <span clasName="banner">
            {isFree ? "Free" : "Paid"}
        </span>
        {title},{value}
    </div>
}

Square.proptypes= {
    isFree: Proptypes.bool,
    value: Proptypes.number,
    title : Proptypes.string
}