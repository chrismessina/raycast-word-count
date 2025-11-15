/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OCR Language - Language for OCR text recognition */
  "ocrLanguage": "en-US" | "es" | "fr" | "de" | "it" | "pt" | "zh-Hans" | "zh-Hant" | "ja" | "ko" | "ru" | "ar",
  /** undefined - Play camera shutter sound when capturing screenshots */
  "playSound": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `count` command */
  export type Count = ExtensionPreferences & {}
  /** Preferences accessible in the `count-screenshot` command */
  export type CountScreenshot = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `count` command */
  export type Count = {}
  /** Arguments passed to the `count-screenshot` command */
  export type CountScreenshot = {}
}

declare module "swift:*/swift" {
  export function recognizeTextFromScreenshot(playSound: boolean, language: string): Promise<string>;

  export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}