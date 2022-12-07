import { ASIZE, _84X84_BlockSize, _42X84_BlockSize, _84X42_BlockSize, _42X42_BlockSize, _42X21_BlockSize, _21X42_BlockSize, _21X21_BlockSize } from "@game/static/blocksSize"

//角色动画
export const adventurerFrames = {
    stand: [
        [0, 0, ASIZE.width, ASIZE.height],
        [ASIZE.width, 0, ASIZE.width, ASIZE.height],
        [ASIZE.width * 2, 0, ASIZE.width, ASIZE.height],
        [ASIZE.width * 3, 0, ASIZE.width, ASIZE.height]
    ],
    run: [[ASIZE.width, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 2, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 3, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 4, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 5, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 6, ASIZE.height, ASIZE.width, ASIZE.height],],
    jump: [[ASIZE.width, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 2, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 3, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 4, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 5, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 6, ASIZE.height * 4, ASIZE.width, ASIZE.height],],
    float: [[ASIZE.width, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 2, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 3, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 4, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 5, ASIZE.height * 4, ASIZE.width, ASIZE.height],
    [ASIZE.width * 6, ASIZE.height * 4, ASIZE.width, ASIZE.height],],
    dash:  [[ASIZE.width, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 2, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 3, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 4, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 5, ASIZE.height, ASIZE.width, ASIZE.height],
    [ASIZE.width * 6, ASIZE.height, ASIZE.width, ASIZE.height],],
    wallJump: [
        [ASIZE.width * 2, ASIZE.height * 11, ASIZE.width, ASIZE.height],
        [ASIZE.width * 3, ASIZE.height * 11, ASIZE.width, ASIZE.height]
    ]
}
//一般可碰撞方块动画
export const _84X84_BlockFrames = {
    static: [
        [0, 0, _84X84_BlockSize.width, _84X84_BlockSize.height]
    ]
}
export const _42X84_BlockFrames = {
    static: [
        [0, 0, _42X84_BlockSize.width, _42X84_BlockSize.height]
    ]
}
export const _84X42_BlockFrames = {
    static: [
        [0, 0, _84X42_BlockSize.width, _84X42_BlockSize.height]
    ]
}
export const _42X42_BlockFrames = {
    static: [
        [0, 0, _42X42_BlockSize.width, _42X42_BlockSize.height]
    ]
}
export const _42X21_BlockFrames = {
    static: [
        [0, 0, _42X21_BlockSize.width, _42X21_BlockSize.height]
    ]
}
export const _21X42_BlockFrames = {
    static: [
        [0, 0, _21X42_BlockSize.width, _21X42_BlockSize.height]
    ]
}
export const _21X21_BlockFrames = {
    static: [
        [0, 0, _21X21_BlockSize.width, _21X21_BlockSize.height]
    ]
}

export const _84X84_MoveBlockFrames = {
    static: [
        [0, 0, _84X84_BlockSize.width, _84X84_BlockSize.height]
    ]
}
export const _42X84_MoveBlockFrames = {
    static: [
        [0, 0, _42X84_BlockSize.width, _42X84_BlockSize.height]
    ]
}
export const _84X42_MoveBlockFrames = {
    static: [
        [0, 0, _84X42_BlockSize.width, _84X42_BlockSize.height]
    ]
}
export const _42X42_MoveBlockFrames = {
    static: [
        [0, 0, _42X42_BlockSize.width, _42X42_BlockSize.height]
    ]
}
export const _42X21_MoveBlockFrames = {
    static: [
        [0, 0, _42X21_BlockSize.width, _42X21_BlockSize.height]
    ]
}
export const _21X42_MoveBlockFrames = {
    static: [
        [0, 0, _21X42_BlockSize.width, _21X42_BlockSize.height]
    ]
}
export const _21X21_MoveBlockFrames = {
    static: [
        [0, 0, _21X21_BlockSize.width, _21X21_BlockSize.height]
    ]
}
//陷阱方块动画
export const _84X84_TrapBlockFrames = {
    static: [
        [0, 0, _84X84_BlockSize.width, _84X84_BlockSize.height]
    ]
}
export const _42X84_TrapBlockFrames = {
    static: [
        [0, 0, _42X84_BlockSize.width, _42X84_BlockSize.height]
    ]
}
export const _84X42_TrapBlockFrames = {
    static: [
        [0, 0, _84X42_BlockSize.width, _84X42_BlockSize.height]
    ]
}
export const _42X42_TrapBlockFrames = {
    static: [
        [0, 0, _42X42_BlockSize.width, _42X42_BlockSize.height]
    ]
}
export const _42X21_TrapBlockFrames = {
    static: [
        [0, 0, _42X21_BlockSize.width, _42X21_BlockSize.height]
    ]
}
export const _21X42_TrapBlockFrames = {
    static: [
        [0, 0, _21X42_BlockSize.width, _21X42_BlockSize.height]
    ]
}
export const _21X21_TrapBlockFrames = {
    static: [
        [0, 0, _21X21_BlockSize.width, _21X21_BlockSize.height]
    ]
}