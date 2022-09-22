import React from 'react';

const SingleGun = (props) => {
    console.log(props);
    const { gun, countIncrease } = props;
    console.log(gun);
    const { action, capacity, category, id, img, name, price, bullet } = gun;

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure>
                    <img className='w-96 h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => countIncrease()} className="btn btn-sm">Add to cart</button>
                        <button className="btn btn-sm btn-success">Details</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleGun;