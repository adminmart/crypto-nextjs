import Image from "next/image";

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                    <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">The most trusted cryptocurrency platform</h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {/* Column-1 */}
                        <div className="bg-blue py-10 pr-12 pl-6 rounded-lg">
                            <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                <Image src={'/images/Features/featureOne.svg'} alt="featureOne" width={24} height={30} />
                            </div>
                            <h5 className="text-offwhite text-lg font-medium mb-4">Secure storage</h5>
                            <p className="text-lightblue text-sm font-normal">We lake data security and privacy very seriously</p>
                        </div>
                        {/* Column-2 */}
                        <div className="bg-blue py-10 pr-12 pl-6 rounded-lg">
                            <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                <Image src={'/images/Features/featureTwo.svg'} alt="featureTwo" width={24} height={30} />
                            </div>
                            <h5 className="text-offwhite text-lg font-medium mb-4">Free to use</h5>
                            <p className="text-lightblue text-sm font-normal">Top notch crypto portfolio traking at no cost</p>
                        </div>
                        {/* Column-3 */}
                        <div className="bg-blue py-10 pr-12 pl-6 rounded-lg">
                            <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                <Image src={'/images/Features/featureThree.svg'} alt="featureThree" width={24} height={30} />
                            </div>
                            <h5 className="text-offwhite text-lg font-medium mb-4">Real-time price data</h5>
                            <p className="text-lightblue text-sm font-normal">Updating 24/7 using price data form the biggest exchanges</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
