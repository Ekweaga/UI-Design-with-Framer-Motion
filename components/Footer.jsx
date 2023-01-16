import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

function Footer() {
  return (
    <>
    <footer className=' bg-[#B3E140] py-[100px] '>

        <div className='grid grid-cols-5 gap-[50px] w-[80%] mx-auto'>
            <div>
                <h1 className='font-bold mb-[20px]'>TRENDING</h1>
                <ul className='flex flex-col gap-[10px] text-sm '>
                    <li>CROSS TRAINING SHOES</li>
                    <li>HIGH TOPS</li>
                    <li>HIKING</li>
                    <li>BLACK SHOES</li>
                    <li>NURSING SHOES</li>
                    <li>MEN TRACK PANTS</li>
                    <li>WHITE SHOES</li>
                    <li>WHITE SHOES</li>
                    <li>WHITE SHOES</li>
                </ul>

            </div>


            <div>
            <h1 className='font-bold mb-[20px]'>FRANCHISE</h1>
            <ul className='flex flex-col gap-[10px] text-sm '>
                    <li>CROSS TRAINING SHOES</li>
                    <li>HIGH TOPS</li>
                    <li>HIKING</li>
                    <li>BLACK SHOES</li>
                    <li>NURSING SHOES</li>
                    <li>MEN TRACK PANTS</li>
                    <li>WHITE SHOES</li>
                    <li>WHITE SHOES</li>
                    <li>WHITE SHOES</li>
                </ul>


            </div>

            <div>
                <h1 className='font-bold mb-[20px]'>EXPLORE</h1>
                <ul className='flex flex-col gap-[10px] text-sm '>
                    <li>CROSS TRAINING SHOES</li>
                    <li>HIGH TOPS</li>
                    <li>HIKING</li>
                    <li>BLACK SHOES</li>
                    <li>NURSING SHOES</li>
                   </ul>

            </div>
            <div>
            <h1 className='font-bold mb-[20px]'>FRANCHISE</h1>
            <ul className='flex flex-col gap-[10px] text-sm '>
                    <li>CROSS TRAINING SHOES</li>
                    <li>HIGH TOPS</li>
                    <li>HIKING</li>
                    <li>BLACK SHOES</li>
                    <li>NURSING SHOES</li>
                    <li>MEN TRACK PANTS</li>
                    <li>WHITE SHOES</li>
                    <li>WHITE SHOES</li>
                    <li>WHITE SHOES</li>
                </ul>
            </div>
            <div>
            <h1 className='font-bold mb-[20px]'>FRANCHISE</h1>
            <ul className='flex flex-col gap-[10px] text-sm '>
                    <li>CROSS TRAINING SHOES</li>
                    <li>HIGH TOPS</li>
                    <li>HIKING</li>
                    <li>BLACK SHOES</li>
                    <li>NURSING SHOES</li>
                    <li>MEN TRACK PANTS</li><br/>
                    <div>
                    <h1 className='font-bold mb-[20px]'>PROGRAMS</h1>
            <ul className='flex flex-col gap-[10px] text-sm '>
                    <li>CROSS TRAINING SHOES</li>
                    <li>HIGH TOPS</li>
                    <li>HIKING</li>
                    <li>BLACK SHOES</li>
                    <li>NURSING SHOES</li>
                    <li>MEN TRACK PANTS</li></ul>
                    </div>
                </ul>
            </div>
            


        </div>

        <div className='grid grid-cols-5 gap-[50px] w-[80%] mx-auto'>
            <motion.div initial={{x:-200,rotate:0,opacity:0}} whileInView={{x:[400,0],rotate:[0,90,180,360,0],opacity:1}} transition={{duration:1}} viewport={{amount:0.5}}>
                <Image src="/Group 7.png" width={100} height={50} alt="logo"/>
            </motion.div>

        </div><br/>

        <div>
            <ul className='flex gap-[30px] text-sm items-center justify-center font-bold'>
                <li>DATA SETTINGS</li>
                <li>STEMP</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>

    </footer>
    </>
  )
}

export default Footer
