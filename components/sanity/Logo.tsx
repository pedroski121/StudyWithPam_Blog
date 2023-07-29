import Image from 'next/image'
import brandLogo from '@/public/Tim-logo-white.svg'

function Logo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      {/* <Image
        className="object-cover"
        width={24}
        height={24}
        src={brandLogo}
        alt="brand logo"
      ></Image> */}
      <h2 className='text-white font-bold'>SWP</h2>
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}
export default Logo
