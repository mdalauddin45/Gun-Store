import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    // console.log(guns);
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-6 '>Welcome to our Gun Store!!</h1>
            <p className='text-xl text-center mb-10 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum omnis iste sequi, est illum commodi accusamus veniam dicta sed autem!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-10'>
                {
                    guns.map((gun) => (
                        <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>
                    ))
                }
            </div>
        </div>
    );
};

export default AllGun;