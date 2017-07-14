This is a rather interesting one. `3.1.1` works perfect, however this bug was introduced with `3.1.2` specifically.

Sample project:
https://github.com/NathanWalker/custom-title-3-1-2-issue

Repro steps:
1. Run the app on iOS `tns run ios --emulator`
2. Observe the title is blank in the `ActionBar` at top of opening page
3. Open `app/item/action-bar/action-bar.component.html`
4. Take note the usage of the custom `Label` for the title. Now comment out both `ActionItem`'s (see note in file) below the `Label`.
5. Observe the custom title `Label` will appear.

Bug:

Using custom `Label` title on a custom `ActionBar` component alongside `ActionItem`'s with `*ngIf` will never work.
