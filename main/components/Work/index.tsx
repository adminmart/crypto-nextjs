import Image from 'next/image';

const Work = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative'>
            <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>How it work</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry standard dummy text ever.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    <div className='card-b p-8'>
                        <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                            <Image src={'/images/Work/icon-one.svg'} alt="nothing" width={44} height={44} />
                        </div>
                        <div>
                            <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                        </div>
                        <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>Create Account</h3>
                        <p className='text-base font-normal text-bluish text-center mt-2'>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry and this</p>
                        <span className="text-base font-normal m-0 text-bluish text-center hides"> standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived...
                        </span>
                    </div>

                    <div className='card-b p-8'>
                        <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                            <Image src={'/images/Work/icon-two.svg'} alt="nothing" width={44} height={44} />
                        </div>
                        <div>
                            <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                        </div>
                        <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>Find your Credit</h3>
                        <p className='text-base font-normal text-bluish text-center mt-2'>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry and this</p>
                        <span className="text-base font-normal m-0 text-bluish text-center hides"> standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived...
                        </span>
                    </div>

                    <div className='card-b p-8'>
                        <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                            <Image src={'/images/Work/icon-three.svg'} alt="nothing" width={44} height={44} />
                        </div>
                        <div>
                            <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                        </div>
                        <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>Exchange Currency</h3>
                        <p className='text-base font-normal text-bluish text-center mt-2'>Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry and this</p>
                        <span className="text-base font-normal m-0 text-bluish text-center hides"> standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived...
                        </span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Work;
