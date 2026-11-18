---
title: "Can a free local model do a paid model's job? 175 runs later"
date: 2026-11-18
summary: "I tested whether small open models, tuned with DSPy, can match GPT-4o and GPT-5.2 on real tasks. Sometimes, yes. And my biggest result shrank when I re-ran it on fresh data."
projects: [intelligence-arbitrage]
draft: true
---

Every API call to a frontier model costs money; a 7-billion-parameter model on
your own machine costs nothing per call. The bet I wanted to test: if you let
an optimizer rewrite the prompt and pick the examples, can the free model do
the paid model's job?

I ran 175 evaluations across nine kinds of task, from math word problems to
extracting names from text to summarizing news, with four local models (3B to
14B parameters) against GPT-4o and GPT-5.2. The optimizer was DSPy's MIPROv2,
which rewrites a task's instructions and chooses few-shot examples.
[The full results are public.](https://intelligence-arbitrage.vercel.app)

## What held up

- **On five of the nine tasks, an optimized local model matched or beat GPT-5.2
  unoptimized.** The biggest gap was extraction: phi4 at 84% against GPT-5.2 at
  44%.
- **Optimization mostly fixes formatting, not thinking.** The largest gains came
  where models started weakest, and largely from teaching them to answer in the
  expected shape.
- **It can hurt.** In 12 of 54 model-and-task pairs the optimized prompt scored
  lower than the plain one. Sometimes the rewritten instructions confused the
  model; sometimes five examples were worse than two.
- **Code didn't move at all.** Zero change for every model. Few-shot prompting
  can't unlock a capability that isn't there.

## What didn't

Each test used 50 examples. At that size a score can wander about seven points
by chance, so roughly a third of the differences I measured are
indistinguishable from noise.

So in May I re-ran the most important cells on 200 fresh examples drawn from a
different sample. My headline result, a 13.5-point lift for Mistral on
multi-step reasoning, shrank to about 5. Nothing was broken; the first sample
just happened to be harder for the unoptimized model. Along the way I also
found a handful of runs that had finished suspiciously fast because they were
served from cache, and an OpenAI rate limit that zeroed out some GPT-5.2
results.

## What I'd tell myself

- **The cheap model can win, but only on the right task.** Pick the task first,
  then the model; the task explained twice as much of the variation as the model
  did.
- **Re-run your best result on new data before you repeat it.** The number I'd
  have put on a slide was the one that shrank.
- **Check how long each run took.** A 200-example run that finished in under a
  second was a cache hit, not a result.
