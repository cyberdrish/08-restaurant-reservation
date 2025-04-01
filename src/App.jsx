import { useState } from "react";
import BookTableForm from "./Components/BookTableForm";
import Modal from "./Components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center min-h-screen">
      {isModalOpen && (
        <Modal onModelClose={setIsModalOpen}>
          <BookTableForm />
        </Modal>
      )}
      <button
        type="submit"
        className="border-2 rounded-xl m-6 p-3 bg-sky-600 text-amber-50"
        onClick={() => setIsModalOpen(true)}
      >
        Book a table
      </button>
    </div>
  );
}

export default App;
