import React from "react"
import { XCircle } from "@phosphor-icons/react"

import ActionButton from "./modules/ActionButton"

export default function ActionButtonCancel({ ...atributes }) {
  return (
    <ActionButton {...atributes}>
      <XCircle
        size={32}
        className="rounded-full hover:border-2 hover:bg-rose-600 hover:text-white"
      />
    </ActionButton>
  )
}
