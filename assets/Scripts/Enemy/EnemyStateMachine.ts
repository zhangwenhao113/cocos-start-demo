import { _decorator, AnimationClip, AnimationComponent } from 'cc';
const { ccclass, property } = _decorator;
import { FSM_PARAM_TYPE_ENUM, PARAMS_NAME_ENUM } from '../../Enums'
import State from '../../Base/State';
import { getParamTrigget, getParamNumber, StateMachine } from '../../Base/StateMachine';
import { SubStateMachine } from '../../Base/SubStateMachine';
import { IdleSubMachine } from './IdleSubMachine';

@ccclass('EnemyStateMachine')
export class EnemyStateMachine extends StateMachine {

  async init() {
    this.animationComponent = this.addComponent(AnimationComponent);

    this.initParams();
    this.initStateMachines();
    this.initAnimationTrigger();
    await Promise.all(this.resource);
  }

  initParams() {
    this.params.set(PARAMS_NAME_ENUM.IDLE, getParamTrigget(false));
    this.params.set(PARAMS_NAME_ENUM.CLOCKWISE, getParamTrigget(false));
    this.params.set(PARAMS_NAME_ENUM.ANTICLOCKWISE, getParamTrigget(false));
    this.params.set(PARAMS_NAME_ENUM.DIRECTION, getParamNumber(0));
  }

  initStateMachines() {
    this.stateMachines.set(PARAMS_NAME_ENUM.IDLE, new IdleSubMachine(this));
  }

  run() {
    switch (this.currentState) {
      case this.stateMachines.get(PARAMS_NAME_ENUM.IDLE):
        if (this.params.get(PARAMS_NAME_ENUM.IDLE).value){
          this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
        }
        break;
      default:
        this.currentState = this.stateMachines.get(PARAMS_NAME_ENUM.IDLE);
        break;
    }
  }

  initAnimationTrigger() {
    this.animationComponent.on(AnimationComponent.EventType.FINISHED, ()=>{
      // const name = this.animationComponent.defaultClip.name;
      // const trigger = ['turn', 'block'];
      // if (trigger.find(value => name.includes(value))) {
      //   this.setParam(PARAMS_NAME_ENUM.IDLE, getParamTrigget(true));
      // }
    })
  }

}
