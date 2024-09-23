# vscode-protobuf-to-typescript

<a href="vscode:extension/yishi.vscode-protobuf-to-typescript" alt="Contributors">
  <img src="https://img.shields.io/badge/vscode-marketplace-blue" />
</a>

## Usage

Please search "Protobuf To Typescript" in your vscode extensions marketplace.

[Visual Studio Code Market Place: Protobuf to Typescript](https://marketplace.visualstudio.com/items?itemName=yishi.vscode-protobuf-to-typescript)

We provide two ways to **convert protobuf to typescript**.

### convert from selection

- STEP 1: Select the protobuf of the current active window

- STEP 2: Open the vscode command palette (How to open please refer to [Vscode Official Website](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette))

- STEP 3: Search **"pbts:from selection"**, execute

### convert from clipboard

- STEP 1: Copy protobuf from somewhere

- STEP 2: Open the vscode command palette (How to open please refer to [Vscode Official Website](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette))

- STEP 3: Search **"pbts:from clipboard"**, execute，the converted typescript will be filled at the cursor of the currently active window

### Settings

Users can then control this setting by creating a .vscode/settings.json file in their project root

```json
{
  //Specify the output type for the converted files
  "protobufToTypescript.outputType": "jsdoc",
  //Specify the edge case for int64(long type)
  "protobufToTypescript.mode": "strict"
}
```

## Problem

If you have any questions, you can contact me by email **@brandon.xiang@gmail.com**
