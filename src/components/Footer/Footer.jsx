import React from 'react'

const Footer = () => {
  return (
    <div className='text-center p-20 grid gap-5 bg-white'>
    <h1 className='text-6xl font-bold '>Gadget Heaven</h1>
    <p className='text-2xl'>Leading the way in cutting-edge technology and innovation.</p>
    <hr />
    <footer className="flex text-center justify-between p-10">
    <nav className='grid gap-2'>
    <h6 className="text-4xl font-bold mx-auto">Services</h6>
    <a className="text-xl mx-auto">Branding</a>
    <a className="text-xl mx-auto">Design</a>
    <a className="text-xl mx-auto">Marketing</a>
    <a className="text-xl mx-auto">Advertisement</a>
    </nav>
    <nav className='grid gap-2'>
    <h6 className="text-4xl font-bold mx-auto">Company</h6>
    <a className="text-xl mx-auto">About us</a>
    <a className="text-xl mx-auto">Contact</a>
    <a className="text-xl mx-auto">Jobs</a>
    <a className="text-xl mx-auto">Press kit</a>
    </nav>
    <nav className='grid gap-2'>
    <h6 className="text-4xl font-bold mx-auto">Legal</h6>
    <a className="text-xl mx-auto">Terms of use</a>
    <a className="text-xl mx-auto">Privacy policy</a>
    <a className="text-xl mx-auto">Cookie policy</a>
    </nav>
    </footer>
    </div>
  )
}

export default Footer
