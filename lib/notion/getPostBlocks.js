import WEB from '../../web.config'
import { NotionAPI } from 'notion-client'

export async function getPostBlocks (id) {
  const authToken = WEB.notionAccessToken || null
  const api = new NotionAPI({ authToken })
  const pageBlock = await api.getPage(id)
  return pageBlock
}
