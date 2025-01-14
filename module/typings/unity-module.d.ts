/**
 * Type declaration for the UnityModule.
 */
declare type UnityModule = {
  /**
   * Stringifies a pointer to a string.
   * @param pointer The pointer to the string.
   * @param length The length of the string.
   */
  Pointer_stringify(pointer: number, length: number): string;

  /**
   * Enables or disabled the fullscreen mode of the UnityInstance.
   * @param fullScreen sets the fullscreen mode.
   */
  SetFullscreen(fullScreen: 0 | 1): void;

  /**
   * A reference to the Unity Instance's Canvas.
   */
  canvas?: HTMLCanvasElement;
};
