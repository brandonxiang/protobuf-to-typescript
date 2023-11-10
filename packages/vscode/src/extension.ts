import { ExtensionContext, ViewColumn, commands, window } from "vscode";
import {
  handleError,
  getClipboardText,
  pasteToMarker,
  getSelectedText,
  validateLength,
} from "./lib";
import { parseProto } from 'pbts/core';

const PB3_HEADER = `syntax = "proto3";`;

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.fromSelection", transformFromSelection)
  );
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.fromClipboard", transformFromClipboard)
  );
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.convertOnAir", transformOnAir)
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
			handleError(`The selected pb format may be wrong`,e);
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
			handleError(`The Pb in clipboard may be wrong`,e);
		});
}

function transformOnAir () {
  const panel = window.createWebviewPanel(
    'catCoding', // Identifies the type of the webview. Used internally
    'Cat Coding', // Title of the panel displayed to the user
    ViewColumn.One, // Editor column to show the new webview panel in.
    {} // Webview options. More on these later.
  );

  panel.webview.html = getWebviewContent();
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}