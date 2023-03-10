import React from "react";
import Link from "next/link";
import Image from "next/image";
//components
import SearchInput from '../SearchInput/SearchInput'

export type Props = {
    setQuery?: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setQuery }: Props) => (
    <div className="sticky flex top-0 z-10 w-full h-24 bg-zinc-900">
        <div className="flex justify-between w-full h-full max-w-7xl px-4 m-auto"  >
            <Link href="/">
                <div className="flex items-center cursor-pointer">
                    <div className="invisible md:visible md:mt-5">
                        <Image width={150} height={50} src="rmdb-logo.svg" alt="rmdb-logo" />
                    </div>
                    <div className="absolute md:invisible">
                        <Image width={42} height={42} src="rmdb-logo-small.svg" alt="rmdb-logo-small" />
                    </div>
                </div>
            </Link>
            {
                setQuery ? (<div className="relative flex  items-center">
                    <SearchInput setQuery={setQuery} />
                </div>) : ''
            }
        </div>
    </div>)

export default Header;