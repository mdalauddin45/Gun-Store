import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modal, setModal] = useState({});
    const { gun, countIncrease } = props;
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
                    <p>ID: {id} <br /> Capacity: {capacity} <br /> Category: {category} <br /> Price: {price}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{action}</div>
                        <div className="badge badge-outline">{bullet}</div>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => countIncrease()} className="btn btn-sm">Add to cart</button>
                        <label
                            onClick={() => setModal(gun)}
                            htmlFor="my-modal-3" className="btn btn-sm btn-success modal-button">Details</label>
                    </div>
                    {
                        modal && <Modal modal={modal} setModal={setModal}></Modal>
                    }
                </div>
            </div>
        </div >
    );
};

export default SingleGun;