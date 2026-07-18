import React, { useRef, useState } from "react";
import { cn } from "../../../lib/cn";
import { X, Image as ImageIcon } from "lucide-react";

interface ImageUploaderProps {
  onUpload?: (files: File[]) => void;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  className?: string;
  disabled?: boolean;
  label?: string;
  error?: string;
  previews?: string[];
  aspectRatio?: "square" | "video" | "auto";
}

export const ImageUploader = ({
  onUpload,
  multiple = false,
  maxSize = 5 * 1024 * 1024,
  maxFiles = 5,
  className,
  disabled,
  label = "Upload images",
  error,
  previews = [],
  aspectRatio = "auto",
}: ImageUploaderProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const aspectRatioClasses = {
    square: "aspect-square",
    video: "aspect-video",
    auto: "",
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    handleFiles(selected);
  };

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter((file) => {
      if (!file.type.startsWith("image/")) {
        alert(`${file.name} is not an image`);
        return false;
      }
      if (maxSize && file.size > maxSize) {
        alert(`Image ${file.name} exceeds maximum size`);
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

  const createImagePreview = (file: File) => {
    return URL.createObjectURL(file);
  };

  const allPreviews = [...previews, ...files.map(createImagePreview)];

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div
        className={cn(
          "relative border-2 border-dashed rounded-lg p-6 text-center transition-colors",
          aspectRatioClasses[aspectRatio],
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
          accept="image/*"
          multiple={multiple}
          onChange={handleFileChange}
          disabled={disabled || isUploading}
          className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
        />
        <div className="flex flex-col items-center gap-2">
          <ImageIcon size={32} className="text-muted-foreground" />
          <p className="text-sm text-foreground">
            {isDragging ? "Drop images here" : label}
          </p>
          <p className="text-xs text-muted-foreground">
            {multiple ? `Up to ${maxFiles} images` : "Single image"} • Max{" "}
            {maxSize / (1024 * 1024)}MB
          </p>
        </div>
      </div>

      {error && <span className="text-sm text-destructive">{error}</span>}

      {allPreviews.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {allPreviews.map((preview, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden border border-border-primary"
            >
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                className="w-full h-24 object-cover"
              />
              {index >= previews.length && (
                <button
                  onClick={() => handleRemove(index - previews.length)}
                  className="absolute top-1 right-1 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X size={12} className="text-white" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
