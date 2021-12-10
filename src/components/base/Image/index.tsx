import { useState, useRef, useEffect } from "react";

interface Style {
  [key: string]: string;
}

interface Props {
  lazy?: boolean;
  threshold?: number;
  src: string;
  block?: boolean;
  placeholder?: string;
  width: number | string;
  height: number | string;
  borderRadius?: string;
  alt: string;
  mode: "cover" | "fill" | "contain";
  style?: Style;
}

let observer: IntersectionObserver = null;
const LOAD_IMG_EVENT_TYPE = "loadImage";

const onIntersection: IntersectionObserverCallback = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
    }
  });
};

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  block,
  width,
  height,
  borderRadius,
  alt,
  mode,
  ...props
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const imageStyle = {
    display: block ? "block" : undefined,
    width,
    height,
    borderRadius,
    objectFit: mode,
    verticalAlign: "middle",
  };

  useEffect(() => {
    if (!lazy) {
      setLoaded(true);
      return undefined;
    }

    const handleLoadImage = () => setLoaded(true);

    const imgElement = imgRef.current;
    imgElement?.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    return () => {
      imgElement?.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    };
  }, [lazy]);

  useEffect(() => {
    if (!lazy) return;

    observer = new IntersectionObserver(onIntersection, { threshold });
    imgRef.current && observer.observe(imgRef.current);
  }, [lazy, threshold]);

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
    />
  );
};

export default Image;
