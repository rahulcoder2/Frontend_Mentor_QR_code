import Image from 'next/image'
import React from 'react'

function Qrcode() {
    return (
        <div className='p-4 bg-white rounded-xl max-w-xs'>
            <Image
                src="/qr-code.png"
                width={500}
                height={500}
                alt="qr-code"
                className='object-fill rounded-xl m-auto'
            />
            <div className='py-2'>
                <h1 className='my-2 font-bold text-xl text-center'>
                    Improve your Front-end skills by buliding projects
                </h1>
                <p className='text-center text-[15px] '>
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    )
}

export default Qrcode;