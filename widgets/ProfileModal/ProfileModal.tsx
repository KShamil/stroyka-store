import React, { FC, useState } from "react";
import { ProfileModalProps } from "./ProfileModal.props";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import styles from "./ProfileModal.module.css";
import ProfileIcon from "./profileIcon.svg";
import { ProfileModalItems } from "@/features/ProfileModalItems/ProfileModalItems";
import { RegisterModalItems } from "@/features/RegisterModalItems/RegisterModalItems";

export const ProfileModal: FC<ProfileModalProps> = ({
  ...props
}): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }

  const modal = openModal ? (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody className={styles.modalBody}>
          <RegisterModalItems />
        </ModalBody>
      </ModalContent>
    </Modal>
  ) : (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody className={styles.modalBody}>
          <ProfileModalItems openModal={handleOpenModal}/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      <div onClick={onOpen} className={styles.profileBtn}>
        <ProfileIcon className={styles.icon} />
        <span>Профиль</span>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className={styles.modalBody}>
            {modal}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
