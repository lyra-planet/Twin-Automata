import { Sprite, Texture } from 'pixi.js'
import {ASIZE,
    _84X84_BlockSize,
    _42X42_BlockSize,
    _42X84_BlockSize,
    _84X42_BlockSize,
    _42X21_BlockSize,
    _21X42_BlockSize,
    _21X21_BlockSize,
    GroundPosition} from './blocksSize'
//角色贴图
import ADVENTURER from '../../assets/adventurer-v1.5-Sheet.png'
export const adventurePicture = ADVENTURER
//一般可碰撞方块贴图
import _84X84_BLOCK from '../../assets/block/_84X84_.jpg'
import _84X42_BLOCK from '../../assets/block/_84X42_.jpg'
import _42X84_BLOCK from '../../assets/block/_42X84_.jpg'
import _42X42_BLOCK from '../../assets/block/_42X42_.jpg'
import _42X21_BLOCK from '../../assets/block/_42X21_.jpg'
import _21X42_BLOCK from '../../assets/block/_21X42_.jpg'
import _21X21_BLOCK from '../../assets/block/_21X21_.jpg'
export const _84X84_BlockPicture = _84X84_BLOCK
export const _42X42_BlockPicture = _42X42_BLOCK
export const _84X42_BlockPicture = _84X42_BLOCK
export const _42X84_BlockPicture = _42X84_BLOCK
export const _42X21_BlockPicture = _42X21_BLOCK
export const _21X42_BlockPicture = _21X42_BLOCK
export const _21X21_BlockPicture = _21X21_BLOCK
//陷阱方块贴图
import _84X84_TRAP from '../../assets/trap/_84X84_.jpg'
import _84X42_TRAP from '../../assets/trap/_84X42_.jpg'
import _42X84_TRAP from '../../assets/trap/_42X84_.jpg'
import _42X42_TRAP from '../../assets/trap/_42X42_.jpg'
import _42X21_TRAP from '../../assets/trap/_42X21_.jpg'
import _21X42_TRAP from '../../assets/trap/_21X42_.jpg'
import _21X21_TRAP from '../../assets/trap/_21X21_.jpg'
export const _84X84_TrapBlockPicture = _84X84_TRAP
export const _42X42_TrapBlockPicture = _42X42_TRAP
export const _84X42_TrapBlockPicture = _84X42_TRAP
export const _42X84_TrapBlockPicture = _42X84_TRAP
export const _42X21_TrapBlockPicture = _42X21_TRAP
export const _21X42_TrapBlockPicture = _21X42_TRAP
export const _21X21_TrapBlockPicture = _21X21_TRAP
//所有图片
export const allPicture = [
    adventurePicture,
    _84X84_BlockPicture,
    _84X42_BlockPicture,
    _42X84_BlockPicture,
    _42X42_BlockPicture,
    _42X21_BlockPicture,
    _21X42_BlockPicture,
    _21X21_BlockPicture,
    _84X84_TrapBlockPicture,
    _42X42_TrapBlockPicture,
    _84X42_TrapBlockPicture,
    _42X84_TrapBlockPicture,
    _42X21_TrapBlockPicture,
    _21X42_TrapBlockPicture,
    _21X21_TrapBlockPicture
]
//角色动画
export const adventurerFrames = {
    stand:[
      [0,0,ASIZE.width,ASIZE.height],
      [ASIZE.width,0,ASIZE.width,ASIZE.height],
      [ASIZE.width*2,0,ASIZE.width,ASIZE.height],
      [ASIZE.width*3,0,ASIZE.width,ASIZE.height]
    ],
    run:[[ASIZE.width,ASIZE.height,ASIZE.width,ASIZE.height],
        [ASIZE.width*2,ASIZE.height,ASIZE.width,ASIZE.height],
        [ASIZE.width*3,ASIZE.height,ASIZE.width,ASIZE.height],
        [ASIZE.width*4,ASIZE.height,ASIZE.width,ASIZE.height],
        [ASIZE.width*5,ASIZE.height,ASIZE.width,ASIZE.height],
        [ASIZE.width*6,ASIZE.height,ASIZE.width,ASIZE.height],],
    jump:[[ASIZE.width,ASIZE.height*4,ASIZE.width,ASIZE.height],
          [ASIZE.width*2,ASIZE.height*4,ASIZE.width,ASIZE.height],
          [ASIZE.width*3,ASIZE.height*4,ASIZE.width,ASIZE.height],
          [ASIZE.width*4,ASIZE.height*4,ASIZE.width,ASIZE.height],
          [ASIZE.width*5,ASIZE.height*4,ASIZE.width,ASIZE.height],
          [ASIZE.width*6,ASIZE.height*4,ASIZE.width,ASIZE.height],],
    wallJump:[
        [ASIZE.width*2,ASIZE.height*11,ASIZE.width,ASIZE.height],
        [ASIZE.width*3,ASIZE.height*11,ASIZE.width,ASIZE.height]
    ]
}  
//一般可碰撞方块动画
export const _84X84_BlockFrames = {
    static:[
        [0,0,_84X84_BlockSize.width,_84X84_BlockSize.height]
    ]
}
export const _42X84_BlockFrames = {
    static:[
        [0,0,_42X84_BlockSize.width,_42X84_BlockSize.height]
    ]
}
export const _84X42_BlockFrames = {
    static:[
        [0,0,_84X42_BlockSize.width,_84X42_BlockSize.height]
    ]
}
export const _42X42_BlockFrames = {
    static:[
        [0,0,_42X42_BlockSize.width,_42X42_BlockSize.height]
    ]
}
export const _42X21_BlockFrames = {
    static:[
        [0,0,_42X21_BlockSize.width,_42X21_BlockSize.height]
    ]
}
export const _21X42_BlockFrames = {
    static:[
        [0,0,_21X42_BlockSize.width,_21X42_BlockSize.height]
    ]
}
export const _21X21_BlockFrames = {
    static:[
        [0,0,_21X21_BlockSize.width,_21X21_BlockSize.height]
    ]
}
//陷阱方块动画
export const _84X84_TrapBlockFrames = {
    static:[
        [0,0,_84X84_BlockSize.width,_84X84_BlockSize.height]
    ]
}
export const _42X84_TrapBlockFrames = {
    static:[
        [0,0,_42X84_BlockSize.width,_42X84_BlockSize.height]
    ]
}
export const _84X42_TrapBlockFrames = {
    static:[
        [0,0,_84X42_BlockSize.width,_84X42_BlockSize.height]
    ]
}
export const _42X42_TrapBlockFrames = {
    static:[
        [0,0,_42X42_BlockSize.width,_42X42_BlockSize.height]
    ]
}
export const _42X21_TrapBlockFrames = {
    static:[
        [0,0,_42X21_BlockSize.width,_42X21_BlockSize.height]
    ]
}
export const _21X42_TrapBlockFrames = {
    static:[
        [0,0,_21X42_BlockSize.width,_21X42_BlockSize.height]
    ]
}
export const _21X21_TrapBlockFrames = {
    static:[
        [0,0,_21X21_BlockSize.width,_21X21_BlockSize.height]
    ]
}