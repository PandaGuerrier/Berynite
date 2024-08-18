import usePageProps from './use_page_props'
import User from '#models/user'
import Role from '#models/role'

export default function useAuth() {
  const props = usePageProps<{
    auth: {
      user: User | null,
      isAuthenticated: boolean,
      role: Role | null,
    }
  }>()

  return props.auth
}
