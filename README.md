# ponstandard

JavaScript Standard Style with custom PON tweaks

## Install

```
npm install @ponbike/ponstandard --global
```

## Usage
Use `ponstandard` on the command line the same way you use `standard`:

```
Usage:
    ponstandard <flags> [FILES...]

    If FILES is omitted, then all JavaScript source files (*.js, *.jsx) in the current
    working directory are checked, recursively.

    Certain paths (node_modules/, coverage/, vendor/, *.min.js, bundle.js, and
    files/folders that begin with '.' like .git/) are automatically ignored.

    Paths in a project's root .gitignore file are also automatically ignored.

Flags:
        --fix       Automatically fix problems
    -v, --verbose   Show rule names for errors (to ignore specific rules)
        --version   Show current version
    -h, --help      Show usage information

Flags (advanced):
        --stdin     Read file text from stdin
        --global    Declare global variable
        --plugin    Use custom eslint plugin
        --env       Use custom eslint environment
        --parser    Use custom js parser (e.g. babel-eslint)
```
