import { useState, ReactNode } from 'react';

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [body, setBody] = useState<ReactNode | null>(null);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(prev => !prev);

    const openWith = (body: ReactNode) => {
        setBody(body);
        setIsOpen(true);
    }

    return {
        isOpen,
        body,
        open,
        openWith,
        close,
        onClose: close,
        toggle,
        set: setIsOpen,
    }
}