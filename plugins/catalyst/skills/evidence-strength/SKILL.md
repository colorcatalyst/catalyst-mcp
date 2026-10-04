---
name: evidence-strength
description: Answer questions about what a supplement, nutrient, drug, food compound or other substance does in the body using Catalyst's evidence graph, where every finding states the strength of the evidence behind it. Use when someone asks whether a compound affects an outcome ("does magnesium help sleep?", "what is creatine shown to do?"), asks for the evidence behind such a claim, or asks how two substances connect biologically.
---

# Answering with the strength of the evidence

The `catalyst` MCP server reads a curated evidence graph. Every finding in it
carries an evidence strength computed from the study behind it, the verbatim
sentence it was drawn from, the paper, and a permalink. Use it in place of
recalling studies from memory.

## The five levels

A finding's `evidence_strength` field is always one of five names, strongest
first. It is never a letter.

| `evidence_strength` | Say it as |
|---|---|
| `strong` | strong evidence |
| `moderate` | moderate evidence |
| `limited` | limited evidence |
| `very_limited` | very limited evidence |
| `insufficient` | insufficient evidence |

Results also carry `evidence_strength_label` (the level as written, such as
"Very limited") and, on a single finding, `evidence_strength_meaning` (one
sentence on what the level tells the reader). `evidence_strength_key` lists
all five with their meanings.

## How to look something up

For "what does X do?" or "does X affect Y?", call `find_evidence` with the
substance as `query` and the effect, if any, as `about`. One call resolves
the name and returns the findings, each with a `citation` you can quote as it
stands. If it reports no match, Catalyst has no findings on it yet: say so.
The steps below are for browsing.

1. `search_nodes` with the name the person used ("magnesium", "vitamin D",
   "omega-3", "sleep"). Every hit carries `findings`, the number of findings
   it has, and hits with findings come first: use the first hit with
   findings above 0. When `with_findings` is 0, Catalyst has no findings on
   it yet. Say so, and do not answer from memory as though from Catalyst.
2. `get_findings` with the id for the study findings about it, each with its
   evidence strength. Its `summary` lists everything the node has findings
   about, one row each, with the strongest evidence, the directions and
   whether they conflict, across all its findings and not only the rows
   returned. For a question about one thing ("does magnesium help sleep?"),
   pass `about` with words or an id from `summary`; if nothing matches,
   that is the answer, and `summary` shows what is covered instead. To keep only the better-supported ones, pass an
   `evidence_strength` floor, for example `evidence_strength: "moderate"`
   returns moderate and strong findings. There is no `grade` argument; a call
   that sends one is refused.
3. `get_finding` with a finding id when the person wants one claim explained,
   or before you say anything about why the evidence for a finding is as
   strong as it is. Its `evidence_strength_reasons.reasons` lists every rule
   that set the level, and `evidence_strength_reasons.not_assessed_on` lists
   what the assessment does not weigh (pilot status, primary or secondary
   outcome, effect size). Explain a level from those, never by guessing.
4. `get_relations`, `get_reactions` and `reach` return what reference databases
   state. Every row from them is a hypothesis, not a reported result, and
   carries no evidence strength.

## How to present what comes back

- **Give every finding with its evidence strength in words**, as a phrase about
  the evidence: "[compound] increases [outcome] (moderate evidence)", or
  "the evidence for this is limited". Write `very_limited` as "very limited",
  never with the underscore. Never state a finding without its evidence
  strength, and never turn a level into a letter or a score.
- **Evidence strength is not a recommendation.** It describes how well the
  evidence supports the finding. Do not turn strong evidence into advice to
  take something, and do not present anything here as medical advice.
- **Use the meaning when the person asks what a level means**, from
  `evidence_strength_meaning` or `evidence_strength_key`, rather than your own
  gloss.
- **Link the permalink** for each finding you cite, so the person can read the
  quoted sentence and the paper themselves.
- **Call an inferred row a hypothesis.** If `assertion_class` is `inferred`, say
  it comes from a reference database and has not been reported as a result.
- **Do not merge findings into a stronger claim** than the strongest evidence
  supports. If findings disagree, say so rather than averaging them.
- **An absence is an answer.** If the graph has no finding for what was asked,
  say that plainly instead of filling the gap from memory.
