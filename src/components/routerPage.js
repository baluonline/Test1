import React from 'react';
import { Link } from 'react-router-dom';

export const pageOne = () => {
    return( 
        <div>
            Page One
            <button> click me</button>
            <hr/>
             {/* bad ancor */}
             <a href="/pagetwo">Go to page2</a>
             <hr />
             <Link to="/pagetwo">Go to page2</Link>

        </div>
    );
}

export const pageTwo = () => {
    return( 
        <div>
            Page Two
            <hr/>
            {/* Bad ancor  */}
            <a href="/">Go to page</a>
            <hr/>
            <Link to="/">Go to page</Link>
        </div>
    );
}
