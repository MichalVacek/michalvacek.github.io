import './ComponentStyles.css';

export default function StyledButton({ onClick, children }) {
    return (
        <button className="styled-button" onClick={onClick}>
            {children}
        </button>
    );
}