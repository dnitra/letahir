type DIGIT1TO9 = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
type DIGIT0TO1 = '0'|'1'
type DIGIT0TO9 = '0'|DIGIT1TO9
type DIGIT0TO2 = '0'|'1'|'2'
type DIGIT0TO5 = '0'|'1'|'2'|'3'|'4'|'5'
type DAY = `${DIGIT1TO9}`|`1${DIGIT0TO9}`|`2${DIGIT0TO9}`|`3${DIGIT0TO1}`|`0${DIGIT1TO9}`
type MONTH = `${DIGIT1TO9}`|`1${DIGIT0TO2}`|`0${DIGIT1TO9}`

export type DATE = `${DAY}.${MONTH}.${DIGIT1TO9}${string}`
