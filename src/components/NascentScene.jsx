import * as THREE from "three";
import React, { Suspense, useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import { useScroll } from "@react-spring/web";
// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial);

export default function Scene({ setBg }) {
  const sphere = useRef();
  const light = useRef();
  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [halfway, setHalfway] = useState(false);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: scrollYProgress }) => {
      console.log(scrollYProgress);
      setScroll.start({
        scrollBig: Math.abs(1 - scrollYProgress.scrollYProgress * 2),
        scrollSmall: Math.abs(1 - scrollYProgress.scrollYProgress * 2),
      });
      if (scrollYProgress.scrollYProgress > 0.5) {
        if (!halfway) setHalfway(true);
      } else {
        setHalfway(false);
      }
    },
  });

  // Change cursor on hovered state
  useEffect(() => {
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
      '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#737373"/></svg>'
    )}'), auto`;
  }, [hovered]);

  // Make the bubble float and follow the mouse
  // This is frame-based animation, useFrame subscribes the component to the render-loop
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        state.mouse.x / 4,
        0.2
      );
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + state.mouse.y / 4,
        0.2
      );
    }
  });

  const [{ scrollBig, scrollSmall }, setScroll] = useSpring(() => ({
    scrollBig: 1.8,
    scrollSmall: 0.6,
  }));

  // Springs for color and overall looks, this is state-driven animation
  // React-spring is physics based and turns static props into animated values
  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1 : 1,
      env: mode && !hovered ? 0.4 : 1,
      // color: hovered ? "#623851" : mode ? "#35a480" : "white",
      color: halfway ? "white" : "#6b3c58",
      config: (n) => n === "wobble" && hovered && { mass: 2.3, clamp: true },
    },
    [mode, hovered, down, halfway]
  );

  const [{ wobble2, coat2, color2, ambient2, env2 }] = useSpring(
    {
      wobble2: down ? 1.2 : hovered ? 1.05 : 1,
      coat2: mode && !hovered ? 0.04 : 1,
      ambient2: mode && !hovered ? 1.5 : 0.5,
      env2: mode && !hovered ? 1 : 0.4,
      // color2: hovered ? "#35a480" : mode ? "#35a480" : "white",
      color2: halfway ? "white" : "#42ba7f",
      config: (n) =>
        n === "wobble" &&
        hovered && {
          tension: 120,
          friction: 14,
        },
    },
    [mode, hovered, down, halfway]
  );

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight
          ref={light}
          position-z={-15}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          scale={scrollBig}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Toggle mode between dark and bright
            setMode(!mode);
            setBg({
              background: !mode ? "#202020" : "#f0f0f0",
              fill: !mode ? "#f0f0f0" : "#202020",
            });
          }}
          position={[0, 0, -2]}
        >
          <sphereGeometry args={[2.5, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0}
          />
        </a.mesh>
        <a.mesh
          ref={sphere}
          scale={scrollSmall}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            // Toggle mode between dark and bright
            setMode(!mode);
            setBg({
              background: !mode ? "#202020" : "#f0f0f0",
              fill: !mode ? "#f0f0f0" : "#202020",
            });
          }}
          position={[1, 1, 1]}
        >
          <sphereGeometry args={[0.6, 64, 64]} />
          <AnimatedMaterial
            color={color2}
            envMapIntensity={env2}
            clearcoat={coat2}
            clearcoatRoughness={0}
            metalness={0}
          />
        </a.mesh>
        {/* <Environment preset="warehouse" /> */}
        {/* <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={10}
          far={1.6}
        /> */}
      </Suspense>
    </>
  );
}
