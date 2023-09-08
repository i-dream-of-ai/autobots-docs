import Image from "next/image"

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}><Image src="/autobots-lion.png" width={50} height={50} priority alt="autobots logo"/> <span className="text-2xl dark:text-white text-gray-800">Autobots AI</span></div>
  )
}
