import pngegg6 from '../../assets/pngegg6.png'
const Hero = () => {
    return (
        <div className='h-[510px]'>
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-5xl font-bold mb-10'>Collecting your,s Book <br /> from Store </h1>
                    <button className='text-white px-5 py-3 font-bold
                     bg-green-600 rounded-lg'>View The list</button>
                </div>
                <div className='h-3/4 w-auto'>
                    <img src={pngegg6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;