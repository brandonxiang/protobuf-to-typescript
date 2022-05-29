import { ExtensionContext, commands } from "vscode";
import {
  handleError,
  getClipboardText,
  pasteToMarker,
  getSelectedText,
  validateLength,
} from "./lib";
import { parseProto } from '@pbts/core';

const PB3_HEADER = `syntax = "proto3";`;

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.fromSelection", transformFromSelection)
  );
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.fromClipboard", transformFromClipboard)
  );
}

function transformFromSelection() {

  getSelectedText()
    .then(validateLength)
    .then(str => {
      return parseProto(PB3_HEADER + str);
    })
		.then(interfaces => {
      pasteToMarker(interfaces);
    })
    .catch(e=>{
			handleError(`The selected pb format may be wrong`,e)
		});
}

function transformFromClipboard() {
  getClipboardText()
    .then(validateLength)
    .then(str => {
      return parseProto(PB3_HEADER + str);
    })
    .then(interfaces => {
      pasteToMarker(interfaces);
    })
		.catch(e=>{
			handleError(`The Pb in clipboard may be wrong`,e)
		});
}
