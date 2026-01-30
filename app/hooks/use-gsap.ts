import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsap(effect: (context: gsap.Context) => any, deps: any[] = []) {
  useLayoutEffect(() => {
    const ctx = gsap.context(effect);
    return () => ctx.revert();
  }, deps);
}
