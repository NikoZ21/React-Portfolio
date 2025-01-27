import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();

  function handleSave() {
    const enteredData = {
      title: title.current.value,
      description: description.current.value,
      dueDate: date.current.value,
    };

    if (
      enteredData.title.trim() === "" ||
      enteredData.description.trim() === "" ||
      enteredData.dueDate.trim() === ""
    ) {
      dialog.current.open();
      return;
    }

    onAdd(enteredData);
  }

  return (
    <>
      <Modal ref={dialog} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">
          Soemthing went wrong
        </h2>
        <p className="text-stone-600 mb-4">
          {" "}
          Oops ... looks like you forgot to enter a vale.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={date} label="Date" />
        </div>
      </div>
    </>
  );
}
