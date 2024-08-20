import React from 'react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger, Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@nextui-org/react'
import { Link } from '@inertiajs/react'

import useAuth from '~/hooks/use_auth'

export default function NavBar() {
  const auth = useAuth()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [linkEnable, setLinkEnabled] = React.useState(0)

  console.log(auth)
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "#about"
    },
    {
      name: "Projects",
      link: "#projects"
    },
    {
      name: "Contact",
      link: "#contact"
    }
  ]

  async function signOut() {
    window.location.href = "/auth/logout"
  }

  function redirect(url: string)  {
    window.location.href = url
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered className="fixed cursor-default bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-none" shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Berynite</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map((item, index) => (
            <NavbarItem isActive={linkEnable === index} key={item.name}>
              <Link color={linkEnable === index ? 'primary' : 'foreground'} href={item.link} aria-current="page" onClick={() => setLinkEnabled(index)}>
                {item.name}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      <NavbarContent justify="end">
        {auth.isAuthenticated ?
          <>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Image
                  src={(auth.user?.asAvatar) ? '/storage/avatars/' + auth.user.id + '.png' : `https://ui-avatars.com/api/?name=${auth.user?.username}&size=128`}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"/>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="faded">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Connected as </p>
                  <p className="font-semibold">{auth.user!.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
                {
                  auth.role?.slug === 'admin' ?
                    <DropdownItem onClick={() => redirect("/dashboard")} key="dashboard">Dashboard</DropdownItem>
                    : <DropdownItem className={"hidden"}>test</DropdownItem>
                }
                <DropdownItem key="suggests" onClick={() => redirect("/suggests/me")}>Mes suggestions</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={signOut}>
                  Déconnexion
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </> :
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Connexion</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/auth/register" variant="flat">
                Inscription
              </Button>
            </NavbarItem>
          </>
        }

      </NavbarContent>
      <NavbarMenu>
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                linkEnable === index ? 'primary' : 'foreground'
              }
              className="w-full"
              href={item.link}
              onClick={() => setLinkEnabled(index)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
