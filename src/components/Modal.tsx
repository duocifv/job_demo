import classNames from 'classnames';
import { FC, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    style: any;
}

const Modal: FC<ModalProps> = ({ isOpen, style, onClose, title, children }) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={classNames("fixed inset-0 z-40 flex flex-col justify-end bg-black bg-opacity-50")}
            onClick={onClose}
        >
            <div
                className="effect bottom-0 relative w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg"
                style={style}
                onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    ✕
                </button>

                {/* Modal Header */}
                <div className="px-6 py-4 border-b">
                    <h2 id="modal-title" className="text-lg font-semibold text-gray-800">
                        {title}
                    </h2>
                </div>

                {/* Modal Content */}
                <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">
                    {children}
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 border-t flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
