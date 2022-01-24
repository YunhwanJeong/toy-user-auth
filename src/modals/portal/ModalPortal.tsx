import React from 'react';
import ReactDOM from 'react-dom';

function ModalPortal({ children }: { children: React.ReactNode }) {
    const modalRootElement = document.getElementById('modal-root')!;
    return ReactDOM.createPortal(children, modalRootElement);
}

export default ModalPortal;
