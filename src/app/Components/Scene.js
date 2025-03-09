'use client'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls, Resize } from '@react-three/drei'

export default function Scene() {
    const gltf = useLoader(GLTFLoader, '/Kenny_Terminal_Real.glb')
    
    return (
        <div className="mt-5 h-96 flex">
            <Canvas>
                <directionalLight intensity={8} position={[0,4,1]}/>
                <Resize scale={10}>
                    <primitive object={gltf.scene} position={[0, -1, 0]}/>
                </Resize>
                <OrbitControls autoRotate={true}/>
                
            </Canvas>
        </div>
    )
}