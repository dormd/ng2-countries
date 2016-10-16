import { Injectable, Renderer } from '@angular/core';

interface IAnimateOptions {
    fadeStepMilliseconds?: number, 
    callback?: Function
}

@Injectable()
export class AnimationsService {

    private _defaultFadeStepMilliseconds = 700;

    constructor() {}

    public fadeIn(node: Node, renderer: Renderer, callback?: Function, fadeStepMilliseconds?: number): void {
        const animations = [
            { opacity: '0' },
            { opacity: '1' }
        ];

        this._animate(node, renderer, animations, {
            fadeStepMilliseconds,
            callback
        });        
    }

    public fadeOut(node: Node, renderer: Renderer, callback?: Function, fadeStepMilliseconds?: number): void {
        const animations = [
            { opacity: '1' },
            { opacity: '0' }
        ];

        this._animate(node, renderer, animations, {
            fadeStepMilliseconds,
            callback
        });
    }

    public makeBigger(node: Node, renderer: Renderer, callback?: Function, fadeStepMilliseconds?: number): void {
        const animations = [
            {transform: 'scale(1)'},            
            {transform: 'scale(1.2)'},
            {transform: 'scale(1)'}
            // { scale: 1.1 }
        ];

        this._animate(node, renderer, animations, {
            fadeStepMilliseconds,
            callback
        });
    }


    private _animate(node: Node, renderer: Renderer, animations, options: IAnimateOptions = {}): void {
        const ms = options.fadeStepMilliseconds || this._defaultFadeStepMilliseconds;

        renderer.invokeElementMethod(
            node, 
            'animate', 
            [
                animations, 
                ms
            ]
        );

        if (options.callback)
            setTimeout(options.callback, ms)
    }
}
