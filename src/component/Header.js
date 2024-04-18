
import React from 'react';
import { Toolbar } from 'primereact/toolbar';

export default function Header() {
    

    const centerContent = (
        <div className="flex flex-wrap align-items-center gap-3 text-white">
           <h2>MoviesApp</h2>
        </div>
    );

    

    return (
        <div className="card">
            <Toolbar center={centerContent} className='head-tit'/>
        </div>
    );
}
        