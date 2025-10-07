import { useState, useRef, useEffect } from 'react';

function ImageMagnifier ({ imgSrc, zoom, width, height }) {
    const [cursorPoint, setCursorPoint] = useState({x: 0, y: 0});
    const [bgSize, setBgSize] = useState({width: 0, height: 0 });
    const [showGlass, setShowGlass] = useState(false);
    const glassRef = useRef(null);
    const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      setBgSize({
        width: imgRef.current.width * zoom,
        height: imgRef.current.height * zoom,
      });
    }
  }, [imgSrc, zoom]);


    const handleMouse = (e) => {
        const img = imgRef.current;
        const glass = glassRef.current;

        const {left , top} = img.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        const glassWidth = glass.offsetWidth /2;
        const glassHeight = glass.offsetHeight / 2;

        let newX = x - glassWidth;
        let newY = y - glassHeight;

        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        if (newX > img.width - glass.offsetWidth) newX = img.width - glass.offsetWidth;
        if (newY > img.height - glass.offsetHeight) newY = img.height - glass.offsetHeight;

        setCursorPoint({x: newX, y: newY});

        glass.style.backgroundPosition = `-${(x * zoom) - glassWidth}px -${(y * zoom) - glassHeight}px`;
  };
    return (

        <div className="magnifier"
        onMouseEnter={() => setShowGlass(true)}
        onMouseLeave={() => setShowGlass(false)}
        onMouseMove={handleMouse}
        onTouchMove={handleMouse}
        >
            <img
                ref={imgRef}
                id="myimage"
                src={imgSrc}
                alt="imagen de proyecto"
                style={{ width: '100%', height: 'auto' }}
            />
            <div
                ref={glassRef}
                className="magnifier__glass"
                style={{
                display: showGlass ? 'block' : 'none',
                width: width,
                height: height,
                position: 'absolute',
                border: '1px solid #e4eaeeff',
                borderRadius: '3%',
                backgroundImage: `url(${imgSrc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${imgRef.current ? imgRef.current.width * zoom : 0}px ${
                    imgRef.current ? imgRef.current.height * zoom : 0
                }px`,
                left: cursorPoint.x  + 'px',
                top: cursorPoint.y  + 'px',
                pointerEvents: 'none',
                }}
            />
            </div>

    )
};

export default ImageMagnifier;