"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import trade1 from "../../public/images/trade1.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { products } from "../Constants/ServicesData"; // Import the data

export const Services: React.FC = () => {
  // Animation controls for the heading
  const headingControls = useAnimation();
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (headingInView) {
      headingControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: 50 });
    }
  }, [headingInView, headingControls]);

  return (
    <section>
      <div>
        <motion.h1
          ref={headingRef}
          animate={headingControls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="md:text-7xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20 mb-6"
        >
          What Services do I <span className="animated-gradient-text">offer?</span>
        </motion.h1>

        {/* Carousel section */}
        <div className="flex justify-center p-6">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full container"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => {
                // Create animation control and inView hook for each image
                const imageControls = useAnimation();
                const { ref: imageRef, inView: imageInView } = useInView({
                  triggerOnce: true,
                  threshold: 0.2,
                });

                useEffect(() => {
                  if (imageInView) {
                    imageControls.start({ opacity: 1, y: 0 });
                  } else {
                    imageControls.start({ opacity: 0, y: 50 });
                  }
                }, [imageInView, imageControls]);

                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <motion.div
                            ref={imageRef}
                            animate={imageControls}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Image
                              className="flex items-center border p-1 justify-center rounded-2xl"
                              src={trade1}
                              alt={`Trading ${index + 1}`}
                              width={300}
                              height={300}
                              blurDataURL="data:..."
                              placeholder="blur" // Optional blur-up while loading
                            />
                          </motion.div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Product Cards section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: {
    title: string;
    price: string;
    popular: boolean;
    features: string[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`rounded-2xl border p-6 h-fit shadow-md relative overflow-hidden
        ${product.popular ? 'border-2 border-indigo-500' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
    >
      {product.popular && (
        <div className="absolute top-0 left-0 bg-indigo-500 text-white px-3 py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-xl text-gray-100 mb-4">{product.price}</p>
      <ul className="mb-4">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-300 mb-2">
            <svg
              className="w-5 h-5 text-indigo-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        className="mt-auto py-2 px-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600"
        whileHover={{ scale: 1.1 }}
      >
        Subscribe Now
      </motion.button>
    </motion.div>
  );
};

export default Services;
