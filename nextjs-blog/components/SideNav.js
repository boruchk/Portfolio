import React from 'react';
import { Fragment, useState } from 'react'


function SideNav({ items, heading, onSelectItem }, navProps) {
    const [selectIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <nav>
                <h1>{heading}</h1>
                {items.map((item, index, onSelectItem) => (
                    <button
                        class={
                            selectIndex === index
                                ? "container active"
                                : "container"
                        }
                        key={item}
                        onClick={() => { setSelectedIndex(index) }}
                        type="button"
                    >
                        {item}
                    </button>
                ))}
            </nav>
        </>
    )
}

export default SideNav;