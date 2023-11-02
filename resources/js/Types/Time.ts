type H1 = '0'|'1'|'2'|''
type H2 = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
type M1 = '0'|'1'|'2'|'3'|'4'|'5'
type M2 = H2

type HH = `${H1}${H2}`
type MM = `${M1}${M2}`

export type Time = `${HH}:${MM}`

