import Image from 'next/image';
import NavbarClient from './NavbarClient';
import Link from 'next/link';
import CategoryList from './Category';
import MarqueeList from './MarqueeList';
const NavBar = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka",
    });
    return (
        <div>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link href="/">
            <div className="flex items-center gap-2">
                <div className="bg-green-600 w-13 h-13 p-2 rounded-xl">
                    <Image className="border-2" src={'/logo-icon.png'} alt="Logo Icon" height={40} width={40} />
                </div>
                <div className='items-center'>
                    <p className='text-2xl font-bold'>বাজার দর</p>
                    <p className='text-sm'>{date}</p>
                </div>
            </div>
            </Link>
            <div>
                <NavbarClient/>
            </div>
        </div>
        <hr className='border-gray-300'></hr>
        <div className='max-w-7xl mx-auto px-6 py-4'>
            <CategoryList/>
        </div>
        <hr className='border-gray-300'></hr>
        <div className='w-full mx-auto'>
            <MarqueeList/>
        </div>
        <hr className='border-gray-300'></hr>
        </div>
    );
};

export default NavBar;