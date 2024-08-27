import { RefObject } from "react"

export const getTime = (ref: RefObject<HTMLDivElement>) => ref?.current?.dataset?.time;
