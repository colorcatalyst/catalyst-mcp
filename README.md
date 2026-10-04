# Catalyst evidence graph — MCP server, plugins and extensions

<img src="assets/icon-256.png" alt="" width="64" align="right">

[Catalyst](https://catalystproject.ai) is a curated evidence graph of what
compounds, supplements, nutrients and foods have been shown to do in the human
body. This repository connects it to the assistants and editors people already
use. The server itself is hosted; everything here only tells a client where it
is.

**Server:** `https://catalystproject.ai/mcp` — MCP over Streamable HTTP,
read-only, no account, no key.
**Registry name:** `ai.catalystproject/evidence-graph`
**Setup for every client, the tool list and limits:** <https://catalystproject.ai/connect>

## What an assistant gets

- Graded findings for a compound or an outcome. Every finding carries a grade
  from A (well established) to F (speculative), computed from the study behind
  it — never set by hand — plus the verbatim sentence it was drawn from, the
  paper, the population and dose, and a permalink to check it.
- Relations from reference databases (targets, pathways, reactions), each
  labelled as a hypothesis rather than a reported result.

A grade describes how strong the evidence is. It is not a recommendation, and
nothing here is medical advice. No tool returns a product, a price or a link to
buy anything, and no tool ranks what to take.

## Install

| Client | How |
|---|---|
| **Claude** (web, desktop) | Settings → Connectors → Add custom connector → `https://catalystproject.ai/mcp` |
| **ChatGPT** | Developer mode → add a custom app/connector with `https://catalystproject.ai/mcp` |
| **Claude Code** (plugin, adds the server and a skill for presenting grades) | `/plugin marketplace add colorcatalyst/catalyst-mcp` then `/plugin install catalyst@catalyst` |
| **Claude Code** (server only) | `claude mcp add --transport http catalyst https://catalystproject.ai/mcp` |
| **VS Code / GitHub Copilot** | The [Catalyst Evidence Graph](vscode/) extension (VSIX on the releases page), the one-click link on [/connect](https://catalystproject.ai/connect), or `.vscode/mcp.json` below |
| **Cursor** | [One-click install](https://catalystproject.ai/connect), or `~/.cursor/mcp.json` below |
| **Gemini CLI** | `gemini extensions install https://github.com/colorcatalyst/catalyst-mcp` |
| **Anything else** | the JSON below |

```json
{ "mcpServers": { "catalyst": { "url": "https://catalystproject.ai/mcp" } } }
```

VS Code's own file takes a slightly different shape:

```json
{ "servers": { "catalyst": { "type": "http", "url": "https://catalystproject.ai/mcp" } } }
```

## In this repository

| Path | What it is |
|---|---|
| `server.json` | The entry in the [official MCP registry](https://registry.modelcontextprotocol.io) |
| `.claude-plugin/marketplace.json`, `plugins/catalyst/` | A Claude Code plugin marketplace with one plugin: the server and a `graded-evidence` skill |
| `gemini-extension.json`, `GEMINI.md` | A Gemini CLI extension |
| `vscode/` | A VS Code extension that registers the server with Copilot's agent mode |

## Privacy

The server stores no queries and has no accounts. Rate limits count calls per
minute against the client's name and a keyed hash of the network address,
never the address itself. Full notice: <https://catalystproject.ai/privacy>.

## Contact

Questions, or something an assistant got wrong from this graph:
hello@catalystproject.ai

The code in this repository is MIT-licensed. The graph's content carries the
terms on <https://catalystproject.ai/terms> and per-source licences on
<https://catalystproject.ai/attribution>.
