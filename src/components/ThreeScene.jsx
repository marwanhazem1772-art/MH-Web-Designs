import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })

  // Generate random sphere of particles
  const count = 3000
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0012
      ref.current.rotation.x += 0.0005
      // Subtle mouse parallax
      ref.current.rotation.y += (mouseRef.current.x * 0.002 - ref.current.rotation.y) * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#1a6fff"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

function FloatingRing() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
      ref.current.rotation.y += 0.008
      ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.15
    }
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.015, 16, 120]} />
      <meshBasicMaterial color="#1a6fff" transparent opacity={0.35} />
    </mesh>
  )
}

function FloatingRing2() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.4
      ref.current.rotation.y -= 0.006
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <mesh ref={ref}>
      <torusGeometry args={[3.0, 0.01, 16, 120]} />
      <meshBasicMaterial color="#00d68f" transparent opacity={0.2} />
    </mesh>
  )
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 60 }}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
      }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <ParticleField />
      <FloatingRing />
      <FloatingRing2 />
    </Canvas>
  )
}
