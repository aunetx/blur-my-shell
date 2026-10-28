# Pipeline format

Blur my Shell stores its pipelines in GSettings, so other extensions can read them to match its look. This page describes that format and the effects a pipeline can contain.

## Where pipelines are stored

All pipelines live in the `pipelines` key of `org.gnome.shell.extensions.blur-my-shell`, with the type `a{sa{sv}}`. Each component picks one by id in the `pipeline` key of its own schema, for example `org.gnome.shell.extensions.blur-my-shell.panel`. The components that have one are `panel`, `dash-to-dock`, `popup`, `overview`, `appfolder`, `applications`, `lockscreen`, `screenshot`, `window-list` and `coverflow-alt-tab`. If a component points to a pipeline that doesn't exist, `pipeline_default` is used.

The default pipeline, for example, looks like this:

```
'pipeline_default': {
    'name': <'Default'>,
    'effects': <[
        <{
            'type': <'dual_kawase_blur'>,
            'id': <'effect_000000000000'>,
            'params': <{'unscaled_radius': <30>, 'brightness': <0.6>}>
        }>
    ]>
}
```

Each pipeline has:

- `name`: the name shown in the preferences.
- `effects`: the effects, applied in order from the first to the last. Each effect has a `type`, an `id` that is unique within the pipeline, and optional `params`.

A parameter missing from `params` uses its default value. An effect type that Blur my Shell doesn't know is skipped with a warning in the logs.

## Effects

Colors are lists of red, green, blue and alpha between 0 and 1. Choices are stored as the index of the option.

### `dual_kawase_blur`: Dual Kawase blur

| Parameter | Type | Range | Default |
|---|---|---|---|
| `unscaled_radius` | number | 0 to 100 | 30 |
| `brightness` | number | 0 to 1 | 0.6 |

### `refraction`: Liquid Glass

| Parameter | Type | Range | Default |
|---|---|---|---|
| `strength` | number | 0 to 1 | 1 |
| `blur_radius` | number | 0 to 48 | 10 |
| `edge_size` | number | 1 to 500 | 22 |
| `rim_width` | number | 1 to 6.5 | 4.8 |
| `falloff` | number | 0.25 to 20 | 2.4 |
| `refraction_style` | number | 0 to 1 | 0 |
| `gloss` | number | 0 to 1 | 1 |
| `fresnel_angle` | number | -180 to 180 | 45 |
| `fresnel_width` | number | 0.5 to 6 | 1 |
| `specular_strength` | number | 0 to 1 | 0 |
| `tint` | number | 0 to 1 | 0.2 |
| `tint_color` | color | | `[1, 1, 1, 1]` |
| `backdrop_zoom` | number | 0.1 to 4 | 1 |
| `shadow` | number | 0 to 1 | 0.3 |
| `rgb_fringing` | number | 0 to 1 | 0.1 |
| `texture_repeat` | choice | 0 clamp, 1 mirror | 0 |

### `color`: Color

| Parameter | Type | Range | Default |
|---|---|---|---|
| `color` | color | | `[0, 0, 0, 0]` |
| `blend_mode` | choice | 0 normal, 1 multiply, 2 screen, 3 overlay, 4 darken, 5 lighten, 6 plus darker, 7 plus lighter, 8 color dodge, 9 color burn, 10 hard light, 11 soft light, 12 difference, 13 exclusion, 14 hue, 15 saturation, 16 color, 17 luminosity | 0 |

### `luminosity`: Luminosity

| Parameter | Type | Range | Default |
|---|---|---|---|
| `brightness_shift` | number | -1 to 1 | 0 |
| `brightness_multiplicator` | number | 0 to 2 | 1 |
| `contrast` | number | 0 to 2 | 1 |
| `contrast_center` | number | 0 to 1 | 0.5 |
| `saturation_multiplicator` | number | 0 to 2 | 1 |

### `noise`: Noise

| Parameter | Type | Range | Default |
|---|---|---|---|
| `noise` | number | 0 to 1 | 0.4 |
| `lightness` | number | 0 to 2 | 0.4 |

### `pixelize`: Pixelize

| Parameter | Type | Range | Default |
|---|---|---|---|
| `factor` | integer | 1 to 50 | 8 |
| `downsampling_mode` | choice | 0 boxcar, 1 triangular, 2 Dirac | 0 |

### `wave`: Vapor Wave

| Parameter | Type | Range | Default |
|---|---|---|---|
| `frequency` | number | 0 to 100 | 50 |
| `amplitude` | number | 0 to 100 | 10 |
| `octaves` | integer | 0 to 6 | 2 |
| `vapor_octaves` | integer | 0 to 6 | 4 |
| `vapor_speed` | number | 0 to 5 | 1.5 |
| `grain` | number | 0 to 100 | 15 |
| `saturation` | number | 0 to 2 | 1 |
| `brightness` | number | 0 to 2 | 1 |
| `zoom` | number | 0.5 to 2 | 1 |
| `dispersion` | number | 0 to 100 | 20 |
| `flow_animation_enabled` | boolean | | true |
| `flow_speed_factor` | number | 0 to 5 | 0.5 |
| `resize_duration` | integer | 0 to 10000 | 1000 |

### `derivative`: Derivative

| Parameter | Type | Range | Default |
|---|---|---|---|
| `operation` | choice | 0 1-step derivative, 1 2-step derivative, 2 Laplacian | 0 |

### Advanced effects

These are building blocks for other effects and are rarely useful on their own.

| Type | Parameters |
|---|---|
| `downscale` | `divider` (integer, 1 to 50, default 8), `downsampling_mode` (choice like `pixelize`, default 0) |
| `upscale` | `factor` (integer, 1 to 50, default 8) |
| `rgb_to_hsl` | none |
| `hsl_to_rgb` | none |

## Changes in version 76

Version 76 replaced every blur with `dual_kawase_blur`, and existing pipelines are converted when the extension starts:

- `gaussian_blur` and `native_static_gaussian_blur` became `dual_kawase_blur` with the same radius and brightness.
- `monte_carlo_blur` became `dual_kawase_blur` with ten times its radius.
- `corner` was removed. Rounded corners are now drawn for every component and set in each component's preferences instead of the pipeline.
