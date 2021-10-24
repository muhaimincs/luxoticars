export default function ComfortAssistance ({ post }) {
  if (!post?.['Premium Sound System'] || post?.['Bluetooth Connection']) {
    return null
  }
  return (
    <>
      <tr>
        <td colSpan="2" className="text-xl font-semibold text-white pt-8">Audio / Communication</td>
      </tr>
      <tr>
        <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Premium Sound System</td>
        <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post['Premium Sound System']}</td>
      </tr>
      {post?.['Bluetooth Connection'] && (
        <tr>
          <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Bluetooth Connection</td>
          <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post?.['Bluetooth Connection']}</td>
        </tr>
      )}
      {post?.['Navigation System'] && (
        <tr>
          <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Navigation System</td>
          <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post?.['Navigation System']}</td>
        </tr>
      )}
      {post?.['Smart Device Integration'] && (
        <tr>
          <td className="py-2 font-mono text-xs text-gray-500 whitespace-nowrap uppercase font-semibold">Smart Device Integration</td>
          <td className="py-2 pl-2 font-mono text-xs text-white whitespace-pre-line text-right">{post?.['Smart Device Integration']}</td>
        </tr>
      )}
    </>
  )
}
