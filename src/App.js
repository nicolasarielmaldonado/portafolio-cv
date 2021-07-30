import React, { useEffect, useRef, useState, Suspense } from 'react';


import { Main } from './components/Main/Main';
import { Menu } from './components/Menu/Menu';
import { Loader } from './components/Loader/Loader';

const About = React.lazy(() => import('./components/About/About'));
const Technologies = React.lazy(() => import('./components/Technologies/Technologies'));
const Works = React.lazy(() => import('./components/Works/Works'));
const Contact = React.lazy(() => import('./components/Contact/Contact'));


export const App = () => {

    const scrollRef = useRef();
    
    const [screenPos, setScreenPos] = useState(0);

    const handleScreenChange = () => {

        if (window.innerHeight + window.scrollY >= document.body.clientHeight-200){
            scrollRef.current.style.opacity = "0";
        } else {
            scrollRef.current.style.opacity = "1";
        }

        if (window.scrollY >= 2900) {
            setScreenPos(5);
        } else if (window.scrollY >= 2000) {
            setScreenPos(4);
        } else if (window.scrollY >= 1000){
            setScreenPos(3);
        } else if (window.scrollY >= 200){
            setScreenPos(2);
        } else {
            setScreenPos(1);
        }
    }
    
    useEffect(() => {
        window.onload = () => {
            
            if (window.scrollY >= 2900) {
                setScreenPos(5);
            } else if (window.scrollY >= 2000) {
                setScreenPos(4);
            } else if (window.scrollY >= 1000){
                setScreenPos(3);
            } else if (window.scrollY >= 200){
                setScreenPos(2);
            } else {
                setScreenPos(1);
            }
        }

        window.addEventListener('scroll', () => handleScreenChange());

    }, []);



    return (
        <>  
            <Menu/>

            <div className="page-container">

                    <Suspense fallback={Loader()}>
                        <Main screenPos={screenPos} scrollRef={scrollRef}/>
                    </Suspense>

                    <Suspense fallback={Loader()}>
                        <About screenPos={screenPos}/>
                    </Suspense>

                    <Suspense fallback={Loader()}>
                        <Technologies screenPos={screenPos}/>
                    </Suspense>

                    <Suspense fallback={Loader()}>
                        <Works screenPos={screenPos}/>
                    </Suspense>

                    <Suspense fallback={Loader()}>
                        <Contact screenPos={screenPos}/>
                    </Suspense>

                    <div className="bottom-container">
                        <p className={`tags body ${screenPos>=5 && "tags-appear"}`}><code>{"</"}</code>{`body`}<code>{">"}</code></p>
                        <p className={`tags ${screenPos>=5 && "tags-appear"}`}><code>{"</"}</code>{`html`}<code>{">"}</code></p>
                    </div>
            </div>
        </>
    )
}
