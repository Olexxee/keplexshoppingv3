import React, { useRef, useState } from "react";
import { cn } from "../../../lib/cn";
import { Upload, X, File } from "lucide-react";

interface FileUploaderProps {
  onUpload?: (files: File[]) => void;
  multiple?: boolean;
  accept?: string;
  maxSize?: number; // in bytes
  maxFiles?: number;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
}

export const FileUploader = ({
  onUpload,
  multiple = false,
  accept,
  maxSize = 5 * 1024 * 1024, // 5MB
  maxFiles = 5,
  className,
  disabled,
  label = "Upload files",
  error,
}: FileUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    handleFiles(selected);
  };

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => {
      if (maxSize && file.size > maxSize) {
        alert(`File ${file.name} exceeds maximum size`);
        return false;
      }
      return true;
    });

    const finalFiles = multiple
      ? [...files, ...validFiles].slice(0, maxFiles)
      : validFiles.slice(0, 1);

    setFiles(finalFiles);
    onUpload?.(finalFiles);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleRemove = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onUpload?.(newFiles);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    handleFiles(dropped);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-8 text-center transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-border-primary",
          disabled && "opacity-50 cursor-not-allowed",
          error && "border-destructive",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          disabled={disabled || isUploading}
          className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
        <div className="flex flex-col items-center gap-2">
          <Upload size={32} className="text-muted-foreground" />
          <p className="text-sm text-foreground">
            {isDragging ? "Drop files here" : label}
          </p>
          <p className="text-xs text-muted-foreground">
            {multiple ? `Up to ${maxFiles} files` : "Single file"} • Max{" "}
            {formatFileSize(maxSize)}
          </p>
          {accept && (
            <p className="text-xs text-muted-foreground">
              Accepted: {accept.split(",").join(", ")}
            </p>
          )}
        </div>
      </div>

      {error && <span className="text-sm text-destructive">{error}</span>}

      {files.length > 0 && (
        <div className="flex flex-col gap-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-background-secondary rounded-lg"
            >
              <div className="flex items-center gap-3">
                <File size={20} className="text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className="p-1 hover:bg-background rounded"
                disabled={isUploading}
              >
                <X size={16} className="text-muted-foreground" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
