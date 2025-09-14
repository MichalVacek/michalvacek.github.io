import './ComponentStyles.css';
import { useState } from 'react';

export default function Dropdown({parameters}) {
    const [isOpen, setIsOpen] = useState(false);
    const selections = parameters.selections || [];
    const hasSelections = selections.length > 1;
    const options = parameters.options || [];

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={() => hasSelections ? setIsOpen(!isOpen) : selections[0].onClick()}>
                {parameters.name ?? 'Menu'}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    {selections.map((selection, index) => (
                        <div key={index} className="dropdown-item">
                            <button className="dropdown-button" onClick={() => { selection.onClick(); setIsOpen(false); }}>
                                {selection.name}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>);
}