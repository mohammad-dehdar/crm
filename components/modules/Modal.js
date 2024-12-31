import React from 'react'

function Modal({ setIsModalOpen, deleteHandler }) {
    return (
        <div className="modal w-svw h-svh fixed top-0 left-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="modal-box bg-white p-8 rounded-lg text-slate-900">
                <h3 className="font-bold text-lg">Delete Customer</h3>
                <p className="py-4">
                    Are you sure you want to delete this customer?
                </p>
                <div className="modal-action font-semibold">
                    <button
                        className="bg-gray-200 px-4 py-2 rounded-lg mr-4"
                        onClick={() => setIsModalOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-red-400 px-4 py-2 rounded-lg mr-4 text-white"
                        onClick={deleteHandler}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal