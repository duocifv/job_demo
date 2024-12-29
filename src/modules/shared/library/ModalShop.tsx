"use client";
import Modal from "@/components/Modal";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface ModalShopProps {
    isModal: boolean;
    setIsModal: (_: boolean) => void;
}

const ModalShop = ({ isModal, setIsModal }: ModalShopProps) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (isModal) setIsVisible(true)
    }, [isModal])
    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => {
            setIsModal(false)
        }, 500);
    }

    return (
        <div
            className={classNames("effect bottom-0 opacity-0 relative")}
            style={{
                opacity: !isVisible ? 0 : 1,
            }}
        >
            <Modal
                isOpen={isModal}
                title="Accessible Modal"
                onClose={handleClose}
                style={{
                bottom: !isVisible ? 0 : 30,
                }}
            >
                <p className="text-gray-600">
                    This is a modal built with TypeScript and ARIA attributes to ensure
                    accessibility. You can customize this modal further as needed.
                </p>
            </Modal>
        </div>
    );
};

export default ModalShop;
