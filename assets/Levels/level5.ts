import { PARAMS_NAME_DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, TILE_TYPE_ENUM } from '../Enums';
import { IEntity, ILevel, ISpike } from './index';

const mapInfo = [
  [
    {
      src: 16,
      type: TILE_TYPE_ENUM.WALL_LEFT_TOP,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 5,
      type: TILE_TYPE_ENUM.WALL_COLUMN,
    },
    {
      src: 23,
      type: TILE_TYPE_ENUM.WALL_LEFT_BOTTOM,
    },
    {
      src: 18,
      type: TILE_TYPE_ENUM.CLIFF_LEFT,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 20,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 9,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
  ],
  [
    {
      src: 21,
      type: TILE_TYPE_ENUM.WALL_RIGHT_BOTTOM,
    },
    {
      src: 1,
      type: TILE_TYPE_ENUM.FLOOR,
    },
    {
      src: 17,
      type: TILE_TYPE_ENUM.CLIFF_CENTER,
    },
    {
      src: 21,
      type: TILE_TYPE_ENUM.WALL_ROW,
    },
    {
      src: 19,
      type: TILE_TYPE_ENUM.CLIFF_RIGHT,
    },
  ],
];

const player: IEntity = {
  x: 1,
  y: -3,
  direction: PARAMS_NAME_DIRECTION_ENUM.TOP,
  state: ENTITY_STATE_ENUM.IDLE,
  type: ENTITY_TYPE_ENUM.PLAYER,
};

const enemies: Array<IEntity> = [
  {
    x: 5,
    y: -1,
    direction: PARAMS_NAME_DIRECTION_ENUM.LEFT,
    state: ENTITY_STATE_ENUM.IDLE,
    type: ENTITY_TYPE_ENUM.WOODEN_SKELETON_ENEMY,
  },
];

const spikes: Array<ISpike> = [];

const bursts: Array<IEntity> = [];

const door: IEntity = {
  x: 6,
  y: -1,
  direction: PARAMS_NAME_DIRECTION_ENUM.LEFT,
  state: ENTITY_STATE_ENUM.IDLE,
  type: ENTITY_TYPE_ENUM.DOOR,
};

const level: ILevel = {
  mapInfo,
  player,
  enemies,
  spikes,
  bursts,
  door,
};

export default level;