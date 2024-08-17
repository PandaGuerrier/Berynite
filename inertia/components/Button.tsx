import { Button } from '@nextui-org/react'

interface ButtonProps {
  type: "button" | "submit" | "reset",
  name: string,
  disabled?: boolean,
  className?: string
}

export default function ButtonFD({ name, type, disabled, className }: ButtonProps) {
  return (
      <Button
        variant={"solid"}
        type={type}
        name={name}
        disabled={disabled}
        className={"bg-black dark:bg-white text-white dark:text-black" + className}
        radius={"full"}
      >{name}</Button>
  )
}
