import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";


export interface ShelfSlotProps {
    sizeType: string,
    children?: React.ReactNode
}

export function ShelfSlot({sizeType, children}: ShelfSlotProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: 'shelfSlot',
        data: {
            accepts: ['drawer', sizeType]
        }
    })

    return <div className="shelfSlot" ref={setNodeRef}>{children}</div>;
}