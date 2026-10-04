---
name: graded-evidence
description: Answer questions about what a supplement, nutrient, drug, food compound or other substance does in the body using Catalyst's graded evidence graph. Use when someone asks whether a compound affects an outcome ("does magnesium help sleep?", "what is creatine shown to do?"), asks for the evidence behind such a claim, or asks how two substances connect biologically.
---

# Answering from graded evidence

The `catalyst` MCP server reads a curated evidence graph. Every finding in it
carries a grade computed from the study behind it, the verbatim sentence it was
drawn from, the paper, and a permalink. Use it in place of recalling studies
from memory.

## How to look something up

1. `search_nodes` with the name the person used ("magnesium glycinate",
   "sleep quality"). It returns ids; it says nothing about effects.
2. `get_findings` with the id for the graded study findings about it.
3. `get_finding` with a finding id when the person wants one claim explained,
   or before you say anything about why a finding has its grade. Its
   `grade_reasons` lists every rule that set the grade, and `not_graded_on`
   lists what the grade does not weigh (pilot status, primary or secondary
   outcome, effect size). Explain a grade from those, never by guessing.
4. `get_relations`, `get_reactions` and `reach` return what reference databases
   state. Every row from them is a hypothesis, not a reported result.

## How to present what comes back

- **Give every finding with its grade and the grade's label**, for example
  "grade C (Suggestive)". Never state a finding without its grade.
- **A grade is not a recommendation.** It describes how strong the evidence is.
  Do not turn a strong grade into advice to take something, and do not present
  anything here as medical advice.
- **Link the permalink** for each finding you cite, so the person can read the
  quoted sentence and the paper themselves.
- **Call an inferred row a hypothesis.** If `assertion_class` is `inferred`, say
  it comes from a reference database and has not been reported as a result.
- **Do not merge findings into a stronger claim** than the strongest grade
  supports. If findings disagree, say so rather than averaging them.
- **An absence is an answer.** If the graph has no graded finding for what was
  asked, say that plainly instead of filling the gap from memory.
