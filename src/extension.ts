import { ExtensionContext, languages } from "vscode";
import { Provider } from "./Provider";

export function activate(context: ExtensionContext) {
  const provider = new Provider();

  const languageConfig = [
    { language: "rainmeter", pattern: "**/*.{ini,inc}" },
    { language: "rainmeter", scheme: "untitled" },
  ];

  context.subscriptions.push(
    languages.registerDocumentSymbolProvider(languageConfig, provider),
    languages.registerFoldingRangeProvider(languageConfig, provider)
  );
}

export function deactivate() {}
