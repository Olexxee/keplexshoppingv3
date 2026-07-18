import React, { useState, useRef } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../../ui/actions/button/Button";
import { ZoomIn, ZoomOut } from "lucide-react";

interface ProductImageZoomProps {
  src: string;
  alt?: string;
  className?: string;
  zoomScale?: number;
  lensSize?: number;
}

export const ProductImageZoom = ({
  src,
  alt = "Product image",
  className,
  zoomScale = 2.5,
  lensSize = 100,
}: ProductImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });

    const lensX = e.clientX - rect.left - lensSize / 2;
    const lensY = e.clientY - rect.top - lensSize / 2;
    setLensPosition({
      x: Math.max(0, Math.min(lensX, rect.width - lensSize)),
      y: Math.max(0, Math.min(lensY, rect.height - lensSize)),
    });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden cursor-crosshair", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {isZoomed && (
        <>
          <div
            className="absolute pointer-events-none border-2 border-white shadow-lg rounded-full"
            style={{
              width: lensSize,
              height: lensSize,
              left: lensPosition.x,
              top: lensPosition.y,
              background: `url(${src})`,
              backgroundSize: `${zoomScale * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `url(${src})`,
              backgroundSize: `${zoomScale * 100}%`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              opacity: 0.5,
            }}
          />
        </>
      )}

      <Button
        variant="secondary"
        size="sm"
        onClick={() => setIsZoomed(!isZoomed)}
        className="absolute bottom-2 right-2 p-1.5 rounded-full shadow-lg"
      >
        {isZoomed ? <ZoomOut size={16} /> : <ZoomIn size={16} />}
      </Button>
    </div>
  );
};
