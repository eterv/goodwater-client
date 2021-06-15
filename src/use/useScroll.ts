import throttle from 'lodash/throttle'
import { onMounted, onUnmounted } from 'vue'

type Element = HTMLElement | Window | null
interface Position {
  x: number
  y: number
}
export type EffectFn = (props: { prev: Position; current: Position }) => void

const DEFAULT_INTERVAL = 50

const getScrollPos = (el: Element): Position => {
  if (el == null) return { x: 0, y: 0 }
  if (el === window) return { x: el.pageXOffset, y: el.pageYOffset }

  const pos = (el as HTMLElement).getBoundingClientRect()
  return { x: pos.left, y: pos.top }
}

export const useElementScroll = async (
  effect: EffectFn,
  element: Element,
  interval: number = DEFAULT_INTERVAL
): Promise<any> => {
  let pos = getScrollPos(element)

  const onScroll = throttle(() => {
    const curPos = getScrollPos(element)
    effect({ prev: pos, current: curPos })
    pos = curPos
  }, interval)

  onMounted(() => {
    ;(element as EventTarget).addEventListener('scroll', onScroll)
  })

  onUnmounted(() => {
    ;(element as EventTarget).removeEventListener('scroll', onScroll)
  })
}

export const useWindowScroll = async (
  effect: EffectFn,
  interval: number = DEFAULT_INTERVAL
): Promise<any> => {
  return useElementScroll(effect, window, interval)
}
