import { IPosition, ISize } from "@game/types/global"


export const ASIZE:ISize = {
    width:  50,
    height: 37
}
export const ADVENTURER_SIZE:ISize = {
    width: ASIZE.width * 2,
    height: ASIZE.height * 2,
}
export const _84X84_BlockSize:ISize = {
    width:84,
    height:84
}
export const _84X42_BlockSize:ISize = {
    width:_84X84_BlockSize.width,
    height:_84X84_BlockSize.height/2
}
export const _42X84_BlockSize:ISize = {
    width:_84X84_BlockSize.width/2,
    height:_84X84_BlockSize.height
}
export const _42X42_BlockSize:ISize = {
    width:_84X84_BlockSize.width/2,
    height:_84X84_BlockSize.height/2
}
export const _42X21_BlockSize:ISize = {
    width:_84X84_BlockSize.width/2,
    height:_84X84_BlockSize.height/4
}
export const _21X42_BlockSize:ISize = {
    width:_84X84_BlockSize.width/4,
    height:_84X84_BlockSize.height/2
}
export const _21X21_BlockSize:ISize = {
    width:_84X84_BlockSize.width/4,
    height:_84X84_BlockSize.height/4
}
export const GroundPosition:IPosition= {
    x: _84X84_BlockSize.width*20,
    y: _84X84_BlockSize.height*13,
}
export const BornPosition:IPosition = {
    x:_84X84_BlockSize.width,
    y:_84X84_BlockSize.height*3
}