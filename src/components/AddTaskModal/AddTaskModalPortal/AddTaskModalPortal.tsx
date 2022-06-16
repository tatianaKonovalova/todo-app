import { FC, ReactElement, useEffect, useState } from "react";
import * as ReactDOM from "react-dom";

interface Props {
    children: ReactElement;
}

const AddTaskModalPortal: FC<Props> = ({ children }) => {
    const [container, setContainer] = useState<null | Element>(null);

    useEffect(() => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        setContainer(container);
        return () => {
            document.body.removeChild(container);
        };
    }, []);

    return container ? ReactDOM.createPortal(children, container) : null;
};

export default AddTaskModalPortal;