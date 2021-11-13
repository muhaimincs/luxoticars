import Image from 'next/image'

export default function Wheels ({ post }) {
  if (!post?.wheels_1) {
    return null
  }
  return (
    <>
      <tr>
        <td colSpan="2" className="text-xl font-semibold text-white pt-8">Wheels</td>
      </tr>
      <tr>
        <td className="py-2 font-mono text-xs text-gray-500 uppercase font-semibold break-words pr-3" valign="middle">
          {post?.wheels_1}
        </td>
        <td className="pt-2 pr-2 flex justify-end">
        {post?.wheels_1_img && (
          <div className="relative w-16 h-16">
            <Image src={post?.wheels_1_img} layout="fill" objectFit="cover" />
          </div>
        )}
        </td>
      </tr>
    </>
  )
}
