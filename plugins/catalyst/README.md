# Catalyst

Catalyst connects Claude to a curated evidence graph of what compounds,
supplements, nutrients and foods have been shown to do in the human body.

This plugin adds two things:

- **The `catalyst` MCP server** (`https://catalystproject.ai/mcp`, read-only, no
  account). It returns graded findings, each with its grade from A (well
  established) to F (speculative), the verbatim sentence it was drawn from, the
  paper, the population and dose, and a permalink. Relations from reference
  databases come back labelled as hypotheses.
- **The `graded-evidence` skill**, which tells Claude how to present those
  findings: always with the grade, never as a recommendation or medical advice,
  with the permalink, and with inferred rows called hypotheses.

Try: *"What is creatine shown to do, and how strong is the evidence?"* or
*"Which studied compounds affect how long it takes to fall asleep?"*

The server stores no queries and has no accounts. Setup for other clients, the
full tool list and limits: <https://catalystproject.ai/connect>. Privacy:
<https://catalystproject.ai/privacy>. Contact: hello@catalystproject.ai.

MIT-licensed; see `LICENSE`.
