import {
    ASIZE,
    _84X84_BlockSize,
    _42X42_BlockSize,
    _42X84_BlockSize,
    _84X42_BlockSize,
    _42X21_BlockSize,
    _21X42_BlockSize,
    _21X21_BlockSize
} from '@game/static/blocksSize'
//角色贴图
import ADVENTURER from '@game/assets/adventurer.png'
export const adventurePicture = ADVENTURER
//一般可碰撞方块贴图
import _84X84_BLOCK from '@game/assets/block/_84X84_.jpg'
import _84X42_BLOCK from '@game/assets/block/_84X42_.jpg'
import _42X84_BLOCK from '@game/assets/block/_42X84_.jpg'
import _42X42_BLOCK from '@game/assets/block/_42X42_.jpg'
import _42X21_BLOCK from '@game/assets/block/_42X21_.jpg'
import _21X42_BLOCK from '@game/assets/block/_21X42_.jpg'
import _21X21_BLOCK from '@game/assets/block/_21X21_.jpg'
export const _84X84_BlockPicture = _84X84_BLOCK
export const _42X42_BlockPicture = _42X42_BLOCK
export const _84X42_BlockPicture = _84X42_BLOCK
export const _42X84_BlockPicture = _42X84_BLOCK
export const _42X21_BlockPicture = _42X21_BLOCK
export const _21X42_BlockPicture = _21X42_BLOCK
export const _21X21_BlockPicture = _21X21_BLOCK
//一般可碰撞移动方块贴图
import _84X84_MOVE_BLOCK from '@game/assets/moveBlock/_84X84_.jpg'
import _84X42_MOVE_BLOCK from '@game/assets/moveBlock/_84X42_.jpg'
import _42X84_MOVE_BLOCK from '@game/assets/moveBlock/_42X84_.jpg'
import _42X42_MOVE_BLOCK from '@game/assets/moveBlock/_42X42_.jpg'
import _42X21_MOVE_BLOCK from '@game/assets/moveBlock/_42X21_.jpg'
import _21X42_MOVE_BLOCK from '@game/assets/moveBlock/_21X42_.jpg'
import _21X21_MOVE_BLOCK from '@game/assets/moveBlock/_21X21_.jpg'
export const _84X84_MoveBlockPicture = _84X84_MOVE_BLOCK
export const _42X42_MoveBlockPicture = _42X42_MOVE_BLOCK
export const _84X42_MoveBlockPicture = _84X42_MOVE_BLOCK
export const _42X84_MoveBlockPicture = _42X84_MOVE_BLOCK
export const _42X21_MoveBlockPicture = _42X21_MOVE_BLOCK
export const _21X42_MoveBlockPicture = _21X42_MOVE_BLOCK
export const _21X21_MoveBlockPicture = _21X21_MOVE_BLOCK
//陷阱方块贴图
import _84X84_TRAP from '@game/assets/trap/_84X84_.jpg'
import _84X42_TRAP from '@game/assets/trap/_84X42_.jpg'
import _42X84_TRAP from '@game/assets/trap/_42X84_.jpg'
import _42X42_TRAP from '@game/assets/trap/_42X42_.jpg'
import _42X21_TRAP from '@game/assets/trap/_42X21_.jpg'
import _21X42_TRAP from '@game/assets/trap/_21X42_.jpg'
import _21X21_TRAP from '@game/assets/trap/_21X21_.jpg'
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
    _21X21_TrapBlockPicture,
    _84X84_MoveBlockPicture,
    _42X42_MoveBlockPicture,
    _84X42_MoveBlockPicture,
    _42X84_MoveBlockPicture,
    _42X21_MoveBlockPicture,
    _21X42_MoveBlockPicture,
    _21X21_MoveBlockPicture,
]
