import React from "react";
import Scene from "../components/NascentScene";
import { useSpring } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Nascent = () => {
  const [{ background, fill }, set] = useSpring(
    { background: "#f0f0f0", fill: "#202020" },
    []
  );

  return (
    <div className="flex justify-center items-center overflow-auto w-screen h-[400vh]">
      <div
        className="bg-[#050403] w-[200vw] h-[200vh] fixed top-[-50vh] left-[-50vw]"
        style={{ filter: "blur(140px)" }}
      >
        <Canvas className="canvas" dpr={[1, 2]}>
          <Scene setBg={set} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Nascent;
