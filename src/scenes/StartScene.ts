import { FONT_KUMBH_SANS } from '@/utils/Constants';

import { BaseScene } from '@/scenes/BaseScene';
import { FlexContainer } from 'dill-pixel';

export class StartScene extends BaseScene {
  public readonly id = 'StartScene';

  private _layout: FlexContainer;

  initialize() {
    // a temporary layout container
    this._layout = this.add.flexContainer({
      flexDirection: 'column',
      gap: 25,
      alignItems: 'center',
      justifyContent: 'center',
    });

    // some title text
    this._layout.add.text({
      text: 'Hello Dill Pixel',
      resolution: 2,
      style: { fontFamily: FONT_KUMBH_SANS, fontWeight: 'bold', fill: 0xffffff },
    });

    // from src/assets.json
    this._layout.add.sprite({ asset: 'jar.png', scale: 0.25 });
  }

  start() {}
}
