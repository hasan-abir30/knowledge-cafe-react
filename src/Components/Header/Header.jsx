
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='md:flex justify-between items-center p-5 border-b-2'>
            <h1 className="text-4xl font-bold text-[#111111]">Knowledge cafe</h1>
            <img className='w-[50px]' src={profile} alt={profile} />
        </header>
    );
};

export default Header;