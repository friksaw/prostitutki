'use client'
import React, { useEffect, useRef } from 'react';

const FractalCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;

        const times = (n: number, callback: (i: number) => void, i = 0) => {
            callback(i);
            if (i < n - 1) {
                times(n, callback, i + 1);
            }
        };

        const remove = (size: number, x: number, y: number, zoom: number, depth = 0) => {
            if (depth > 5 || x > 500 || y > 500) {
                return;
            }
            ctx.fillStyle = 'white';
            times(3, (row) => {
                times(3, (col) => {
                    if (row === 1 && col === 1) {
                        ctx.fillRect(
                            (x + (col * size) / 3) * zoom,
                            (y + (row * size) / 3) * zoom,
                            (size / 3) * zoom,
                            (size / 3) * zoom
                        );
                    } else {
                        remove(
                            size / 3,
                            row * (size / 3) + x,
                            col * (size / 3) + y,
                            zoom,
                            depth + 1
                        );
                    }
                });
            });
        };

        const animate = (zoom = 1) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            remove(500, 0, 0, zoom);
            let nextZoom = zoom + 0.1;
            if (nextZoom > 3) {
                nextZoom = 1;
            }
            setTimeout(() => animate(nextZoom), 200 - zoom * 60);
        };

        animate();

        // Cleanup
        return;
    }, []);

    return <canvas ref={canvasRef} height={14} width={20} style={{ position: 'absolute' }}></canvas>;
};

export default FractalCanvas;
