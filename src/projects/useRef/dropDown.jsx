import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const ddRef = useRef(null);

    const handleDD = (event) => {
        if (ddRef.current && !ddRef.current.contains(event.target)) {
            setIsOpen(false);
        }

    }

    useEffect(() => {
        document.addEventListener("mousedown", handleDD);
        return () => {
            document.removeEventListener("mousedown", handleDD);
        }

    }, []);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Toggle Menu</button>

            {
                isOpen ? (
                    <div
                        ref={ddRef}
                        style={{
                            marginTop: "10px",
                            padding: "10px",
                            border: "1px solid black",
                            width: "150px",
                        }}
                    >
                        <p>Menu Item 1</p>
                        <p>Menu Item 2</p>
                        <p>Menu Item 3</p>
                    </div>

                ) : null
            }


        </>
    );
}
