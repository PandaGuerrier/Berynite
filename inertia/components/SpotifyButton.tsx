import { Button } from '@nextui-org/react'

interface ButtonProps {
  type: "button" | "submit" | "reset",
  name: string,
  disabled?: boolean,
  className?: string,
  onPress?: () => void
}

export default function SpotifyButton({ name, type, disabled, className, onPress }: ButtonProps) {
  return (
      <Button
        variant={"solid"}
        type={type}
        onPress={onPress}
        size={"lg"}
        name={name}
        disabled={disabled}
        className={"bg-[#1ed760] text-white " + className}
        radius={"full"}
      >{name}</Button>
  )
}
