import { Button } from '@nextui-org/react'

interface ButtonProps {
  type: "button" | "submit" | "reset",
  name: string,
  disabled?: boolean,
  className?: string,
  onPress?: () => void
}

export default function DeezerButton({ name, type, disabled, className, onPress }: ButtonProps) {
  return (
      <Button
        variant={"solid"}
        type={type}
        size={"lg"}
        onPress={onPress}
        name={name}
        disabled={disabled}
        className={"bg-[#9648FC] text-white " + className}
        radius={"full"}
      >{name}</Button>
  )
}
