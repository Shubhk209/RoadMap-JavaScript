Here is a tabular form listing common event listeners in JavaScript:

| **Category**           | **Event**      | **Description**                                                                                     | UseCase Example                                                                                                                                                                                                             |
| ---------------------- | -------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Mouse Events**       | `click`        | Fired when a pointing device button is pressed and released on an element.                          | Imagine a button on a webpage. When the user clicks the button (performs a single click), the `onclick` event is triggered, potentially performing an action like submitting a form or navigating to a new page.            |
|                        | `dblclick`     | Fired when a pointing device button is clicked twice on an element.                                 | Consider an image gallery. Double-clicking on an image could trigger the `ondblclick` event, opening the image in a larger view.                                                                                            |
|                        | `mousedown`    | Fired when a pointing device button is pressed on an element.                                       | Dragging functionality often utilizes `onmousedown`. When the user clicks and holds on an element, the onmousedown event can be used to initiate the dragging process.                                                      |
|                        | `mouseup`      | Fired when a pointing device button is released over an element.                                    | The onmouseup event often works in conjunction with `onmousedown` for dragging. When the user releases the mouse button, the onmouseup event can be used to signify the end of the dragging motion.                         |
|                        | `mouseover`    | Fired when a pointing device is moved onto an element.                                              | Interactive menus often use `onmouseover`. As the user hovers over a menu item, the onmouseover event can be used to display a submenu or highlight the selected item.                                                      |
|                        | `mouseout`     | Fired when a pointing device is moved off an element.                                               | Tooltips often use `onmouseout`. When the user moves the cursor away from an element that displays a tooltip, the `onmouseout` event can be used to hide the tooltip.                                                       |
|                        | `mousemove`    | Fired when a pointing device is moved within an element.                                            | Drawing applications can leverage `onmousemove`. As the user moves the mouse with the button pressed, the `onmousemove` event can be used to capture the cursor's position and continuously draw on the canvas.             |
|                        | `mouseenter`   | Fired when a pointing device is moved onto an element (does not bubble).                            | Imagine a button that changes color when hovered over. The mouseenter event can be used to change the button's background color to a hover state as the user moves the cursor over it.                                      |
|                        | `mouseleave`   | Fired when a pointing device is moved off an element (does not bubble).                             | Continuing with the hovering button example, the mouseleave event can be used to change the button's background color back to its original state when the user moves the cursor away from it.                               |
|                        | `contextmenu`  | Fired when the right button of the mouse is clicked (before the context menu is displayed).         | Right-clicking on an image can display a context menu with options like "Save Image" or "Open in New Tab". The contextmenu event allows you to define the options and functionality of this menu for your specific element. |
| **Keyboard Events**    | `keydown`      | Fired when a key is pressed.                                                                        |
|                        | `keyup`        | Fired when a key is released.                                                                       |
|                        | `keypress`     | (Deprecated) Fired when a key is pressed down and character input is generated.                     |
| **Form Events**        | `submit`       | Fired when a form is submitted.                                                                     |
|                        | `change`       | Fired when an input element loses focus and its value has changed.                                  |
|                        | `input`        | Fired synchronously when the value of an `<input>`, `<textarea>`, or `<select>` element is changed. |
|                        | `focus`        | Fired when an element gains focus.                                                                  |
|                        | `blur`         | Fired when an element loses focus.                                                                  |
|                        | `reset`        | Fired when a form is reset.                                                                         |
| **Focus Events**       | `focusin`      | Fired when an element is about to receive focus (bubbles).                                          |
|                        | `focusout`     | Fired when an element is about to lose focus (bubbles).                                             |
| **Drag & Drop Events** | `drag`         | Fired when an element is being dragged.                                                             |
|                        | `dragstart`    | Fired when the user starts dragging an element.                                                     |
|                        | `dragend`      | Fired when a drag operation is being ended.                                                         |
|                        | `dragenter`    | Fired when a dragged element enters a valid drop target.                                            |
|                        | `dragover`     | Fired when an element is being dragged over a valid drop target.                                    |
|                        | `dragleave`    | Fired when a dragged element leaves a valid drop target.                                            |
|                        | `drop`         | Fired when an element is dropped on a valid drop target.                                            |
| **Clipboard Events**   | `copy`         | Fired when the user initiates a copy action.                                                        |
|                        | `cut`          | Fired when the user initiates a cut action.                                                         |
|                        | `paste`        | Fired when the user initiates a paste action.                                                       |
| **Media Events**       | `play`         | Fired when the media begins to play.                                                                |
|                        | `pause`        | Fired when the media is paused.                                                                     |
|                        | `playing`      | Fired when the media has started to play after having been paused or delayed.                       |
|                        | `ended`        | Fired when playback stops because the end of the media was reached.                                 |
|                        | `timeupdate`   | Fired when the current playback position has changed.                                               |
|                        | `volumechange` | Fired when the volume has changed.                                                                  |
| **Touch Events**       | `touchstart`   | Fired when a touch point is placed on the touch surface.                                            |
|                        | `touchmove`    | Fired when a touch point is moved along the touch surface.                                          |
|                        | `touchend`     | Fired when a touch point is removed from the touch surface.                                         |
|                        | `touchcancel`  | Fired when a touch point has been disrupted in an implementation-specific manner.                   |
| **Window Events**      | `resize`       | Fired when the document view has been resized.                                                      |
|                        | `scroll`       | Fired when the document view or an element has been scrolled.                                       |
| **Other Events**       | `load`         | Fired when a resource and its dependent resources have finished loading.                            |
|                        | `unload`       | Fired when the document or a dependent resource is being unloaded.                                  |
|                        | `beforeunload` | Fired when the window, document and its resources are about to be unloaded.                         |
|                        | `error`        | Fired when a resource failed to load.                                                               |

This table provides a quick reference for various JavaScript event listeners and their descriptions.
