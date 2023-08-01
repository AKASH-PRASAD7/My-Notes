import React from "react";
import { FaPencil, FaTrashCan } from "react-icons/fa6";

const NoteCard = ({
  title,
  type,
  id,
  description,
  createdAt,
  update,
  Delete,
}) => {
  return (
    <>
      <section className="flex-col  gap-4 w-48  rounded-lg bg-gray-800">
        <div className="flex px-2 pt-2 pb-2 bg-gray-900 rounded-t-lg justify-between">
          <i
            onClick={() => update(id)}
            className="hover:text-cyan-700 text-lg cursor-pointer"
          >
            <FaPencil />
          </i>
          <i
            onClick={() => Delete(id)}
            className="hover:text-red-600 text-lg cursor-pointer"
          >
            <FaTrashCan />
          </i>
        </div>
        <div className="flex flex-col mt-4 justify-center">
          <label htmlFor="title" className="ml-2">
            Title:
          </label>
          <input
            className="text-cyan-800   rounded-lg px-2 outline-none m-2"
            type="text"
            readOnly
            name="title"
            id="title"
            value={title}
          />
          <label htmlFor="type" className="ml-2">
            Type:
          </label>
          <input
            className="text-cyan-800  rounded-lg px-2 outline-none m-2"
            type="text"
            readOnly
            name="type"
            id="type"
            value={type}
          />
          <label htmlFor="description" className="ml-2">
            Description:
          </label>
          <textarea
            className="text-cyan-800  rounded-lg px-2 outline-none m-2"
            readOnly
            value={description}
            name="description"
            cols="20"
            rows="3"
          />
          <label htmlFor="createdAt" className="ml-2">
            Created At:
          </label>
          <input
            className="text-cyan-800  rounded-lg px-2 outline-none m-2"
            type="text"
            name="createdAt"
            readOnly
            id="createdAt"
            value={createdAt}
          />
        </div>
      </section>
    </>
  );
};

export default NoteCard;
