# Todo

Nn means how important is the elements:

- N1 -> MAJOR, needed for release
- N2 -> IMPORTANT, to do soon after release
- N3 -> MINOR, to do when possible

- [x] blur panel
  - [x] fix artefacts when button clicked
  - [x] automatically change background/text color so that we don't need `smart transparent topbar` extension
  - [ ] blur for each monitor?  -> N3
  - [ ] allow the use of corners || hide them?  -> N3
  - [x] update blur on size changed (required for `hide top bar`)

- [x] blur `dash to dock`
  - [x] update dash blur size when dash size changes
  - [x] fix artefacts on mouse hovering
  - [ ] allow the use of corners || hide them?  -> N2
  - [x] blur for each monitor
  - [x] update on monitor plug in/out ! NEEDS TESTING
  - [x] fix the dash not being able to be enabled again
  - [ ] remove icons' shadow on hover?  -> N2

- [x] blur overview
  - [x] remove panel/dash blur on overview
  - [x] blur for each monitor
  - [x] update on monitor plug in/out ! NEEDS TESTING
  - [x] fix effect being disabled when background changes
  - [ ] make getting out of overview more responsive (so that effects do not blend for some milliseconds) -> N2
  - [ ] add an ease in/out animation  -> N2
  - [ ] blur app folders popups -> N3

- [ ] blur lockscreen -> N1
  - [ ] set lockscreen blur effect to the same intensity as other components  -> N1

- [ ] blur `dash to panel`  -> N2

- [ ] blur vanilla dash -> N1

- [ ] allow changing blur settings  -> N1
  - [ ] choose which parts to blur  -> N2
  - [ ] define blur settings (sigma/brighness), for each part? (probably not as they are disabled on overview)  -> N2
  - [ ] define text color (for top panel)?  -> N3

- misc
  - [ ] fix the "shadows" issue -> N?
  - [x] fix error `The meta of type 'ShellBlurEffect' with name '<unknown>' is already attached to actor 'StWidget'` at launch
  - [x] verify that we proprely disable the extension (no error + no big allocation left)
  - [x] use names instead of cached instances for actors and widgets (may be less buggy and painful)
  - [ ] publish the extension (beta) when ~ready  -> N1

finally: make `Shell.BlurEffect` fixed and available in `css`
