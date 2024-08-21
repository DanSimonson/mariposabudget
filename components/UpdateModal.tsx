"use client";

import React from "react";
import { transactionProps } from "@/types/transaction";
import { toast } from "react-toastify";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { motion } from "framer-motion";

const red = { background: "#F44336" };
const darkRed = { background: "#E53935" };

export const UpdateModal = ({ id }: transactionProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(red);

  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <Button
        className="bg-primary text-primary-background font-semibold dark:text-white dark:bg-primary"
        onClick={() => setOpenModal(true)}
        onMouseEnter={() => setColor(darkRed)}
        onMouseLeave={() => setColor(red)}
        style={color}
      >
        Edit
      </Button>
      <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col md:flex-row md:justify-around items-center gap-2">
            <div>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="Enter description..."
                //value={email}
                //onChange={(event) => setEmail(event.target.value)}
                required
                className="border border-black rounded-md py-2 bg-input"
              />
            </div>
            <div>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Enter amount..."
                step="0.01"
                required
                className="border border-black rounded-md py-2 bg-input"
              />
            </div>
            <select
              id="type"
              name="type"
              className="border border-black rounded-md py-3 px-2 bg-input"
              required
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer bg-primary text-black font-bold dark:text-white text-lg
              rounded-xl block mt-4 mr-0 mb-3 py-3 w-1/3 max-w-40 "
            >
              Update
            </motion.button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
