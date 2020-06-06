# Todo

- [x] blur panel
  - [ ] fix artefacts when button clicked
  - [ ] automatically change background/text color so that we don't need `smart transparent topbar` extension
  - [ ] blur for each monitor?
  - [ ] blur corners too?
  - [x] update blur on size changed (required for `hide top bar`)

- [x] blur `dash to dock`
  - [x] update dash blur size when dash size changes
  - [x] fix artefacts on mouse hovering
  - [ ] allow the use of corners || hide them?
  - [x] blur for each monitor
  - [ ] update on monitor plug in/out
  - [ ] fix the dash not being able to be enabled again
  - [ ] remove icons' shadow on hover?

- [x] blur overview
  - [x] remove panel/dash blur on overview
  - [x] blur for each monitor
  - [ ] update on monitor plug in/out
  - [ ] fix effect being disabled when background changes
  - [ ] make getting out of overview more responsive (so that effects do not blend for some milliseconds)
  - [ ] add an ease out animation
  - [ ] blur app folders popups

- [ ] blur lockscreen
  - [ ] set lockscreen blur effect to the same intensity as other components

- [ ] blur `dash to panel`

- [ ] allow changing blur settings
  - [ ] choose which parts to blur
  - [ ] define blur settings (sigma/brighness), for each part? (probably not as they are disabled on overview)
  - [ ] define text color (for top panel)?

- misc
  - [ ] fix the "shadows" issue
  - [x] fix error `The meta of type 'ShellBlurEffect' with name '<unknown>' is already attached to actor 'StWidget'` at launch
  - [ ] proprely disable the extension (no error + able to be enabled again + no children left + no big allocation left)
  - [ ] use names instead of cached instances for actors and widgets (may be less buggy and painful)
  - [ ] verify that extension works even without `dash to dock`
  - [ ] publish the extension (beta) when ~ready
  - [ ] try without blur actors: juste use effects, may simplify the extension

finality: make `Shell.BlurEffect` fixed and available in `css`
