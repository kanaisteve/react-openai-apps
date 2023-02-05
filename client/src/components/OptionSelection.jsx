import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
    return(
        <div>
            <>
                <h1 className="heading">OpenAI App</h1>
                <div className="grid-main">
                    { arrayItems.map((item) => {
                        return(
                            <div className="grid-item" key={item.id} onClick={() => selectOption(item.options)}>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                        )
                    }) }
                </div>
            </>
        </div>
    )
}