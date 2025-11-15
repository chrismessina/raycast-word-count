/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** OCR Language - Language for OCR text recognition */
  "ocrLanguage": "en" | "es" | "fr" | "de" | "it" | "pt" | "zh-Hans" | "zh-Hant" | "ja" | "ko" | "ru" | "ar",
  /** undefined - Play camera shutter sound when capturing screenshots */
  "playSound": boolean,
  /** Screenshot Result Stats - Choose which metrics appear in the screenshot HUD */
  "showStatCharacters": boolean,
  /** undefined - Show the total word count in the screenshot HUD */
  "showStatWords": boolean,
  /** undefined - Show the sentence count in the screenshot HUD */
  "showStatSentences": boolean,
  /** undefined - Show the paragraph count in the screenshot HUD */
  "showStatParagraphs": boolean,
  /** undefined - Show the estimated time to read in the screenshot HUD */
  "showStatReadingTime": boolean,
  /** undefined - Show the estimated time to speak in the screenshot HUD */
  "showStatSpeakingTime": boolean
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