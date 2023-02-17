import style from "./button.module.css";

export function Button(props) {
    let lessOrPlus = props.action === "Next >" ? true : false;

    return (
        <>
            <button
                onClick={() => {
                    props.NumberLessOrPlus(lessOrPlus);
                }}
                className={style.button}
            >
                {props.action}
            </button>
        </>
    );
}
