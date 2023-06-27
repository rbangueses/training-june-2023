import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import DataOnCanvasComponent from './components/DataOnCanvasComponent/DataOnCanvasComponent';

const PLUGIN_NAME = 'TrainingDatatabPlugin';

export default class TrainingDatatabPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    flex.TaskCanvasTabs.Content.add(<DataOnCanvasComponent key="data-on-canvas-comp" label="External Data"/>);
  }
}
