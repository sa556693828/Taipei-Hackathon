import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { IoMdAddCircle } from "react-icons/io";
import InputFormat from "./InputFormat/InputFormat";

export default function InputModal(props: any) {
  const { isOpen, onClose } = props;
  const [member, setMember] = React.useState([
    { name: "", telegram: "", email: "" },
  ]);
  const data = {
    groupName: "",
    groupMember: member,
  };
  const cleanData = () => {
    setMember([{ name: "", telegram: "", email: "" }]);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={cleanData}
      size="6xl"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent className="px-20 py-6">
        <ModalHeader className="flex justify-center text-3xl">
          SIGN UP
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="flex flex-col text-center">
          <p className="mb-8 text-5xl">報名</p>
          {member.map((item, index) => (
            <InputFormat key={index} index={index} />
          ))}
        </ModalBody>

        <ModalFooter className="flex w-full justify-between">
          <Button
            variant="ghost"
            className="-ml-3 flex items-center justify-start gap-2"
            onClick={() => {
              setMember([...member, { name: "", telegram: "", email: "" }]);
            }}
          >
            <IoMdAddCircle className="h-6 w-6" />
            新增組員
          </Button>
          <button
            className="w-60 rounded-full bg-white p-3 text-lg font-semibold text-black transition-all hover:bg-gray-300"
            onClick={() => {
              console.log(member);
            }}
          >
            送出報名
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
