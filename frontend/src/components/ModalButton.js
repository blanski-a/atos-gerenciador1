import React from 'react';

const ModalButton = ({modal, setModal, classes}) => {
    return ( 
        <>
            <button 
                className={`btn ${classes}`}
                onClick={() => setModal(!modal)}
              >
              {modal ? 'Close' : 'Criar'}
            </button>
        </>
     );
}
 
export default ModalButton;