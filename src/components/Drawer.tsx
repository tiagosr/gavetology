import { useDraggable } from "@dnd-kit/core";

export interface DrawerProps {
    sizeType: string,
    children?: React.ReactNode
}

export function Drawer({sizeType, children}:DrawerProps) {

    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'drawer',
        data: {
            type: ['drawer', sizeType],
            accepts: ['item']
        }
    })

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
    </div>
}