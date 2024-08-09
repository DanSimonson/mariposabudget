"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import deleteTransaction from "@/app/actions/deleteTransaction";
import { toast } from "react-toastify";

const red = { background: "#F44336" };
const darkRed = { background: "#E53935" };

type t = {
  id: string;
  amount?: number;
  text?: string;
};

export function BudgetModal({ id }: t) {
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(red);

  const handleDelete = async () => {
    const { message, error } = await deleteTransaction(id);
    if (error) {
      toast.error(error);
    }

    setOpenModal(false);
    toast.success(message);
  };

  return (
    <>
      <Button
        className="bg-primary text-primary-background font-semibold dark:text-white dark:bg-primary"
        onClick={() => setOpenModal(true)}
        onMouseEnter={() => setColor(darkRed)}
        onMouseLeave={() => setColor(red)}
        style={color}
      >
        Delete
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleDelete()}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
