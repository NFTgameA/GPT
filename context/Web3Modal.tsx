"use client"
import React from 'react'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'b59fbe9dd1f5ab7f5a9ed2abc1e085fa'

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://static-00.iconduck.com/assets.00/wallet-icon-2048x2048-9rmek6d6.png']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet],
  projectId
})



const Web3ModalProvider = (props:{
    children:React.ReactNode
}) => {
  return (
    <div>{props.children}</div>
  )
}

export default Web3ModalProvider