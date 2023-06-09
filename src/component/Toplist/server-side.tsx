// Components
import { ToplistLayout } from './layout'

// Types
import { APIResponse } from '@/types'

export const ToplistServerSide = ({ data }: { data: APIResponse }) => {
  return <ToplistLayout content={data.contents[0]} />
}
