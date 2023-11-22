"use client"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Sparkles } from 'lucide-react'
import React from 'react'

import { useWeb3Modal } from '@web3modal/ethers5/react'



const FeatureDex = () => {
  const { open } = useWeb3Modal()

  const handleClick =()=>{
    open()
    
  }
  return (
    <div>
      <div className="flex items-center justify-between"> 
      <h1 className="text-3xl">
            
            FeatureDex
    </h1>

    <Button onClick={handleClick} variant="outline" size="lg" className={cn(
            "text-white w-full font-semibold border-none gradient-btn",
            "hover:text-white",
            "w-18"
        )}> 
            <span>Connect Wallet</span>
            <Sparkles/>
        </Button>
        <w3m-button></w3m-button>
        
       </div>
    
    </div>
  )
}

export default FeatureDex