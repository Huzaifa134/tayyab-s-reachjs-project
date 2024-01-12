import React from 'react';
const Layout = ({ children }) => (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
        <main className="flex-grow">{'{'}children{'}'}</main>
        <footer>
            <small>© mash - 2021</small>
        </footer>
    </div>

);

export default Layout;