export type T_BlockMoveMentTrace = {
 trace:T_BlockMoveMentSinglePort[];
 playStatus:T_PlayStatus;
}
export type T_BlockMoveMentSinglePort = {
 x:number;
 y:number;
 duration:number;
} 
export type T_PlayStatus = 'normal'|'reverse'|'infinite'|'cycle'

export class blockTraceMovementObj {
    originPosition:{x:number,y:number};
    blockTrace:T_BlockMoveMentTrace
    wholeTrace:T_BlockMoveMentSinglePort[];
    playStatus:T_PlayStatus;
    nextPort: T_BlockMoveMentSinglePort;
    beforePort: T_BlockMoveMentSinglePort;
    portIndex: number;
    originPort: any;
    speed: { x: number; y: number; };
    constructor(originPosition:{x:number,y:number},blockTrace:T_BlockMoveMentTrace){
        this.blockTrace = blockTrace
        this.wholeTrace = blockTrace.trace.map(({x,y,duration})=>({x:x+originPosition.x,y:y+originPosition.y,duration:duration}))
        this.playStatus = blockTrace.playStatus
        this.originPosition = originPosition
        this.originPort = originPosition
        this.nextPort = this.wholeTrace[0]
        this.beforePort = this.originPort
        this.portIndex = 0
        this.speed={
            x:(this.nextPort.x -this.beforePort.x)/this.nextPort.duration,
            y:(this.nextPort.y -this.beforePort.y)/this.nextPort.duration
        }
    }
    blockTraceMovement(speed:{x:number,y:number},position:{x:number,y:number},tick:number){

        if(Math.abs(position.x-this.nextPort.x)<0.5&&Math.abs(position.y-this.nextPort.y)<0.5){  
            if(this.portIndex===this.wholeTrace.length-1){
                speed.x=0
                speed.y=0
                this.portIndex=0
            }
            this.portIndex++
            this.beforePort = this.nextPort
            this.nextPort = this.wholeTrace[this.portIndex]
            this.speed={
                x:(this.nextPort.x -this.beforePort.x)/this.nextPort.duration,
                y:(this.nextPort.y -this.beforePort.y)/this.nextPort.duration
            } 
        }
        speed.x = this.speed.x
        speed.y = this.speed.y
    }
    nowTraceFunc(tick:number){
        this.wholeTrace.forEach((port,index)=>{
            const which = ~~(tick/this.nextPort.duration)
            this.beforePort = this.nextPort
                if(which===0){
                    this.portIndex = index
                    this.nextPort = port
                    console.log(this.nextPort.x)
                }
                if(index===this.wholeTrace.length-1){
                    this.portIndex = index
                    this.nextPort = port
                }
            })
    }
}