"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// 3D Canvas Layer: Matrix of Cubes Reacting to Mouse
function FluidCubeGrid() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  // 40x25 grid = 1,000 interactive 3D cubes covering the entire screen
  const countX = 40;
  const countY = 25;
  const totalCubes = countX * countY;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const mouseRelative = useRef(new THREE.Vector2(999, 999));

  // Initialize flat grid positions layout
  const gridData = useMemo(() => {
    const data = [];
    for (let x = 0; x < countX; x++) {
      for (let y = 0; y < countY; y++) {
        // Normalize coordinates to fit current responsive screen size
        const posX = (x / countX - 0.5) * viewport.width * 1.05;
        const posY = (y / countY - 0.5) * viewport.height * 1.05;
        data.push({ x: posX, y: posY, id: x * countY + y });
      }
    }
    return data;
  }, [viewport]);

  // Track cursor coordinates globally inside the 3D space
  React.useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      // Map 2D browser window coordinates to 3D normalized device coordinates (-1 to 1)
      mouseRelative.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRelative.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;

    const time = state.clock.getElapsedTime();
    
    // Target mouse position translated to ThreeJS viewport scale
    const mX = mouseRelative.current.x * (viewport.width / 2);
    const mY = mouseRelative.current.y * (viewport.height / 2);

    gridData.forEach((cube, i) => {
      // Distance calculation from current cube instance to user mouse pointer
      const dx = cube.x - mX;
      const dy = cube.y - mY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      let targetX = cube.x;
      let targetY = cube.y;
      let targetZ = 0;
      let targetScale = 1;
      let rx = 0, ry = 0;

      const sinWave = Math.sin(time + i);
      const cosWave = Math.cos(time - i);

      // Kinetic Shockwave Trigger Zone (If mouse gets close)
      if (distance < 2.5) {
        const force = (2.5 - distance) / 2.5; // Stronger force closer to mouse
        
        // Push cubes outward along vector direction
        targetX += (dx / distance) * force * 1.2;
        targetY += (dy / distance) * force * 1.2;
        
        // Explode outward into the Z depth axis
        targetZ += force * 2.8; 
        targetScale = 1 - force * 0.4; // Shrink slightly at center impact

        // Spin dynamically during dispersion
        rx = sinWave * force * 4;
        ry = cosWave * force * 4;
      } else {
        // Ambient resting breathing idle wave pattern
        targetZ += Math.sin(time * 2 + cube.x * 0.5 + cube.y * 0.5) * 0.12;
      }

      // Smooth Lerp transitions to make motion feel liquid and weighted
      dummy.position.x = THREE.MathUtils.lerp(dummy.position.x, targetX, 0.12);
      dummy.position.y = THREE.MathUtils.lerp(dummy.position.y, targetY, 0.12);
      dummy.position.z = THREE.MathUtils.lerp(dummy.position.z, targetZ, 0.12);
      
      dummy.rotation.set(rx, ry, 0);
      dummy.scale.setScalar(THREE.MathUtils.lerp(dummy.scale.x, targetScale, 0.1));
      
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });

    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, totalCubes]}>
      <boxGeometry args={[0.22, 0.22, 0.22]} />
      <meshPhysicalMaterial
        color="#18181b"
        roughness={0.2}
        metalness={0.9}
        clearcoat={1.0}
        emissive="#4338ca"
        emissiveIntensity={0.15}
      />
    </instancedMesh>
  );
}

// Full Webpage Layout Assembly
export default function Immersive3DPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#020204] overflow-hidden select-none">
      
      {/* BACKGROUND 3D CANVAS LAYER: Takes 100% viewport spacing */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} color="#6366f1" />
          <pointLight position={[-5, -5, 2]} intensity={2} color="#ec4899" />
          <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />
          <FluidCubeGrid />
        </Canvas>
      </div>

      {/* FOREGROUND HTML CONTENT LAYER: Completely floating on top of canvas meshes */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between p-8 md:p-16 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="w-full flex justify-between items-center mix-blend-difference">
          <span className="text-white font-black tracking-tighter text-xl">NEXUS.</span>
          <nav className="flex gap-8 text-zinc-400 text-xs font-mono font-medium tracking-widest uppercase">
            <span className="hover:text-white cursor-pointer transition-colors">Index</span>
            <span className="hover:text-white cursor-pointer transition-colors">Manifesto</span>
            <span className="text-indigo-400">Systems_Active</span>
          </nav>
        </header>

        {/* Hero Section Copy */}
        <main className="max-w-2xl my-auto pt-24">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-[10px] text-indigo-400 uppercase tracking-widest font-mono mb-6">
            WebGL Spatial Interface 
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-100 leading-[0.95]">
            DECONSTRUCT <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">
              THE SCREEN
            </span>
          </h1>
          <p className="mt-6 text-sm md:text-base text-zinc-400 max-w-md leading-relaxed font-light">
            Move your cursor around the display layout. Watch the physical voxel geometry tear down, dissolve under kinetic gravitational pressure, and auto-assemble in real-time execution loops.
          </p>
          
          <div className="mt-8 flex gap-4 pointer-events-auto">
            <button className="bg-white text-black text-xs font-bold px-6 py-3.5 rounded-full shadow-lg shadow-indigo-500/10 hover:bg-zinc-200 active:scale-95 transition-all">
              Initialize Subroutine
            </button>
            <button className="border border-zinc-800 bg-black/40 backdrop-blur-md text-white text-xs font-semibold px-6 py-3.5 rounded-full hover:bg-zinc-900/50 active:scale-95 transition-all">
              Read Docs
            </button>
          </div>
        </main>

        {/* Footer Metrics Data */}
        <footer className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-zinc-900/40 pt-6 mix-blend-difference">
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            Engine Version: 4.9.1 // Instances: 1,000 Voxels
          </div>
          <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            © 2026 Core Mechanics. Built via Canvas Instancing.
          </div>
        </footer>

      </div>
    </div>
  );
}