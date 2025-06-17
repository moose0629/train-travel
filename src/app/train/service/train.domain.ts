import { SPACE_1, SPACE_2, SPACE_4, SPACE_8 } from "../../service/util.domain";


interface BaseLayout {
  width: number;
  height: number;
  right?: number;
  left?: number;
  top?: number;
  bottom?: number;
}

export const WINDOW_LAYOUT: BaseLayout = {
  width: SPACE_8 + SPACE_2, // 1.25
  height: SPACE_8 + SPACE_2, // 1.25
  top: SPACE_8,
}

export const WHEEL_LAYOUT: BaseLayout = {
  width: SPACE_8 + SPACE_2,
  height: SPACE_8 + SPACE_2,
  bottom: -(SPACE_4 + SPACE_1),
  left: SPACE_4 + SPACE_1,
  right: SPACE_4 + SPACE_1,
}

export const CHIMNEY_LAYOUT: BaseLayout = {
  width: SPACE_8 * 0.9375,
  height: SPACE_8 * 1.5625,
  top: -SPACE_8 * 1.5625,
  right: SPACE_8 + SPACE_2,
}

export const SMOKE_LAYOUT: BaseLayout = {
  width: SPACE_1 + SPACE_4,
  height: SPACE_1 + SPACE_4,
  right: SPACE_8 * 0.9375,
  top: -(SPACE_8 * 2 + SPACE_4),
}

export const LEFT_SPACE = SPACE_4;

export const ITEM_SIZE = SPACE_8 + SPACE_4;

export const ITEM_SPACE = SPACE_1 + SPACE_2;

export const ITEM_BORDER_SIZE = SPACE_1;

export type Unit = 'px' | 'em' | 'rem' | '%';

export const BASE_REM_UNIT: Unit = 'rem';
