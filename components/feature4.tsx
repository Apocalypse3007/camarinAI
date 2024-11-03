'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Header from './ui/header'; // Importing Header component
import FitLabel from './ui/fitlabel'; // Importing FitLabel component



const phoneScreens = [
  {
    id: 1,
    content: (
      <img
        src="/insta_home.png"
        alt="Instagram Home"
        className="w-[600px] h-[720px]"
      />
    ),
  },
  {
    id: 2,
    content: (
      <img
        src="/pinterest_home.png"
        alt="Pinterest Home"
        className="w-[600px] h-[720px]"
      />
    ),
  },
];

const allProductImages = [
  [
    '/insta_image1.png',
    '/insta_image2.png',
    '/insta_image3.png',
    '/insta_image4.png',
    '/insta_image5.png',
    '/insta_image6.png',
    '/insta_image7.png',
    '/insta_image8.png',
  ],
  [
    '/pinterest_image1.png',
    '/pinterest_image2.png',
    '/pinterest_image3.png',
    '/pinterest_image4.png',
    '/pinterest_image5.png',
    '/pinterest_image6.png',
    '/pinterest_image7.png',
    '/pinterest_image8.png',
  ],
];

interface Feature4Props {
  onContactClick: () => void; // Receive the contact click handler as a prop
}

export default function InteractiveStyleRecommendations({ onContactClick }: Feature4Props) {
  // State variables
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [currentProductSet, setCurrentProductSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [initialAnimationPlayed, setInitialAnimationPlayed] = useState(false);

  // Ref and InView hook to detect when component is in viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Set the size of the product images (in pixels)
  const productImageSize = 225; // Adjust this value as needed

  // Set positions for each product (modify these values as needed)
  const productPositions = [
    { x: -530, y: -340 }, // Position for product 1
    { x: -290, y: -310 }, // Position for product 2
    { x: 95, y: -310 },   // Position for product 3
    { x: 370, y: -320 },  // Position for product 4
    { x: -550, y: -20 },  // Position for product 5
    { x: -290, y: -20 },  // Position for product 6
    { x: 120, y: -15 },   // Position for product 7
    { x: 370, y: 15 },    // Position for product 8
  ];

  // Initialize products with IDs and initial images
  const products = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    image: allProductImages[currentProductSet][index],
  }));

  const handleBoxClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationPhase(1);
  };

  // Trigger initial animation when component comes into view
  useEffect(() => {
    if (isInView && !initialAnimationPlayed) {
      setInitialAnimationPlayed(true);
      setAnimationPhase(2);
    }
  }, [isInView, initialAnimationPlayed]);

  // Handle animation phases
  useEffect(() => {
    if (animationPhase === 1) {
      // Animate products back behind the phone screen
      const timer = setTimeout(() => {
        // Update screen index and product set
        setCurrentScreenIndex(
          (prevIndex) => (prevIndex + 1) % phoneScreens.length
        );
        setCurrentProductSet(
          (prevSet) => (prevSet + 1) % allProductImages.length
        );
        setAnimationPhase(2);
      }, 500);
      return () => clearTimeout(timer);
    } else if (animationPhase === 2) {
      // Animate new products out to their positions
      const timer = setTimeout(() => {
        if (isAnimating) {
          setIsAnimating(false);
        }
        setAnimationPhase(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animationPhase, isAnimating]);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-[#161616] text-white flex flex-col"
    >
      {/* Header Component at the Top */}
      <Header onContactClick={onContactClick}/>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-6 text-center">
        {/* Added Content Below Header */}
        <div className="inline-flex items-center justify-center mb-4">
            <div className="w-2 h-2 bg-emerald-300 rounded-3xl mr-2 shine"></div>
            <span className="text-emerald-300 text-sm">Your style assistant</span>
            </div>
        <h1 className="text-5xl font-bold mb-6">Style Recommendations</h1>
        <p className="max-w-2xl mx-auto mb-10">
        Users get personalised outfit recommendations from the store catalogue based on the their inputs and social media activity, suggesting colour palettes and similar aesthetics.
        </p>

        {/* Phone Screen and Product Images */}
        <div className="relative w-[800px] h-[600px] mb-12">
          {/* Main Container (Phone Screen) */}
          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 20 }} // Ensure it is above other elements
          >
            <motion.div
              className="rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={handleBoxClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                key={currentScreenIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {phoneScreens[currentScreenIndex].content}
              </motion.div>
            </motion.div>
          </div>

          {/* Product Images */}
          <div className="absolute inset-0 overflow-visible">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                animationPhase={animationPhase}
                targetX={productPositions[index]?.x || 0}
                targetY={productPositions[index]?.y || 0}
                productImageSize={productImageSize}
                currentProductSet={currentProductSet}
                allProductImages={allProductImages}
                initialAnimationPlayed={initialAnimationPlayed}
              />
            ))}

            {/* FitLabels */}
            {animationPhase !== 1 && initialAnimationPlayed && (
              <>
                <div
                  className="absolute"
                  style={{
                    left: '140%',
                    top: '102%',
                    width: '200%',
                    height: '100%',
                    transform: `translate(-50%, -50%) translate(${
                      productPositions[7].x + productImageSize / 2
                    }px, ${productPositions[7].y - 40}px)`,
                    zIndex: 20, // Ensure it appears above the images
                    pointerEvents: 'none', // Add this line
                  }}
                >
                  <FitLabel
                    text={
                      <span style={{ fontSize: '0.95rem' }}>
                        Find similar aesthetics ✅
                      </span>
                    }
                    position={''}
                  />
                </div>

                <div
                  className="absolute"
                  style={{
                    left: '107%',
                    top: '52%',
                    width: '200%',
                    height: '100%',
                    transform: `translate(-50%, -50%) translate(${
                      productPositions[7].x + productImageSize / 2
                    }px, ${productPositions[7].y - 40}px)`,
                    zIndex: 20,
                    pointerEvents: 'none', // Add this line
                  }}
                >
                  <FitLabel
                    text={
                      <span style={{ fontSize: '0.95rem' }}>
                        Find similar colour palettes ✅
                      </span>
                    }
                    position={''}
                  />
                </div>

                <div
                  className="absolute"
                  style={{
                    left: '57%',
                    top: '58%',
                    width: '200%',
                    height: '100%',
                    transform: `translate(-50%, -50%) translate(${
                      productPositions[7].x + productImageSize / 2
                    }px, ${productPositions[7].y - 40}px)`,
                    zIndex: 20,
                    pointerEvents: 'none', // Add this line
                  }}
                >
                  <FitLabel
                    text={
                      <span style={{ fontSize: '0.95rem' }}>
                        Find similar products ✅
                      </span>
                    }
                    position={''}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

interface Product {
  id: number;
  image: string;
}

function ProductCard({
  product,
  index,
  animationPhase,
  targetX,
  targetY,
  productImageSize, 
  currentProductSet,
  allProductImages,
  initialAnimationPlayed,
}: {
  product: Product;
  index: number;
  animationPhase: number;
  targetX: number;
  targetY: number;
  productImageSize: number;
  currentProductSet: number;
  allProductImages: string[][];
  initialAnimationPlayed: boolean;
}) {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: targetX,
      y: targetY,
      transition: { duration: 0.5 },
    },
    backToCenter: {
      opacity: 0,
      scale: 0.8,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Determine which variant to use based on the animation phase
  let animateVariant = 'hidden';
  let initialVariant: string | boolean = 'hidden';

  if (animationPhase === 2) {
    // Initial animation when scrolling into view or after clicking
    animateVariant = 'visible';
    initialVariant = 'hidden';
  } else if (animationPhase === 1) {
    // Animate back to center when clicking
    animateVariant = 'backToCenter';
    initialVariant = false; // Do not reset initial state
  } else if (animationPhase === 0 && initialAnimationPlayed) {
    // Keep the products visible without reanimating
    animateVariant = 'visible';
    initialVariant = false; // Do not reset initial state
  }

  // Update the product image based on the current product set
  const updatedImage = allProductImages[currentProductSet][index];

  return (
    <motion.div
      variants={variants}
      initial={initialVariant}
      animate={animateVariant}
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        overflow: 'visible',
        zIndex: 10, // Ensure it's below the phone screen
        pointerEvents: 'none', // Allow clicks to pass through
      }}
    >
      <img
        src={updatedImage}
        alt={`Product ${product.id}`}
        style={{
          width: `${productImageSize}px`,
          height: 'auto',
        }}
        className="rounded-md shadow-lg"
      />
    </motion.div>
  );
}
