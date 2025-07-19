import React, { useState, useRef, useEffect } from 'react';

const BRUSH_COLORS = ['#ef4444', '#facc15', '#f97316', '#22c55e', '#0ea5e9'];

function MapModal({ isOpen, onClose, images = [], mapName = '' }) {
  const [scale, setScale] = useState(1);
  const [index, setIndex] = useState(0);
  const imgRef = useRef(null);

  const [showCanvas, setShowCanvas] = useState(false);
  const canvasRef = useRef(null);
  const [strokes, setStrokes] = useState([]);
  const [currentStroke, setCurrentStroke] = useState([]);
  const [brushColorIdx, setBrushColorIdx] = useState(0);

  // Debounce time for keypress (ms)
  const lastKeyTimeRef = useRef(0);
  const KEY_DEBOUNCE_MS = 150;

  // Drawing handlers
  function getCanvasPos(e) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) * (canvas.width / rect.width),
      y: (e.clientY - rect.top) * (canvas.height / rect.height),
    };
  }

  function startDrawing(e) {
    if (!showCanvas) return;
    const pos = getCanvasPos(e);
    setCurrentStroke([{ ...pos }]);
  }

  function draw(e) {
    if (!showCanvas || currentStroke.length === 0) return;
    const pos = getCanvasPos(e);
    setCurrentStroke((prev) => [...prev, pos]);
  }

  function stopDrawing() {
    if (!showCanvas || currentStroke.length === 0) return;
    setStrokes((prev) => [...prev, { color: BRUSH_COLORS[brushColorIdx], points: currentStroke }]);
    setCurrentStroke([]);
  }

  useEffect(() => {
    if (!isOpen) {
      setScale(1);
      setIndex(0);
      setShowCanvas(false);
      setStrokes([]);
      setCurrentStroke([]);
      setBrushColorIdx(0);
    }
  }, [isOpen, images]);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      const now = Date.now();
      if (now - lastKeyTimeRef.current < KEY_DEBOUNCE_MS) return;
      lastKeyTimeRef.current = now;

      if (e.key === 'Escape') onClose();
      if (e.key.toLowerCase() === 'b') setShowCanvas((v) => !v);
      if (e.code === 'Space' && showCanvas) {
        e.preventDefault();
        setStrokes([]);
        setCurrentStroke([]);
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z' && showCanvas) {
        e.preventDefault();
        setStrokes((prev) => prev.slice(0, -1));
      }
      if (showCanvas && e.key.toLowerCase() === 'z' && !e.ctrlKey && !e.metaKey) {
        setBrushColorIdx((idx) => (idx + 1) % BRUSH_COLORS.length);
      }
      if (showCanvas && e.key.toLowerCase() === 'x') {
        setBrushColorIdx((idx) => (idx - 1 + BRUSH_COLORS.length) % BRUSH_COLORS.length);
      }
      if (e.key.toLowerCase() === 'q') {
        e.preventDefault();
        prevImage();
      }
      if (e.key.toLowerCase() === 'e') {
        e.preventDefault();
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, showCanvas]);

  useEffect(() => {
    if (!showCanvas) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;

      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      canvas.style.width = container.clientWidth + 'px';
      canvas.style.height = container.clientHeight + 'px';
      redrawAll();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [showCanvas, strokes]);

  useEffect(() => {
    if (showCanvas) redrawAll();
  }, [strokes, currentStroke, showCanvas, brushColorIdx]);

  const redrawAll = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    strokes.forEach(({ color, points }) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      points.forEach((pt, i) => (i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
      ctx.stroke();
    });

    if (currentStroke.length > 1) {
      ctx.strokeStyle = BRUSH_COLORS[brushColorIdx];
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      currentStroke.forEach((pt, i) => (i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y)));
      ctx.stroke();
    }
  };

  const prevImage = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    setScale(1);
  };

  const nextImage = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    setScale(1);
  };

  const handleWheel = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let newScale = scale - e.deltaY * 0.0015;
    newScale = Math.min(Math.max(newScale, 0.5), 3);
    setScale(newScale);
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#222',
          borderRadius: 12,
          width: '90vw',
          height: '90vh',
          padding: 20,
          boxSizing: 'border-box',
          position: 'relative',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          userSelect: 'none',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          {/* Map name left */}
          <h2
            id="map-modal-title"
            style={{
              margin: 0,
              userSelect: 'text',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            {mapName}
          </h2>

          {/* Controls & color info & close button right */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              userSelect: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {/* Drawing mode & color */}
            {showCanvas && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  color: '#ccc',
                  fontSize: 12,
                }}
              >
                
                <span
                  style={{
                    display: 'inline-block',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    backgroundColor: BRUSH_COLORS[brushColorIdx],
                    verticalAlign: 'middle',
                  }}
                  title={`Màu bút hiện tại: ${BRUSH_COLORS[brushColorIdx]}`}
                />
                
              </span>
            )}

            {/* Controls text */}
            <div style={{ fontSize: 12 }}>
              <b>B</b>: Bật Bút vẽ &nbsp;|&nbsp; Space: Xoá nét &nbsp;|&nbsp; Ctrl+Z: Undo &nbsp;|&nbsp; Z/X: Đổi màu &nbsp;|&nbsp; ESC: Đóng &nbsp;|&nbsp; Q/E: Chuyển hình
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Đóng modal"
              tabIndex={0}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: 28,
                cursor: 'pointer',
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>
        </div>

        {/* Image + canvas area */}
        {images.length > 0 ? (
          <div
            onWheel={handleWheel}
            style={{
              flexGrow: 1,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <img
              ref={imgRef}
              src={images[index]}
              alt={`${mapName} detail ${index + 1}`}
              style={{
                transform: `scale(${scale})`,
                transition: 'transform 0.1s',
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: 10,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
              draggable={false}
            />

            {images.length > 1 && !showCanvas && (
              <>
                <button
                  onClick={prevImage}
                  tabIndex={0}
                  style={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    color: 'white',
                    fontSize: 24,
                    padding: '6px 10px',
                    cursor: 'pointer',
                    borderRadius: 6,
                    userSelect: 'none',
                  }}
                  aria-label="Ảnh trước"
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  tabIndex={0}
                  style={{
                    position: 'absolute',
                    right: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    color: 'white',
                    fontSize: 24,
                    padding: '6px 10px',
                    cursor: 'pointer',
                    borderRadius: 6,
                    userSelect: 'none',
                  }}
                  aria-label="Ảnh tiếp"
                >
                  ›
                </button>
              </>
            )}

            {showCanvas && (
              <canvas
                ref={canvasRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'crosshair',
                  borderRadius: 10,
                  pointerEvents: 'auto',
                }}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
              />
            )}
          </div>
        ) : (
          <p>Không có ảnh chi tiết cho bản đồ này.</p>
        )}
      </div>
    </div>
  );
}

export default MapModal;
