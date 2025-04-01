const Modal = ({ onModelClose, children }) => {
  return (
    <div className="fixed inset-0 bg-[#000000cd]  ">
      <div className="fixed top-[10dvh] left-0 right-0 mx-auto bg-white rounded-2xl p-2 max-w-md">
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={() => onModelClose(false)}
            className="m-1"
          >
            ❌
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
