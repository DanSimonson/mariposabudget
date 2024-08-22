"use client";

import React, { useRef, useState } from "react";
import { transactionProps } from "@/types/transaction";
import editTransaction from "@/app/actions/editTransaction";
import { toast } from "react-toastify";
import { Button, Modal } from "flowbite-react";
import { motion } from "framer-motion";

const red = { background: "#F44336" };
const darkRed = { background: "#E53935" };

export const UpdateModal = ({ id, text, amount }: transactionProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState(red);
  const [textValue, setText] = useState(text);
  const [amountValue, setAmount] = useState(amount);
  const [typeValue, setType] = useState("");

  function onCloseModal() {
    setOpenModal(false);
  }

  const handleEdit = () => {
    setOpenModal(true);

    if (amount >= 0) {
      setType("income");
    } else if (amount < 0) {
      setType("expense");
    }
  };

  const clientAction = async (formData: FormData) => {
    try {
      let result = await editTransaction(formData, id);
      toast.success("Transaction Updated");
      setOpenModal(false);
    } catch (error) {
      toast.error("transaction update failed");
      setOpenModal(false);
      console.log("error: ", error);
    }
  };

  return (
    <>
      <Button
        className="bg-primary text-primary-background font-semibold dark:text-white dark:bg-primary"
        onClick={handleEdit}
        onMouseEnter={() => setColor(darkRed)}
        onMouseLeave={() => setColor(red)}
        style={color}
      >
        Edit
      </Button>
      <Modal show={openModal} size="4xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form ref={formRef} action={clientAction}>
            <div className="flex flex-col md:flex-row md:justify-around items-center gap-2">
              <div>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Enter description..."
                  value={textValue}
                  onChange={(event) => setText(event.target.value)}
                  required
                  className="border border-black rounded-md py-2 bg-input"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={amountValue}
                  onChange={(event) =>
                    setAmount(parseFloat(event.target.value))
                  }
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
                value={typeValue}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  setType(event.target.value)
                }
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
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
