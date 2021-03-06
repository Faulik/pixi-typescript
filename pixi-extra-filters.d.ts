/**
 * Support for the community filters not found in the core 
 * Commit History Review 13/Jun
 *
 * https://github.com/pixijs/pixi-extra-filters
 *
 */
declare module PIXI {

    export module filters {

        export class BulgePinchFilters extends PIXI.AbstractFilter {

            radius: number;
            strength: number;
            center: PIXI.Point;

        }

        export class GlowFilter extends PIXI.AbstractFilter {

            color: number;
            outerStrength: number;
            innerStrength: number;
            viewWidth: number;
            viewHeight: number;

            constructor(viewWidth: number, viewHeight: number, distance: number, outerStrength: number, innerStrength: number, color: number, quality: number);

        }

        export class OutlineFilter extends PIXI.AbstractFilter {

            color: number;
            viewWidth: number;
            viewHeight: number;

            constructor(viewWidth: number, viewHeight: number, thickness: number, color: number);

        }

    }

}