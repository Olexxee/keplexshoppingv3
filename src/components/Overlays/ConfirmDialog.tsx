import React from "react";
import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";
import { Dialog } from "./Dialog";

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "default" | "destructive" | "success" | "warning";
  isLoading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Are you sure?",
  description,
  confirmText,
  cancelText,
  variant = "default",
  isLoading = false,
  className,
  icon,
}: ConfirmDialogProps) => {
  const variantConfig = {
    default: {
      confirmText: confirmText || "Confirm",
      icon: <Info className="w-6 h-6 text-primary" />,
      confirmVariant: "default" as const,
    },
    destructive: {
      confirmText: confirmText || "Delete",
      icon: <XCircle className="w-6 h-6 text-destructive" />,
      confirmVariant: "destructive" as const,
    },
    success: {
      confirmText: confirmText || "Confirm",
      icon: <CheckCircle className="w-6 h-6 text-success" />,
      confirmVariant: "success" as const,
    },
    warning: {
      confirmText: confirmText || "Proceed",
      icon: <AlertTriangle className="w-6 h-6 text-warning" />,
      confirmVariant: "warning" as const,
    },
  };

  const config = variantConfig[variant];

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      description={description}
      confirmText={config.confirmText}
      cancelText={cancelText || "Cancel"}
      onConfirm={onConfirm}
      onCancel={onClose}
      variant={config.confirmVariant}
      isLoading={isLoading}
      className={className}
      closeOnOverlayClick={!isLoading}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">{icon || config.icon}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </Dialog>
  );
};

// Pre-configured confirm dialogs
export const DeleteConfirmDialog = (
  props: Omit<ConfirmDialogProps, "variant" | "confirmText">,
) => (
  <ConfirmDialog
    {...props}
    variant="destructive"
    confirmText="Delete"
    title="Delete Item"
    description={
      props.description ||
      "This action cannot be undone. Are you sure you want to delete this item?"
    }
  />
);

export const WarningConfirmDialog = (
  props: Omit<ConfirmDialogProps, "variant" | "confirmText">,
) => (
  <ConfirmDialog
    {...props}
    variant="warning"
    confirmText="Proceed"
    title="Warning"
    description={
      props.description || "Please confirm this action before proceeding."
    }
  />
);

export const SuccessConfirmDialog = (
  props: Omit<ConfirmDialogProps, "variant" | "confirmText">,
) => (
  <ConfirmDialog
    {...props}
    variant="success"
    confirmText="Confirm"
    title="Confirm Action"
    description={props.description || "Please confirm this action."}
  />
);
