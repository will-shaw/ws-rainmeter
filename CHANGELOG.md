# Change Log

## 0.2.6
+ Fixed bangs not highlighting correctly.
+ Bangs now have their own pattern.
+ Updated primitive highlighting for floats, and logical operators.
+ %N style variables (e.g. Text=%1) primitives are not highlighted.
+ Added 'tests' for some of the cases above.

## 0.2.5
Added temporary workaround for bang syntax highlighting because.
The side effect of this workaround is that the bang square bracket is not coloured/italicised.

## 0.2.4
Adds support for highlighting Nested Variables. Thanks to [justingallagher](https://github.com/justingallagher) for the PR

## 0.2.3
Fixes an issue where backslash would escape the line inside a string and cause
syntax highlighting to consider some following number of lines to be a
continuation of that string. Issue #4

## 0.2.2
Adds Custom region folding use: Thanks to [Minervaxcel](https://github.com/Minervaxcel) for the PR

Usage `; #region` and `; #endregion`

## [Unreleased]
- Initial release
