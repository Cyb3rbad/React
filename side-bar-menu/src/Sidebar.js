import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar">
            <button onClick={toggleDropdown}>Toggle Menu</button>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li>Home</li>
                    <li>Info</li>
                    <li>Settings</li>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
