# Integrating with Blur my Shell

Other extensions can work with Blur my Shell through a few style classes, without depending on it: when Blur my Shell isn't installed, the classes simply do nothing.

## Blurring your own surfaces

To have a surface of your extension blurred like the popups, add the `bms-popup-blur-target` style class to it. It then follows the Popups settings, including which pipeline is used and whether the blur is static or dynamic.

- The blur follows the surface's own `border-radius`, on all four corners.
- With Override background turned on, the surface gets the popup background.
- Inside a popup menu, such surfaces are blurred one by one instead of the whole menu, which then has no background of its own, until none of them is left.
- When the kind of popup the surface sits in isn't blurred, neither is the surface.

Add the class when you build the surface, at the latest when the popup is first shown: a popup with no such surface by then isn't searched again.

Blur my Shell adds the `bms-popup-blurred` style class to every surface it blurs, so your extension can leave out its own blur there.

## Popovers that change size

If your extension has a popover whose size changes often, add the `bms-redraw-blur-instant` style class to its content element, so that the blur follows it right away.

## Matching the look

To match Blur my Shell's look, your extension can read its pipelines, which are described in [the pipeline format](pipelines.md).
