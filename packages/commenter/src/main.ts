import * as core from '@actions/core';
import { wait } from './wait';

const run = async (): Promise<void> => {
  try {
    // const msString: string = core.getInput('milliseconds') ?? '1';
    const msString: string = '1';
    core.debug(`Waiting ${msString} milliseconds ...`); // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    const ms: number = parseInt(msString, 10);

    if (isNaN(ms)) {
      throw new Error('milliseconds not a number');
    }

    core.debug(new Date().toTimeString());
    await wait(ms);
    core.debug(new Date().toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
};

run();
