export default function MobileMenu({ handleClickGoToSection }: { handleClickGoToSection: (targetId: string) => void }){
    return(
        <div className='absolute top-[80px] h-[140px] w-full left-0 bg-white'>
                            <ul className="w-full h-full flex flex-col">
                            <li className="px-4 pt-1 text-lg font-medium"><button onClick={() => handleClickGoToSection('#Home')}>Home</button></li>
                            <li className="px-4 pt-1 text-lg font-medium"><button onClick={() => handleClickGoToSection('#aboutme')}>About</button></li>
                            <li className="px-4 pt-1 text-lg font-medium"><button onClick={() => handleClickGoToSection('#myprojects')}>Projects</button></li>
                            <li className="px-4 pt-1 text-lg font-medium"><button onClick={() => handleClickGoToSection('#contact')}>Contact</button></li>
                            </ul>
        </div>
    )
}