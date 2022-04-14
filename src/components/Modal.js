function Modal(props) {
  if (!props.show) {
    document.body.style.overflow = "unset";
    return null;
  }

  document.body.style.overflow = "hidden";
  return (
    <div className="modal" onClick={props.onCancel}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="footer-inside">
          <div className="footer-text">
            <p className="modal-text">{props.children}</p>
            <div className="buttons buttons-right">
              <button className="almond" onClick={props.action}>
                Confirm
              </button>
              <button className="tomato" onClick={props.onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="footer-panel">
          <span className="hop">22</span>
          47
        </div>
      </div>
    </div>
  );
}

export default Modal;
