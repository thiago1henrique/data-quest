import {ReactNode} from "react";

interface GridProps {
    children: ReactNode;
    className?: string;
}


const Grid = ({children, className}: GridProps) => {
    return (
        <section className={["w-full max-w-grid h-full", className].filter(Boolean).join(" ")}>
            {children}
        </section>

    )
}

export default Grid;