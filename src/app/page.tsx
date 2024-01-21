"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./Animation2.json";

export default function Home() {
  const [isLiked, setIsLiked] = useState(false);
  const [animation, setAnimation] = useState({
    isStopped: true,
    isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-3xl md:text-4xl text-center font-bold z-10">
        Lottie Web Animations Demo
      </h1>
      <Button
        onClick={() => {
          setAnimation({
            ...animation,
            direction: animation.direction === 1 ? -1 : 1,
            isStopped: false,
          });
          setTimeout(
            () => {
              setIsLiked(!isLiked);
            },
            animation.direction === 1 ? 1000 : 200
          );
        }}
        className="rounded-full w-16 h-16 bg-zinc-300 bg-opacity-30 hover:bg-opacity-40 hover:bg-zinc-300 transition-all p-0 mt-4"
      >
        <div className="pointer-events-none">
          <Lottie
            options={defaultOptions}
            direction={animation.direction}
            height={100}
            width={100}
            isStopped={animation.isStopped}
            isPaused={animation.isPaused}
          />
        </div>
      </Button>
      {isLiked ? "Liked" : "Like"}
    </main>
  );
}
