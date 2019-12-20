function protoToTsType(p) {
  const types = {
    "double": "number",
    "float": "number",
    "int32": "number",
    "int64": "number",
    "uint32": "number",
    "uint64": "number",
    "sint32": "number",
    "sint64": "number",
    "fixed32": "number",
    "fixed64": "number",
    "sfixed32": "number",
    "sfixed64": "number",
    "bool": "boolean",
    "string": "string",
    "bytes": "string",
  };
  if (types[p]) {
    return types[p];
  }
  return p;
}
function onProtobuf() {
  parseProtobuf(protobufVal());
}
function protobufVal() {
  const ta = document.getElementById("protobuf");
  return ta.value;
}
function setTs(val) {
  const ts = document.getElementById("typescript");
  ts.value = val;
}
function parseProtobuf(protobuf) {
  let parsed = "";
  for (const line of protobuf.split("\n")) {
    // console.log(`'${line}' -> '${parseProtobufLine(line)}'`);
    parsed += parseProtobufLine(line);
    parsed += "\n";
  }
  setTs(parsed);
}
function parseProtobufLine(line) {
  if (!line) {
    return "";
  }
  const indent = line.length - line.trimLeft().length
  const indentChar = line[0];
  const tokens = line.trim().split(" ").filter(Boolean);
  let isRepeated = false;
  // debugger;
  switch (tokens[0]) {
    case "//":
      return line;
    case "}":
      return "}";
    case "message":
      return "interface " + tokens[1] + " {";
    case "repeated":
      isRepeated = true;
      tokens.shift();
  }
  return `${indentChar.repeat(indent)}${tokens[1]}: ${protoToTsType(tokens[0])}${ isRepeated ? "[]" : ""}`;
}
parseProtobuf(protobufVal());