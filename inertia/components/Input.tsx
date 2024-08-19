import React from 'react'
import {Input} from "@nextui-org/input";

interface InputProps {
  label: string,
  required?: boolean,
  type: string,
  name: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  error?: string,
  className?: string
}

export default function InputPanda({ label, required, type, name, value, onChange, error, className }: InputProps) {
  return (
    <div>
      <Input
        label={label}
        radius={"full"}
        variant={"underlined"}
        required={required}
        type={type}
        name={name}
        fullWidth
        value={value}
        onChange={onChange}
        color={error ? "danger" : "primary"}
        errorMessage={error}
        className={className}
      />
      {
        error && (
          <p className="text-red-500 text-xs italic">{error}</p>
        )
      }
    </div>

  )
}
