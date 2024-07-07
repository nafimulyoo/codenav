import { atom, useAtom } from "jotai"

import { Course, courses } from "@/app/data/course_data"

type Config = {
  selected: Course["id"] | null
}

const configAtom = atom<Config>({
  selected: courses[0].id,
})

export function useCourse() {
  return useAtom(configAtom)
}