import './Layout.css';
import Dropdown from './components/Dropdown.js';

export default function Layout({ children, navigate }) {
    return (
        <div class='whole-page'>
            <div class='top-navigation'>
                <Dropdown
                    parameters={{
                        selections:
                        [
                            { name: 'Home', onClick: () => navigate('/') },
                            { name: 'About', onClick: () => navigate('/about') },
                            { name: 'Contact', onClick: () => navigate('/contact') }
                        ],
                        name: 'Home',
                    }}
                />
                <Dropdown
                    parameters={{
                        selections:
                        [
                            { name: 'About', onClick: () => navigate('/about') }
                        ],
                        name: 'About'
                    }}
                />
            </div>
            <div class='content'>
                {children}
            </div>
        </div>
    );
}