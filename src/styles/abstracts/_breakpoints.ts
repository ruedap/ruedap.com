export type TBreakpoints<T = number> = Readonly<{
  xs: T
  sm: T
  md: T
  lg: T
  xl: T
}>

const breakpoints: TBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
}

export const __config = {
  mediaRule: '@media screen and ',
} as const

const maxWidth = (value: number) => value - 0.02

const up = {
  sm: `${__config.mediaRule}(min-width: ${breakpoints.sm}px), print`,
  md: `${__config.mediaRule}(min-width: ${breakpoints.md}px), print`,
  lg: `${__config.mediaRule}(min-width: ${breakpoints.lg}px), print`, // 印刷時はlgサイズ
  xl: `${__config.mediaRule}(min-width: ${breakpoints.xl}px)`,
} as const

const down = {
  sm: `${__config.mediaRule}(max-width: ${maxWidth(breakpoints.sm)}px)`,
  md: `${__config.mediaRule}(max-width: ${maxWidth(breakpoints.md)}px)`,
  lg: `${__config.mediaRule}(max-width: ${maxWidth(breakpoints.lg)}px)`,
  xl: `${__config.mediaRule}(max-width: ${maxWidth(breakpoints.xl)}px), print`,
} as const

const print = '@media print'

export const mq = {
  up,
  down,
  print,
} as const

export type TMq = typeof mq
