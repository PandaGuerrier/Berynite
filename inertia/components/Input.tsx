import React from 'react'
import {Input} from "@nextui-org/input";

interface InputProps {
  label: string,
  required?: boolean,
  type: string,
  name: string,
  value?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
  className?: string
}

export default function InputFD({ label, required, type, name, value, onChange, error, className }: InputProps) {
  return (
       <Input
          label={label}
          radius={"full"}
          variant={"bordered"}
          required={required}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          errorMessage={error}
          className={className}
        />
  )
}
