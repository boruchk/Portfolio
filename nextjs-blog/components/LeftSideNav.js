import { Fragment, useState } from "react";

// interface navProps {
//     items: string [];
//     heading: String;
//     onSelectItem: (item: string) => void
// }

function LeftNav({ items, heading, onSelectItem }, navProps) {
    const [selectIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
                <h1>{heading}</h1>
                {items.map((item, index, onSelectItem) => (
                    <button
                        class={
                            selectIndex === index
                                ? "btn btn-primary active"
                                : "btn btn-primary"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index)
                        }}
                        type="button"
                    >
                        {item}
                    </button>))

                }
            </div>
        </>
    )
}

export default LeftNav;
