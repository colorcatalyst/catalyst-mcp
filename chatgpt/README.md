# Catalyst for ChatGPT

Catalyst connects ChatGPT to a curated evidence graph of what compounds,
supplements, nutrients and foods have been shown to do in the human body.

This plugin adds two things:

- **The `catalyst` MCP server** (`https://catalystproject.ai/mcp`, read-only, no
  account). It returns findings, each with its evidence strength — `strong`,
  `moderate`, `limited`, `very_limited` or `insufficient` — the verbatim
  sentence it was drawn from, the paper, the population and dose, and a
  permalink. Relations from reference databases come back labelled as
  hypotheses.
- **The `evidence-strength` skill**, which tells ChatGPT how to present those
  findings: always with the strength of the evidence in words, never as a
  recommendation or medical advice, with the permalink, and with inferred rows
  called hypotheses.

Try: *"What does the research say about creatine?"* or *"Which compounds have
been studied for helping people fall asleep faster?"*

The server stores no queries and has no accounts. Setup for other clients, the
full tool list and limits: <https://catalystproject.ai/connect>. Privacy:
<https://catalystproject.ai/privacy>. Contact: hello@catalystproject.ai.

MIT-licensed; see `LICENSE`.
