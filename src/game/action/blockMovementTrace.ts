import { TBlockMoveMentTrace, TBlockMoveMentSinglePort, TPlayStatus } from "@game/types/action";
import { IPosition, ISpeed } from "@game/types/global";

export class blockTraceMovementObj {
    blockTrace:TBlockMoveMentTrace
    wholeTrace:TBlockMoveMentSinglePort[];
    playStatus:TPlayStatus;
    nextPort: TBlockMoveMentSinglePort;
    beforePort: TBlockMoveMentSinglePort;
    portIndex: number;
    speed: ISpeed;
    constructor(originPosition:IPosition,blockTrace:TBlockMoveMentTrace){
        this.blockTrace = blockTrace
        this.wholeTrace = blockTrace.trace.map(({x,y,duration})=>({x:x+originPosition.x,y:y+originPosition.y,duration:duration}))
        this.playStatus = blockTrace.playStatus
        this.nextPort = this.wholeTrace[0]
        this.beforePort = {x:originPosition.x,y:originPosition.y,duration:0}
        this.portIndex = 0
        this.speed={
            x:(this.nextPort.x -this.beforePort.x)/this.nextPort.duration,
            y:(this.nextPort.y -this.beforePort.y)/this.nextPort.duration
        }
    }
    blockTraceMovement(speed:ISpeed,position:IPosition){
        if(Math.abs(position.x-this.nextPort.x)<0.5
        &&Math.abs(position.y-this.nextPort.y)<0.5){  
            if(this.portIndex===this.wholeTrace.length-1){
                speed.x=0
                speed.y=0
                switch(this.playStatus){
                    case'normal':{
                        return
                    }
                    case 'infinite':{
                        this.portIndex=-1
                    }
                }
                return
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