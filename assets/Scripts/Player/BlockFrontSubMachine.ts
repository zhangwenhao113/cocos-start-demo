import State from "../../Base/State";
import { StateMachine } from "../../Base/StateMachine";
import { SubStateMachine } from "../../Base/SubStateMachine";
import { PARAMS_NAME_DIRECTIO_ENUM, PARAMS_NAME_ENUM, DIRECTION_ENUM } from "../../Enums";

const PATH = 'texture/player';

export class BlockFrontSubMachine extends SubStateMachine {

  constructor(public fms: StateMachine) {
    super(fms);
    this.stateMachines.set(PARAMS_NAME_DIRECTIO_ENUM.TOP, new State(fms, `${PATH}/blockfront/top`));
    this.stateMachines.set(PARAMS_NAME_DIRECTIO_ENUM.RIGHT, new State(fms, `${PATH}/blockleft/right`));
    this.stateMachines.set(PARAMS_NAME_DIRECTIO_ENUM.BOTTOM, new State(fms, `${PATH}/blockback/bottom`));
    this.stateMachines.set(PARAMS_NAME_DIRECTIO_ENUM.LEFT, new State(fms, `${PATH}/blockright/left`));
  }

  run() {
    const value = this.fms.getParam(PARAMS_NAME_ENUM.DIRECTION).value;
    this.currentState = this.stateMachines.get(DIRECTION_ENUM[value as number]);
  }

}
