"use client"

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function FadeInImage({ src, alt, width, height, delay = 0, className = "" }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay }}
        className={className}
      >
        <Image src={src} alt={alt} width={width} height={height} />
      </motion.div>
    );
  }