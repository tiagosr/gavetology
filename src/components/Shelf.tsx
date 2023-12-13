//import { useState } from "react";

import { ShelfSlot } from "./ShelfSlot";


export interface ShelfProps {
    unitsWide: number,
    unitsHigh: number,
    sizeType: string,
}

export function Shelf({unitsWide, unitsHigh, sizeType}:ShelfProps) {
    return <div className={`shelf shelf-${sizeType}`}>
        {new Array(unitsHigh).map((_, y) => (
            new Array(unitsWide).map((_, x) => (
                <ShelfSlot key={`${y}-${x}`} sizeType={sizeType} />
            ))
        ))}
    </div>;
}