import { useEffect } from 'react'

export const useRotation = () => {
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
    }, []);


    useEffect(() => {
        console.log("first")
        let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

        if (orientation === "landscape-primary") {
            console.log("That looks good.");
        } else if (orientation === "landscape-secondary") {
            console.log("Mmmh... the screen is upside down!");
        } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
            console.log("Mmmh... you should rotate your device to landscape");
        } else if (orientation === undefined) {
            console.log("The orientation API isn't supported in this browser :(");
        }
    })

    useEffect(() => {
        window.addEventListener('orientationchange', onOrientationChange)
        window.addEventListener('resize', onOrientationChange)
        return () => window.removeEventListener('orientationchange', onOrientationChange),
            window.removeEventListener('resize', onOrientationChange)
    }, [])

    const onOrientationChange = () => {
        let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

        if (orientation === "landscape-primary") {
            console.log("That looks good2.");
        } else if (orientation === "landscape-secondary") {
            alert("Mmmh... the screen is upside down!")
            console.log("Mmmh... the screen is upside down2!");
        } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
            alert("Mmmh... you should rotate your device to landscape")
            console.log("Mmmh... you should rotate your device to landscape2");
        } else if (orientation === undefined) {
            console.log("The orientation API isn't supported in this browser 2:(");
        }
    }
    return (
        <div>useRotation</div>
    )
}
