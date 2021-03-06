import Image from "next/image";

import { 
        BellIcon,
        ChatIcon,
        ChevronDownIcon,
        HomeIcon,
        UserGroupIcon,
        ViewGridIcon,
        UserIcon,
    } from '@heroicons/react/solid'
    import { 
        FlagIcon,
        PlayIcon,
        SearchIcon,
        ShoppingCartIcon,
    } from '@heroicons/react/outline'
import HeaderIcon from "./HeaderIcon"
import { session, signOut } from "next-auth/client";
import {useSession} from "next-auth/client";
function Header() {
    const [session] = useSession()
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="header_left flex items-center ">
                <Image alt="" src="https://links.papareact.com/5me" width="40px" height="40px" layout="fixed" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-5 w-5 text-blue-500" />
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search FB by El Arram"/>
                </div>
            </div>
            <div className="flex justify-center flex-grow  header_center">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={ HomeIcon } />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className="header_right flex items-center sm:space-x-2 justify-end">
                <Image
                    alt="" 
                    onClick={() => signOut()}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                    />
                <p className="hidden md:inline-flex whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header
