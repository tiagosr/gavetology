import './App.css'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import { Shelf } from './components/Shelf';

function App() {

  const onDragEnd = (event:DragEndEvent) => {
    const {active, over} = event;

    if (over && active.data.current.type.all((type:string) => over.data.current.includes(type))) {
      //
    }
  }

  return (
    <DndContext onDragEnd={onDragEnd}>
      <Shelf unitsHigh={3} unitsWide={3} sizeType='large' />
    </DndContext>
  )
}

export default App
