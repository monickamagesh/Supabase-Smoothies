import Link from "next/link"

export default function Navbar() {
    return (
        <main className="w-full h-24 fixed bg-teal-500 flex flex-col justify-center items-center gap-4 capitalize text-white ">
            <div className=" font-bold leading-20 tracking-wide  text-3xl">supa smoothies</div>
            <div className=" font-bold inline-flex gap-10">
                <span><Link href={'/'}>home</Link></span>
                <span><Link href={'/create'}>create new smoothie</Link></span>
            </div>
        </main>
    )
}