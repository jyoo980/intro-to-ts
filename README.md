# CPSC 310: Introduction to TypeScript

This repo contains the starter files for the [video tutorial on TypeScript](https://www.youtube.com/watch?v=DMIZ9Oto-6s)
offered by CPSC 310: Introduction to Software Engineering, at UBC. We'll be using JavaScript in our programming exercises
to warm up, but the things you learn will be applicable to the TypeScript development you'll be doing throughout the course.

## Table of Files

| Timestamp                                          | Files                                                                  |
|----------------------------------------------------|------------------------------------------------------------------------|
| [1:24 - 6:37](https://youtu.be/DMIZ9Oto-6s?t=83)   | [gotchas/](https://github.com/jyoo980/intro-to-ts/tree/master/gotchas) |
| [6:37 - 10:22](https://youtu.be/DMIZ9Oto-6s?t=397) | [arrays/](https://github.com/jyoo980/intro-to-ts/tree/master/arrays)   |
| [10:22 - End](https://youtu.be/DMIZ9Oto-6s?t=620)  | [objects/](https://github.com/jyoo980/intro-to-ts/tree/master/objects) |

## Requirements
* [node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/download)
  * we'll be running the TypeScript compiler `tsc` via the command line

## Running files

You can run JavaScript (`.js`) files directly via node on the command line. Running the following

```sh
> node hello.js
```

Should print out "Hello, world!" to the console.

To run a TypeScript file, there's an additional step. You should first compile the `.ts` file. You
can do this by running the following command:

```sh
> tsc some-ts-file.ts
```

This will emit a generated JavaScript (`.js`) file which you can run directly via `node`.

## Solutions

You should really try some of the exercises yourself, but I will be posting solutions at a later date (TBA).
