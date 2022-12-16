const Heading2 = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase()

  return <h2 id={idText}>{children}</h2>
}

const MDXComponents = {
  h2: Heading2,
}

export default MDXComponents