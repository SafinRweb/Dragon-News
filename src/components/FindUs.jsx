import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaThreads, FaTwitch, FaX } from 'react-icons/fa6';

const FindUs = () => {
    const handleSocial=()=>{
        document.getElementById("apply_modal").showModal();
    }
    return (
        <div className='mb-5'>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100 *:py-6">
                <button onClick={() => handleSocial()} className="btn join-item justify-start"><FaFacebook />Facebook</button>
                <button onClick={() => handleSocial()} className="btn join-item justify-start"><FaInstagram />Instagram</button>
                <button onClick={() => handleSocial()} className="btn join-item justify-start"><FaThreads />Threads</button>
                
                <dialog id="apply_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Social's</h3>
                        <p className="py-4">
                               Coming Soon!!!
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn btn-neutral btn-sm">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default FindUs;