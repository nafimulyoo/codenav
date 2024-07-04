import { atom, useAtom } from "jotai"

import { Competition, competitions } from "@/app/(dashboard)/competitions/data"

type Config = {
  selected: Competition["id"] | null
}

const configAtom = atom<Config>({
  selected: competitions[0].id,
})

export function useCompetition() {
  return useAtom(configAtom)
}