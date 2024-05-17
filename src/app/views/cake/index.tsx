"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/app/components/TypewriterEffect/TypewriterEffect";
import styles from "./cake.module.css";
import { useAudioContext } from "@/context/CostumeAudioContext";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { BirthdayMessageModal } from "@/app/components/BirthdayMessageModal/BirthdayMessageModal";

const CakeView: FC = () => {
  const [isBlowing, setIsBlowing] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { audioContext } = useAudioContext();

  const birthdayFrase = "Happy Birthday! Blow up the candle and make a wish!";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isBlowing) {
      setTimeout(() => {
        setOpenModal(true);
      }, 1000);
    }
  }, [isBlowing]);

  useEffect(() => {
    if (
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia &&
      audioContext
    ) {
      const analyser = audioContext.createAnalyser();
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const source = audioContext.createMediaStreamSource(stream);
          source.connect(analyser);

          const checkAudio = () => {
            analyser.getByteFrequencyData(dataArray);
            const volume =
              dataArray.reduce((acc, val) => acc + val, 0) / dataArray.length;
            const blowingThreshold = 90;
            if (volume > blowingThreshold) {
              setIsBlowing(true);
              return;
            }
            requestAnimationFrame(checkAudio);
          };
          checkAudio();
        })
        .catch((error) => {
          console.error("Error accessing the microphone", error);
        });
    }
  }, [audioContext]);

  return (
    <>
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "white",
              zIndex: 999,
            }}
            animate={{
              width: "200vw",
              height: "200vw",
              transition: { duration: 4.0, ease: [0.04, 0.62, 0.23, 0.98] },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
          />
        )}
      </AnimatePresence>
      <div
        className={clsx(
          "py-12 flex flex-col justify-center items-center h-screen"
        )}
      >
        {!isAnimating && (
          <>
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="h-1/4 w-full flex justify-center items-end">
                <div className={styles.candle}></div>
                {!isBlowing && (
                  <div
                    className={styles.flame}
                    onClick={() => setIsBlowing(true)}
                  ></div>
                )}
              </div>
              <div className="h-1/2 w-full flex justify-center">
                <Image
                  height={500}
                  width={300}
                  src="https://res.cloudinary.com/dp0abawuh/image/upload/v1709223217/Dan%20Portfolio/zesgnzsez7kaajuajcd7.png"
                  alt="cake"
                  style={{ marginBottom: "50px" }}
                />
              </div>
            </div>
            {!openModal && (
              <TypewriterEffectSmooth
                words={birthdayFrase.split(" ").map((elm) => {
                  return { text: elm, className: "text-white" };
                })}
                cursorClassName="bg-orange-400"
              />
            )}
          </>
        )}
        {openModal && <BirthdayMessageModal />}
      </div>
    </>
  );
};

export default CakeView;
