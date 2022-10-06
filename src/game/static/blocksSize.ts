export const ASIZE = {
    width:  50,
    height: 37
}
export const ADVENTURER_SIZE = {
    width: ASIZE.width * 2,
    height: ASIZE.height * 2,
}
export const _84X84_BlockSize = {
    width:84,
    height:84
}
export const _84X42_BlockSize = {
    width:_84X84_BlockSize.width,
    height:_84X84_BlockSize.height/2
}
export const _42X84_BlockSize = {
    width:_84X84_BlockSize.width/2,
    height:_84X84_BlockSize.height
}
export const _42X42_BlockSize = {
    width:_84X84_BlockSize.width/2,
    height:_84X84_BlockSize.height/2
}
export const _42X21_BlockSize = {
    width:_84X84_BlockSize.width/2,
    height:_84X84_BlockSize.height/4
}
export const _21X42_BlockSize = {
    width:_84X84_BlockSize.width/4,
    height:_84X84_BlockSize.height/2
}
export const _21X21_BlockSize = {
    width:_84X84_BlockSize.width/4,
    height:_84X84_BlockSize.height/4
}
export const GroundPosition = {
    x: _84X84_BlockSize.width*20,
    y: _84X84_BlockSize.height*13,
}
export const BornPosition = {
    x:_84X84_BlockSize.width,
    y:_84X84_BlockSize.height*3
}