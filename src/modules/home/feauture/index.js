import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, slideIn } from "../data/motion";

export default function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className="bg-white w-full font-poppins">
        <div className="max-w-[1440px] mx-auto">
          <div className=" px-[10%]  sm:h-[90vh] sm:py-0 py-[3%] flex flex-col  justify-center ">
            <div className="w-full grid sm:grid-cols-12">
              <div className="col-span-8">
                <motion.h1
                  variants={slideIn("right", "tween", 0.2, 1)}
                  className="sm:text-[80px] text-[30px]  tracking-[2px]"
                >
                  REVOLUTIONIZING
                </motion.h1>
              </div>
            </div>
            <div className="w-full grid sm:grid-cols-12 ">
              <div className="col-span-4 w-full "></div>
              <div className="col-span-8 w-full ">
                <motion.h1
                  variants={fadeIn("right", "tween", 0.2, 1)}
                  className="sm:text-[80px] text-[30px]  tracking-[2px] sm:text-left text-right"
                >
                  DENTAL CARE
                </motion.h1>
              </div>
            </div>
            <div className="w-full grid sm:grid-cols-12">
              <div className="col-span-8">
                <motion.h1
                  variants={fadeIn("left", "tween", 0.2, 1)}
                  className="sm:text-[80px] text-[30px]  tracking-[2px]"
                >
                  WITH TECHOLOGY
                </motion.h1>
              </div>
            </div>
            <div className="flex justify-between items-center mt-[1%]">
              <h4>Your smile, Our passion</h4>
              <div>
                <button className="w-[100px] h-[100px] uppercase text-center text-white rounded-full bg-[#FE4C1A]">
                  Get
                  <br /> Started
                </button>
              </div>
              <h4>Your smile, Our passion</h4>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
