import React, {useEffect} from "react"
import animateCellularAutomaton from "@/components/avatar/logic"

export const Avatar = () => {
    useEffect(() => {
        animateCellularAutomaton("./profile.jpg", 500, 0.9)
    }, [])
    return (
        <canvas className="rounded-full size-64" id={"automaton-canvas"}></canvas>
    )
}