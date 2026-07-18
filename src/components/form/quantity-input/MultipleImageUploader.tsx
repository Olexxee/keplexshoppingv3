import React, { useState } from "react";
import { cn } from "../../../lib/cn";
import { X, Image, GripVertical } from "lucide-react";
import { ImageUploader } from "./ImageUploader";

interface ImageItem {
  id: string;
  file?: File;
  url?: string;
  isPrimary?: boolean;
}

interface MultipleImageUploaderProps {
  images?: ImageItem[];
  onChange?: (images: ImageItem[]) => void;
  maxImages?: number;
  className?: string;
  disabled?: boolean;
  error?: string;
}

export const MultipleImageUploader = ({
  images = [],
  onChange,
  maxImages = 10,
  className,
  disabled,
  error,
}: MultipleImageUploaderProps) => {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  const handleUpload = (files: File[]) => {
    const newImages = files.map((file) => ({
      id: `img-${Date.now()}-${Math.random()}`,
      file,
      isPrimary: false,
    }));

    // If no primary image, set the first as primary
    if (images.length === 0 && newImages.length > 0) {
      newImages[0].isPrimary = true;
    }

    onChange?.([...images, ...newImages].slice(0, maxImages));
  };

  const handleRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    // If primary was removed, set first as primary
    if (newImages.length > 0 && !newImages.some((img) => img.isPrimary)) {
      newImages[0].isPrimary = true;
    }
    onChange?.(newImages);
  };

  const handleSetPrimary = (index: number) => {
    const newImages = images.map((img, i) => ({
      ...img,
      isPrimary: i === index,
    }));
    onChange?.(newImages);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const newImages = [...images];
    const [draggedItem] = newImages.splice(draggedIndex, 1);
    newImages.splice(index, 0, draggedItem);
    onChange?.(newImages);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const getImageUrl = (image: ImageItem) => {
    if (image.url) return image.url;
    if (image.file) return URL.createObjectURL(image.file);
    return "";
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <ImageUploader
        onUpload={handleUpload}
        multiple={true}
        maxFiles={maxImages - images.length}
        disabled={disabled || images.length >= maxImages}
        label={`Upload images (${images.length}/${maxImages})`}
        error={error}
      />

      {images.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <div
              key={image.id}
              draggable={!disabled}
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={cn(
                "relative group rounded-lg overflow-hidden border-2 transition-all",
                image.isPrimary ? "border-primary" : "border-border-primary",
                draggedIndex === index && "opacity-50",
              )}
            >
              <div className="relative aspect-square">
                {getImageUrl(image) ? (
                  <img
                    src={getImageUrl(image)}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-background-secondary flex items-center justify-center">
                    <Image size={24} className="text-muted-foreground" />
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                {!disabled && (
                  <>
                    {!image.isPrimary && (
                      <button
                        onClick={() => handleSetPrimary(index)}
                        className="p-1 bg-white rounded text-xs font-medium"
                      >
                        Set Primary
                      </button>
                    )}
                    <button
                      onClick={() => handleRemove(index)}
                      className="p-1 bg-white rounded"
                    >
                      <X size={14} />
                    </button>
                    <button className="p-1 bg-white rounded cursor-grab">
                      <GripVertical size={14} />
                    </button>
                  </>
                )}
              </div>

              {image.isPrimary && (
                <div className="absolute top-1 left-1 px-2 py-0.5 bg-primary text-white text-xs rounded">
                  Primary
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
