import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal() {
  useEffect(() => {

    const sr = ScrollReveal({
      distance: "70px",
      duration: 1200,
      delay: 100,
      easing: "ease",
      reset: false,
      mobile: true,
    });

    sr.reveal(".reveal-up", {
      origin: "bottom",
      interval: 150,
    });

    sr.reveal(".reveal-left", {
      origin: "left",
      interval: 150,
    });

    sr.reveal(".reveal-right", {
      origin: "right",
      interval: 150,
    });

    sr.reveal(".reveal-scale", {
      scale: 0.9,
      distance: "0px",
      interval: 150,
    });

  }, []);
}