import Image from 'next/image'

export default function ComfortAssistance ({ post }) {
  if (!post?.comfort_assistance_1 && !post?.comfort_assistance_1_img) {
    return null
  }
  return (
    <>
      <tr>
        <td colSpan="2" className="text-xl font-semibold text-white pt-8">Comfort Assistance</td>
      </tr>
      <tr>
        <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold" valign="middle">{post?.comfort_assistance_1}</td>
        <td className="pt-2 pr-2 flex justify-end">
          {post?.comfort_assistance_1_img && (
            <div className="relative w-16 h-16">
              <Image src={post?.comfort_assistance_1_img} layout="fill" objectFit="cover" />
            </div>
          )}
        </td>
      </tr>
      {post?.comfort_assistance_2 && (
        <tr>
          <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold" valign="middle">{post?.comfort_assistance_2}</td>
          <td className="pt-2 pr-2 flex justify-end pb-8">
            <div className="relative w-16 h-16">
              <Image src={post?.comfort_assistance_2_img} layout="fill" objectFit="cover" />
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
