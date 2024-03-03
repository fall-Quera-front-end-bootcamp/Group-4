import React, { useState } from 'react';
import moreItems from '../../Components/assets/icons/moreItems.png';

interface Item {
    id: number;
    color: string;
    padding: string;
}

interface ProjectItemsProps {
    nameProject: string;
}

function ProjectItems({ nameProject }: ProjectItemsProps) {
    const [itemsState, setItemsState] = useState<Item[]>([
        { id: 1, color: 'bg-blue-100', padding: 'pl-[5px]' },
        { id: 2, color: 'bg-blue-100', padding: 'pl-[5px]' },
        { id: 3, color: 'bg-blue-100', padding: 'pl-[5px]' }
    ]);

    const handleItemClick = (itemId: number) => {
        const updatedItemsState = itemsState.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    color: 'bg-white',
                    padding: 'pr-[5px]'
                };
            } else {
                return {
                    ...item,
                    color: 'bg-blue-100',
                    padding: 'pl-[5px]'
                };
            }
        });
        setItemsState(updatedItemsState);
    };

    const fontStyle: React.CSSProperties = {
        fontWeight: 500,
        fontSize: "16px"
    };

    return (
        <div className='w-[214px] h-[130px] flex flex-col justify-between items-center'>
            {itemsState.map(item => (
                <div key={item.id} className={`w-[246px] h-[31px] flex justify-between items-center ${item.color} ${item.padding}`} style={{ borderRadius: "4px" }} onClick={() => handleItemClick(item.id)}>
                    <img src={moreItems} alt="moreItems" className='cursor-pointer' />
                    <h1 style={fontStyle} className='cursor-pointer'>{nameProject} {item.id}</h1>
                </div>
            ))}
        </div>
    );
}

export default ProjectItems;
