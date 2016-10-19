import { Injectable, Renderer } from '@angular/core';

interface IAnimateOptions {
    durationMilliseconds?: number, 
    callback?: Function
}

@Injectable()
export class AnimationsService {

    private _defaultMilliseconds = 700;
    private _defaultRotateMilliseconds = 1000;    

    constructor() {}

    public fadeIn(node: Node, renderer: Renderer, callback?: Function, durationMilliseconds?: number): void {
        const animations = [
            { opacity: '0' },
            { opacity: '1' }
        ];

        this._animate(node, renderer, animations, {
            durationMilliseconds,
            callback
        });        
    }

    public fadeOut(node: Node, renderer: Renderer, callback?: Function, durationMilliseconds?: number): void {
        const animations = [
            { opacity: '1' },
            { opacity: '0' }
        ];

        this._animate(node, renderer, animations, {
            durationMilliseconds,
            callback
        });
    }

    public makeBigger(node: Node, renderer: Renderer, callback?: Function, durationMilliseconds?: number): void {
        const animations = [
            { transform: 'scale(1)' },            
            { transform: 'scale(1.2)' },
            { transform: 'scale(1)' }
            // { scale: 1.1 }
        ];

        this._animate(node, renderer, animations, {
            durationMilliseconds,
            callback
        });
    }

    public rotate(node: Node, renderer: Renderer, callback?: Function, durationMilliseconds?: number): void {
        const animations = [
            // { transform: 'rotate(0)' },
            { transform: 'rotateZ(0deg) rotateY(0deg)' },
            { transform: 'rotateZ(180deg) rotateY(180deg)' },                       
            { transform: 'rotateZ(360deg) rotateY(360deg)' },
            // { transform: 'rotate(0)' }
        ];

        this._animate(node, renderer, animations, {
            durationMilliseconds: durationMilliseconds || this._defaultRotateMilliseconds,
            callback
        });
    }

    // public shrink(node: Node, renderer: Renderer, width: number, height: number, callback?: Function, fadeStepMilliseconds?: number): void {
    //     const animations = [
    //         { height: `${height}px` },
    //         { height: '0' }
    //     ];

    //     this._animate(node, renderer, animations, {
    //         fadeStepMilliseconds,
    //         callback
    //     });
    // }

    // public expand(node: Node, renderer: Renderer, width: number, height: number, callback?: Function, fadeStepMilliseconds?: number): void {
    //     const animations = [
    //         { height: '0' },
    //         { height: `${height}px` }
    //     ];

    //     this._animate(node, renderer, animations, {
    //         fadeStepMilliseconds,
    //         callback
    //     });
    // }


    private _animate(node: Node, renderer: Renderer, animations, options: IAnimateOptions): void {
        const ms = options.durationMilliseconds || this._defaultMilliseconds;

        renderer.invokeElementMethod(
            node, 
            'animate', 
            [
                animations, 
                ms
            ]
        );

        if (options.callback)
            setTimeout(options.callback, ms * 0.9)
    }
}
