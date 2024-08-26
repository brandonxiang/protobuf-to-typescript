import { ExtensionContext, ViewColumn, commands, window } from "vscode";
import {
  handleError,
  getClipboardText,
  pasteToMarker,
  getSelectedText,
  validateLength,
} from "./lib";
import { parseProto } from 'pbts/core';
import fs from 'fs';
import path from 'path';
import { cwd } from "process";

const PB3_HEADER = `syntax = "proto3";`;

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.fromSelection", transformFromSelection)
  );
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.fromClipboard", transformFromClipboard)
  );
  context.subscriptions.push(
    commands.registerCommand("pbToTypescript.transformOnPanel", () => transformOnPanel(context))
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

function transformOnPanel (ctx: ExtensionContext) {
  const panel = window.createWebviewPanel(
    'protobuf to typescript', // Identifies the type of the webview. Used internally
    'protobuf to typescript', // Title of the panel displayed to the user
    ViewColumn.One, // Editor column to show the new webview panel in.
    { enableScripts: true} // Webview options. More on these later.
  );

  panel.webview.html = getWebviewContent(ctx);
}

function getWebviewContent(ctx: ExtensionContext) {
  const fileEntry = path.join(ctx.extensionPath, 'webview/index.html');
  return fs.readFileSync(
    fileEntry,
    'utf-8',
  );
}