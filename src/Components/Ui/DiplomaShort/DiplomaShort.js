'use client'

import { useState } from "react";

const DiplomaShort = () => {
    const [diploma, setDiploma] = useState(false);
    return (
        <>
            <p className={diploma ? 'inline' : 'hidden'}>programming, database management systems, operating systems, and computer networks .</p><span className="cursor-pointer underline ml-1 text-[#00A6E8]" onClick={() => setDiploma(!diploma)}>{diploma ? 'See less' : 'see more'}</span>
        </>
    );
};

export default DiplomaShort;