import {
  motion,
  useTransform,
  useScroll,
} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { throttle } from 'throttle-debounce-ts';

const slideAnimation = {
  variants: {
    full: { backgroundColor: "#0000CC" },
    partial: { backgroundColor: "rgb(71 85 105 / 1)" }
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: true }
};

function useElementViewportPosition(ref) {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { position };
}

export function YTList({ data }) {
  const ref = useRef(null)
  const carouselRef = useRef(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);
  const [, ...rest] = data;
  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          parent.offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={ref}>
      <div className="max-w-screen py-0 px-4 mt-1 mx-auto mb-0 overflow-hidden">
        <div className="rounded-xl overflow-hidden mx-3 md:mx-auto md:max-w-2xl lg:max-w-5xl">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${data[0]}?controls=0`}
            title="Luxoticars - The Syndicate Carlifestyle Cartel"
            className="w-full aspect-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="sticky top-0 mt-10 mb-32 w-full flex flex-col items-start justify-center">
          <motion.div ref={carouselRef} className="flex gap-12" style={{ x }}>
            {rest.map((i) => (
              <motion.div
                {...slideAnimation}
                key={i}
                className="w-80 h-80 bg-gray-700 rounded-xl flex items-center justify-center"
              >
                <div className="rounded-xl overflow-hidden w-full h-full">
                  <iframe
                    width="320"
                    height="320"
                    src={`https://www.youtube.com/embed/${i}?controls=0`}
                    title="Luxoticars - The Syndicate Carlifestyle Cartel"
                    className="w-full aspect-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
