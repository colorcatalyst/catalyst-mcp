# Catalyst Evidence Graph for VS Code

Adds [Catalyst](https://catalystproject.ai)'s evidence graph to GitHub Copilot's
agent mode as an MCP server. Ask about a supplement, nutrient, drug or food
compound and Copilot can answer from graded findings instead of from memory:

- every finding with its **grade** (A, well established, to F, speculative),
  computed from the study behind it;
- the **verbatim sentence** it was drawn from, the **paper**, the population
  and the dose;
- a **permalink** to the finding, so the claim can be checked.

Connections drawn from reference databases are labelled as hypotheses, never
as results. A grade describes how strong the evidence is; it is not a
recommendation and nothing here is medical advice.

## Use

Install, then open Copilot Chat in agent mode and enable the
*Catalyst evidence graph* tools. Try: *"What is creatine shown to do, and how
strong is the evidence?"*

No account and no key. The server is read-only and stores no queries.
Details, limits and the tool list: <https://catalystproject.ai/connect>.

Without the extension, the same server can be added by hand in
`.vscode/mcp.json`:

```json
{ "servers": { "catalyst": { "type": "http", "url": "https://catalystproject.ai/mcp" } } }
```
