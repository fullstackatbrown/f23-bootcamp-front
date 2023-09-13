import { FormEvent, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
import axios from "axios";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NewPostModal = ({ isOpen, onClose }: Props) => {
  // TODO: Fill out this handleSubmit function, which defines what happens
  // when the user submits their post
  function handleSubmit(e: any) {}

  // TODO: Implement a modal for creating a new post
  return;
};

export default NewPostModal;
