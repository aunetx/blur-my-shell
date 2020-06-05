# Todo

- [x] blur top panel
  - [ ] fix artefacts when button clicked
  - [ ] automatically change background/text color so that we don't need `smart transparent topbar` extension
  - [ ] blur for each monitor?
  - [ ] blur corners too?

- [x] blur dash
  - [x] update dash blur size when dash size changes
  - [x] fix artefacts on mouse hovering
  - [ ] allow the use of corners?
  - [x] blur for each monitor
  - [ ] update on monitor plug in/out

- [x] blur overview
  - [x] remove panel/dash blur on overview
  - [x] blur for each monitor
  - [ ] update on monitor plug in/out

- [ ] fix the "shadows" issue
- [x] fix error `The meta of type 'ShellBlurEffect' with name '<unknown>' is already attached to actor 'StWidget'` at launch
- [ ] proprely disable the extension (no error + able to be enabled again + no children left + no big allocation left)

- [ ] allow changing blur settings
  - [ ] choose which parts to blur
  - [ ] define blur settings (sigma/brighness), for each part? (probably not as they are disabled on overview)
  - [ ] define text color (for top panel)?
