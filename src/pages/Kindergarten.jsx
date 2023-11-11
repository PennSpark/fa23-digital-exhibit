import React, {useState, useEffect} from 'react';

import "./Kindergarten.css"

const Kindergarten = () => {
    // let [appleStyle, setAppleStyle] = useState({left: 100, top: 100})
    // let appleSpeed = {xpos: 1, ypos: 1}

    // // const [appleStyle, setAppleStyle] = useState({left: 100, top:100})
    // // const [appleSpeed, setAppleSpeed] = useState({xpos: 1, ypos: 1})

    // const updateApple = () => {
    //     let currX = appleStyle["left"]
    //     let currY = appleStyle["top"]
    //     let newX = currX + appleSpeed["xpos"]
    //     let newY = currY + appleSpeed["ypos"]
    //     console.log(newX, newY)
    //     setAppleStyle({left: newX, top: newY})
    // }

    // useEffect(() => {
    //     setInterval(() => {
    //         updateApple()
    //     }, 1000);
    // }, [])

    return(
        <>
            <div className="kindergarten-bg flex justify-center item-center">
                <div className="flex-col item-center justify-center">
                    <p className="kin-title">
                        re-experience your childhood
                    </p>
                    <p className="kin-subtitle left-auto right-auto">
                        take a bite of the apple!
                    </p>
                </div>
            </div>
            {/* <div className="fixed" style={appleStyle}>
                    <img src="/apple.png" alt="apple"/>
            </div> */}
        </>
    )
}

export default Kindergarten