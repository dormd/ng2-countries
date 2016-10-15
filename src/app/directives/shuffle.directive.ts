import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { AnimationStyles, AnimationKeyframe } from '../models';

@Directive({
    selector: '[shuffle]'
})
export class ShuffleDirective {
    private _isShuffleOn = false;
    private _fadeStepMilliseconds = 1500;
    private _availableIndexesToShuffle: number[];

    constructor(private _elementRef: ElementRef,
                private _renderer: Renderer) { }

    public toggle(): void {
        this._isShuffleOn ? this._stop() : this._start();
    }

    private _start(): void {
        this._isShuffleOn = true;
        this._buildAvailableIndexes();
        this._doShufflingFlow();
    }

    private _buildAvailableIndexes(): void {
        const length = this._getChildrensLength();
        this._availableIndexesToShuffle = _.range(length)
    }

    private _stop(): void {
        this._isShuffleOn = false;
    }

    private _doShufflingFlow = (): void => {
        if (!this._isShuffleOn)
            return;

        const child1Index = this._getRandomChildIndex();
        const child2Index = this._getRandomChildIndex();
        this._shuffleChilds(child1Index, child2Index);
        
        setTimeout(this._doShufflingFlow, 50);
    }

    private _shuffleChilds(child1Index: number, child2Index: number): void {
        console.log(`shuffeling ${child1Index} with ${child2Index}`);

        const childs: HTMLCollection = this._getChildrens();
        const child1: Node = childs[child1Index];
        const child2: Node = childs[child2Index];
        
        // when the child1 next sibling is child2, child2 will be insert before the new place of child1
        const futureChild2NextSibling: Node = child1.nextSibling === child2 ? child1 : child1.nextSibling;

        this._removeAvailableIndexes(child1Index, child2Index)
        
        this._doShuffleAnimation(child1, child2, futureChild2NextSibling, () => {
            this._availableIndexesToShuffle.push(child1Index, child2Index);
        });
    }

    private _doShuffleAnimation(node1: Node, node2: Node, futureNode2NextSibling: Node, callback: Function): void {
        const nativeEl = this._elementRef.nativeElement;        

        this._fadeOutNode(node1, () => {
            // move node1 instead of node2
            this._renderer.invokeElementMethod(nativeEl, 'replaceChild', [ node1, node2 ]);

            this._fadeInNode(node1);
        });

        this._fadeOutNode(node2, () => {
            // when there is next sibling - insert the child before next sibling
            // otherwise append the child to the end of the list
            if (futureNode2NextSibling)
                this._renderer.invokeElementMethod(nativeEl, 'insertBefore', [ node2, futureNode2NextSibling ]);
            else
                this._renderer.invokeElementMethod(nativeEl, 'appendChild', [ node2 ]);

            this._fadeInNode(node2, callback);
        });
    }

    private _fadeInNode = (node: Node, callback?: Function): void => {
        this._renderer.invokeElementMethod(
            node, 
            'animate', 
            [
                [
                    {opacity: '0'},
                    {opacity: '1'}
                ], 
                this._fadeStepMilliseconds
            ]
        );

        if (callback)
            setTimeout(callback, this._fadeStepMilliseconds + 3000)        
    }

    private _fadeOutNode = (node: Node, callback: Function): void => {
        this._renderer.invokeElementMethod(
            node, 
            'animate', 
            [
                [
                    {opacity: '1'},
                    {opacity: '0'}
                ], 
                this._fadeStepMilliseconds,
            ]
        );

        setTimeout(callback, this._fadeStepMilliseconds)
    }

    private _removeAvailableIndexes(index1: number, index2: number): void {
        _.pull(this._availableIndexesToShuffle, index1, index2);
    }

    private _getChildrens(): HTMLCollection {
        return this._elementRef.nativeElement.children;
    }

    private _getChildrensLength(): number {
        return this._getChildrens().length;
    }

    private _getRandomChildIndex(): number {
        const length = this._availableIndexesToShuffle.length;
        const randNum = Math.floor(Math.random() * length);

        return this._availableIndexesToShuffle[randNum];
    }
}