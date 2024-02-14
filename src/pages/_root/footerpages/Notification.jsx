import Mark from '../../../assets/avatar-mark-webber.webp';
import Angela from '../../../assets/avatar-angela-gray.webp';
import Jacob from '../../../assets/avatar-jacob-thompson.webp';
import Anna from '../../../assets/avatar-anna-kim.webp';
import Kimberly from '../../../assets/avatar-kimberly-smith.webp';
import Nathan from '../../../assets/avatar-nathan-peterson.webp';
import Rizky from '../../../assets/avatar-rizky-hasanuddin.webp';

import Chess from '../../../assets/image-chess.webp';

export default function Notifcations() {
    return (
        <>
        {/*Mark Weber */}
        <div className="bg-veryLightGrayishBlue flex flex-row items-center rounded-md px-6 py-6 mt-6 ">
            <div>
                <img src={Mark} alt='Marks Profile picture'  className='w-10 h-10 ' />
            </div>
            <div className=' items-start ml-4' >
                <p className=' ' >
                 <strong className=' hover:text-blue ' >Mark Webber </strong>
                 reacted to your recent post My first tournament today!
                </p>
                <p className=''>1m ago</p>
            </div>
        </div>
        {/*Angela Gray */}
        <div className='py-6 px-6 mb-6 flex flex-row mt-6  rounded-md bg-veryLightGrayishBlue items-center' >
            <div>
            <img src={Angela} alt='Angelas Profile Picture' className='pr-1 w-10 h-10'  />
            </div>
            <div className='ml-4 '>
                <h1 className='' >
                    <strong>Angela Gray </strong>
                    followed you</h1>
                <p className='mr-28' >5 min ago</p>
            </div>
        </div>

        {/*Jacob Thompson */}
        <div className='items-center flex flex-row rounded-md bg-veryLightGrayishBlue px-6  py-6 ' >
            <img src={Jacob} alt='Jacobs profile picture' className='mr-4 w-10 h-10' />
            <div className='md:mr-4'>
                <p> 
                    <strong>Jacob Thompson </strong>
                    has joined your group 
                    <strong> Chess club</strong>
                </p>
                <p className=''>1 day ago</p>
            </div>
        </div>

        {/*Rizky */}
        <div className='flex flex-row items-center mt-6 px-6rounded-md py-6 w-full ' >
            <img src={Rizky} alt='Rizkys profile picture' className='mr-4 w-10 h-10 ' />
            <div>
                <p>
                    <strong>Rizky Hasunudin  </strong>
                    sent you a private message</p>
                <p>5 days ago</p>
                    <p className='bg-LightGrayishBlue1 items-center py-6 px-6 mt-1 border rounded-md'>Hello, thanks for setting up the Chess club. I've been a member for 
                        a few weeks now and I'm already having lot's of fun and improving my game.
                    </p>
            </div>
        </div>

        {/*Kimberly Smith */}
        <div className='flex flex-row items-center mt-6 px-6 rounded-md py-6' >
            <img src={Kimberly} alt='kimberlys profile picture' className='mr-4 w-10 h-10 ' />
            <div className='md:mr-6'>
                <p>
                    <strong className=''>Kimberly Smith </strong>
                    commented on your picture</p>
                <p>1 week ago</p>
            </div>
            <img src={Chess} alt='a girl playing chess' className=' w-10 h-10 md:ml-80 ' />
        </div>

        {/*Nathan Peterson */}
        <div className='flex flex-row px-6 mt-6 rounded-md py-6 ' >
            <img src={Nathan} alt='Nathans profile picture' className='mr-4 w-10 h-10 ' />
            <div>
                <p className='font-sm'>
                    <strong>Nathan Peterson </strong>
                    reacted to your recent post
                    <strong> 5 end-game strategies to increase your win rate</strong>
                </p>
                <p>2 Weeks ago</p>
            </div>
        </div>

        {/*Anna Kim */}
        <div className='flex flex-row mt-6 px-6 items-center rounded-md py-6 ' >
            <img src={Anna} alt='Annas Profile Picture' className='mr-4 w-10 h-10 ' />
            <div>
                <p>
                    <strong>Anna Kim  </strong>
                    left the group 
                    <strong> Chess Club</strong>
                </p>
                <p>
                    2 Weeks ago
                </p>
            </div>
        </div>
        </>
    )

}
