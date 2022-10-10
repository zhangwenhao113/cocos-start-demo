
import { _decorator, Component, Node } from 'cc';
import { DIRECTION_ENUM, ENTITY_STATE_ENUM, ENTITY_TYPE_ENUM, PARAMS_NAME_ENUM } from '../Enums';
import { IEntity } from '../Levels';
import { TILE_HEIGHT, TILE_WIDTH } from '../Scripts/Tile/TileManager';
import { getParamNumber, getParamTrigget, StateMachine } from './StateMachine';
const { ccclass, property } = _decorator;

@ccclass('Entity')
export abstract class Entity extends Component {

    // 定义人物坐标
    x: number
    y: number

    fsm: StateMachine

    // 定义人物状态和方向等属性
    private _direction: DIRECTION_ENUM = DIRECTION_ENUM.TOP;
    private _state: ENTITY_STATE_ENUM = ENTITY_STATE_ENUM.IDLE;

    private type: ENTITY_TYPE_ENUM

    public get direction() {
        return this._direction;
    }

    public set direction(direction: DIRECTION_ENUM) {
        this._direction = direction;
        this.fsm.setParam(PARAMS_NAME_ENUM.DIRECTION, getParamNumber(this._direction));
    }

    public get state() {
        return this._state;
    }

    public set state(state: ENTITY_STATE_ENUM) {
        this._state = state;
        this.fsm.setParam(state, getParamTrigget(true))
    }

    initParams(params : IEntity) {
        this.x = params.x
        this.y = params.y
        this._direction = params.direction
        this._state = params.state
        this.type = params.type
    }

    updatePosition() {
        // 设置人物的位置
        this.node.setPosition(this.x * TILE_WIDTH, this.y * TILE_HEIGHT);
    }
}
