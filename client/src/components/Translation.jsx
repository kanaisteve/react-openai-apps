import { useState } from 'react'

export default function Translation({ handleSubmit, setInput }) {
    return(
        <div>
            <textarea className="text-area" id="" cols={40} rows={10} onChange={(e) => setInput(e.target.value)}></textarea>
            <button className="action-btn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}