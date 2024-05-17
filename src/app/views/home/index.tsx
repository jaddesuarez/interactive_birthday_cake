"use client";
import React, { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useAudioContext } from "@/context/CostumeAudioContext";

const HomeView: FC = () => {
  const { audioContext, setAudioContext } = useAudioContext();
  const router = useRouter();
  const [present, setPresent] = useState<string>(
    "https://res.cloudinary.com/dp0abawuh/image/upload/v1709204270/Dan%20Portfolio/present-01_is6nep.png"
  );

  const handleClick = () => {
    setPresent(
      "https://res.cloudinary.com/dp0abawuh/image/upload/v1709204155/Dan%20Portfolio/present-01_qlgghx.gif"
    );
    setTimeout(() => {
      router.push("/cake");
    }, 1500);
  };

  console.log({ audioContext });

  useEffect(() => {
    const initAudioContext = () => {
      const ctx = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      setAudioContext(ctx);
    };

    if (!audioContext) {
      window.addEventListener("click", initAudioContext, { once: true });
      return () => window.removeEventListener("click", initAudioContext);
    }
  }, [audioContext, setAudioContext]);

  return (
    <div className="py-12 flex flex-col justify-center items-center h-screen">
      <Image
        className="cursor-pointer"
        width={600}
        height={800}
        src={present}
        alt="cake"
        onClick={handleClick}
      />
    </div>
  );
};

export default HomeView;
