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
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

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
    <section ref={ref} className="relative">
      <div className="sticky inset-x-0 top-0 max-w-screen py-0 px-4 mt-1 mx-auto mb-0 overflow-hidden">
        <div className="mt-10 md:mt-52 w-full flex relative">
          <motion.div ref={carouselRef} className="flex gap-3 md:gap-6" style={{ x }}>
            {data.map((i) => (
              <motion.div
                {...slideAnimation}
                key={i}
                className="w-72 h-72 md:w-80 md:h-80 bg-gray-700 rounded-xl flex items-center justify-center"
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
                    allowFullScreen
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="my-8 max-w-lg space-y-6 text-lg leading-[1.4] text-gray-300 md:max-w-xl md:mx-auto lg:text-xl">
          <p>High-quality videos, personal touch review, and enough reference to help you experience the car what you always dreamed it could be.</p>
          <p>Welcome to Luxoticars</p>
        </div>
      </div>
      <div className='h-[300vh]' />
    </section>
  )
}
