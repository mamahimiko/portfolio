"use client"

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";


export default function FadeInText({ delay = 0, className = "" }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.3,
    });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay }}
        className={className}
      >
        <h1 className="text-4xl font-bold">I am Maho. 😊</h1>
      </motion.div>
    );
  }