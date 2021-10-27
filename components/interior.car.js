import Image from 'next/image'

export default function ComfortAssistance ({ post }) {
  if (!post?.interior_1 && !post?.interior_1_img) {
    return null
  }
  return (
    <>
      <tr>
        <td colSpan="2" className="text-xl font-semibold text-white pt-8">Interior</td>
      </tr>
      <tr>
        <td className="py-2 font-mono text-xs text-gray-500 uppercase font-semibold" valign="middle">{post?.interior_1}</td>
        <td className="pt-2 pr-2 flex justify-end">
        {post?.interior_1_img && (
          <div className="relative w-16 h-16">
            <Image src={post?.interior_1_img} layout="fill" objectFit="cover" />
          </div>
        )}
        </td>
      </tr>
      {post?.interior_2 && (
        <tr>
          <td className="py-2 font-mono text-xs text-gray-500 uppercase font-semibold" valign="middle">{post?.interior_2}</td>
          <td className="pt-2 pr-2 flex justify-end">
          {post?.interior_2_img && (
            <div className="relative w-16 h-16">
              <Image src={post?.interior_2_img} layout="fill" objectFit="cover" />
            </div>
          )}
          </td>
        </tr>
      )}
      {post?.interior_3 && (
        <tr>
          <td className="py-2 font-mono text-xs text-gray-500 uppercase font-semibold" valign="middle">{post?.interior_3}</td>
          <td className="pt-2 pr-2 flex justify-end">
          {post?.interior_3_img && (
            <div className="relative w-16 h-16">
              <Image src={post?.interior_3_img} layout="fill" objectFit="cover" />
            </div>
          )}
          </td>
        </tr>
      )}
      {post?.['Leather Seat'] && (
        <tr>
          <td className="py-2 font-mono text-xs text-gray-500 uppercase font-semibold">Leather Seat</td>
          <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right pb-8">{post['Leather Seat']}</td>
        </tr>
      )}
    </>
  )
}
