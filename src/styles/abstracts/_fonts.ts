
const sans = {
  base: "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  hiragino: "'Hiragino Sans', 'Hiragino Kaku Gothic ProN'",
  yu: "'Yu Gothic', 'YuGothic'",
  noto: "'Noto Sans', 'Noto Sans CJK JP', 'Noto Sans JP', 'Noto Sans Japanese'",
  meiryo: "'Meiryo'",
} as const

const serif = {
  base: "serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  hiragino: "'Hiragino Mincho ProN'",
  yu: "'Yu Mincho', 'YuMincho'",
  noto: "'Noto Serif', 'Noto Serif CJK JP', 'Noto Serif JP', 'Noto Serif Japanese'",
} as const

export const fonts = {
  initial: "'PT Serif', georgia, 'Times New Roman', times, serif",
  sans: `${sans.hiragino}, ${sans.yu}, ${sans.noto}, ${sans.meiryo}, ${sans.base}`,
  serif: `${serif.hiragino}, ${serif.yu}, ${serif.noto}, ${serif.base}`,
  georgia: "georgia, 'Times New Roman', times, serif",
} as const
