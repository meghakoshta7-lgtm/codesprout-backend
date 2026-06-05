import { DialogHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
};

export const Modal = forwardRef<HTMLDialogElement, ModalProps>(
  ({ className, isOpen, onClose, title, size = 'md', children, ...props }, ref) => {
    return (
      <dialog
        ref={ref}
        open={isOpen}
        onClose={onClose}
        className={clsx(
          'relative bg-[#111827] rounded-2xl shadow-xl border border-white/10',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {title && (
          <div className="px-6 py-4 border-b border-white/10">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        )}
        <div className="px-6 py-4">{children}</div>
        <div className="px-6 py-4 border-t border-white/10 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-400 hover:bg-white/5 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';
