import React from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

function Navbar() {

    const ulContainer = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                staggerChildren:0.5,
                when:"beforeChildren"
            }
        }
    }

    const liContainer = {
        hidden:{
            x:"-100vw",
            opacity:0
        },
        visible:{
          x:0,
          opacity:1,
          transition:{
            duration:0.6
          }
        }
    }
    const imageContainer = {
        hidden:{
            x:"100vw",
            opacity:0
        },
        visible:{
          x:0,
          opacity:1,
          transition:{
            duration:0.6
          }
        }
    }
  return (
   <>
   <nav className='flex justify-between '>
    <div>
       <Image src="/Group 6.png" width={100} height={50} alt="logo"/>

    </div>

    <div>
        <motion.ul  className='flex justify-between p-4 font-bold text-sm gap-[20px] mt-[20px]' variants={ulContainer} initial="hidden" animate="visible">
            <motion.li variants={liContainer}>NEW-ARRIVALS</motion.li>
            <motion.li variants={liContainer}>WOMENS</motion.li>
            <motion.li variants={liContainer}>KIDS</motion.li>
            <motion.li variants={liContainer}>MENS</motion.li>
        </motion.ul>
    </div>

    <div>
        <motion.ul  className='flex justify-between p-4 gap-[20px] mt-[20px] mr-[20px]'  variants={ulContainer} initial="hidden" animate="visible">
            <motion.div variants={imageContainer}>
            <Image src="/search-2 1.png" width={20} height={30} alt="logo" />

            </motion.div>
            <motion.div variants={imageContainer}>
            <Image src="/Vector.png" width={20} height={30} alt="logo" />
            </motion.div>
            <motion.div variants={imageContainer}>
            <Image src="/Group 5.png" width={20} height={30} alt="logo" />
            </motion.div>
            <motion.div variants={imageContainer} >
            <Image src="/funky-man 1.png" width={20} height={30} alt="logo" />
            </motion.div>
       
      
      
      
        </motion.ul>
    </div>
   </nav>
   </>
  )
}

export default Navbar
