// Registers Catalyst's remote MCP server with the editor's language-model tools:
// VS Code (GitHub Copilot agent mode) through `vscode.lm`, and Cursor through its
// own `vscode.cursor.mcp` API. Editors built on Open VSX that implement neither
// simply get nothing, rather than an error.
//
// Nothing else lives here on purpose. Every tool, its description and every rule
// about how a finding may be presented come from the server itself, so there is
// no second copy to drift. See https://catalystproject.ai/connect.
const vscode = require('vscode')

const NAME = 'catalyst'
const LABEL = 'Catalyst evidence graph'
const SERVER_URL = 'https://catalystproject.ai/mcp'

function activate(context) {
  if (vscode.lm && typeof vscode.lm.registerMcpServerDefinitionProvider === 'function') {
    const changed = new vscode.EventEmitter()
    context.subscriptions.push(
      changed,
      vscode.lm.registerMcpServerDefinitionProvider('catalyst.evidenceGraph', {
        onDidChangeMcpServerDefinitions: changed.event,
        provideMcpServerDefinitions: async () => [new vscode.McpHttpServerDefinition(LABEL, vscode.Uri.parse(SERVER_URL))],
      }),
    )
  }

  const cursorMcp = vscode.cursor && vscode.cursor.mcp
  if (cursorMcp && typeof cursorMcp.registerServer === 'function') {
    cursorMcp.registerServer({ name: NAME, server: { url: SERVER_URL } })
    context.subscriptions.push({
      dispose: () => {
        if (typeof cursorMcp.unregisterServer === 'function') cursorMcp.unregisterServer(NAME)
      },
    })
  }
}

function deactivate() {}

module.exports = { activate, deactivate }
