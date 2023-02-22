import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import BasicComponentList from '../leftArea/BasicComponentList';

const MiddleComponentArea = () => {
    return (
        <DragDropContext onDragEnd={(result) => console.log(result)}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        <BasicComponentList />
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default MiddleComponentArea;
