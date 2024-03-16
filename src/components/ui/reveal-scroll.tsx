import React, { useEffect, useRef, useState } from "react";
 
const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
        const [isVisible, setIsVisible] = useState(false);
        const ref = useRef(null);
     
        useEffect(() => {
            const onWindScroll = () => {
                const element = ref.current as unknown as HTMLElement; // Add type assertion
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    const isVisible = top < window.innerHeight;
                    setIsVisible(isVisible);
                }
            };
     
            window.addEventListener("scroll", onWindScroll);
            return () => {
                window.removeEventListener("scroll", onWindScroll);
            };
        }, []);
     
        const classes = `transition-opacity duration-2000
            ${isVisible ? "opacity-100" : "opacity-0"
            }`;
     
        return (
            <div ref={ref} className={classes}>
                {children}
            </div>
        );
};

export default RevealOnScroll;