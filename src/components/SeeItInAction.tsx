import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";

interface SeeItInActionProps {
  id: string;
  activeVideo: string | null;
  setActiveVideo: (id: string | null) => void;
}

const SeeItInAction = ({ id, activeVideo, setActiveVideo }: SeeItInActionProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isStickyClosed, setIsStickyClosed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoHeight, setVideoHeight] = useState(0);
  const isInView = useInView(videoRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setActiveVideo(id);
    }
  }, [isInView, id, setActiveVideo]);

  useLayoutEffect(() => {
    if (videoWrapperRef.current) {
      setVideoHeight(videoWrapperRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (placeholderRef.current) {
        const rect = placeholderRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
          setIsStickyClosed(false); // Reset close state when not sticky
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (activeVideo === id) {
      video.play().catch(() => setIsPlaying(false));
    } else if (!isSticky) {
      video.pause();
    }
  }, [activeVideo, id, isSticky]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      // Set initial state
      setIsPlaying(!video.paused);
      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, []);

  return (
    <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create stores on your tablet or phone
          </p>
        </motion.div>
        
        <div ref={placeholderRef} style={{ height: videoHeight ? `${videoHeight}px` : 'auto' }}>
            <motion.div
              ref={videoWrapperRef}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2, margin: "-200px 0px 0px 0px" }}
              className={cn(
                "transition-all duration-500 relative group",
                isSticky && !isStickyClosed
                  ? "fixed bottom-5 left-5 w-96 h-auto z-50"
                  : "relative w-full",
                isSticky && isStickyClosed ? "hidden" : ""
              )}
            >
              <Card className="overflow-hidden border-none shadow-none bg-white/90 dark:bg-gray-800/90 rounded-[21px]">
                <CardContent className="p-0 relative">
                  <video
                    ref={videoRef}
                    id={id}
                    loop
                    autoPlay
                    playsInline
                    muted={activeVideo !== id && !isSticky}
                    className="w-full h-full object-cover"
                  >
                    <source
                      src="https://firebasestorage.googleapis.com/v0/b/freshfront-c3181.firebasestorage.app/o/store_products%2FVideo.mp4?alt=media&token=bde1f316-49db-45cc-b6a0-e5d258dc2b66"
                      type="video/mp4"
                    />
                  </video>
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button onClick={togglePlay} className="bg-white/30 backdrop-blur-sm rounded-full p-4 text-black">
                        <Play className="h-8 w-8" />
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
              {isSticky && !isStickyClosed && (
                <button
                  onClick={() => setIsStickyClosed(true)}
                  className="absolute -top-2 -right-2 bg-white/50 text-black border border-gray-700 rounded-full p-1.5 z-10"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeeItInAction;
