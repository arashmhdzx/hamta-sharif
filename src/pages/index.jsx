import React, { Suspense } from 'react'
import Layout from '../layout/layout'

import { Canvas } from "@react-three/fiber"
import { Model } from '../data/Scene'
import { OrbitControls } from '@react-three/drei'

const Index = () => {
    return (
        <Layout>
            <div className='flex justify-center items-center h-full'>
                <Canvas className=' '>
                    <ambientLight />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <Model />
                    </Suspense>
                </Canvas>
            </div>
        </Layout>
    )
}

export default Index