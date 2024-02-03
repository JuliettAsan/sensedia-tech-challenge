export default function Modal({ isActive, handleClose, children }) {
  return (
    <div className={`modal ${isActive ? 'is-active' : ''} `}>
      <div className="modal-background" onClick={handleClose}></div>
      <div className="modal-content">
        <a href="#" className="modalBtnClose" onClick={handleClose}>
          X
        </a>
        {children}
      </div>
    </div>
  );
}
