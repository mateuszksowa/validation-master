## Introduction

In giving candidates small tasks to complete as part of the job interview process, we like to choose a task that is relevant to the job. The task described below is a slightly simplified but genuine task we had at LonRes which we solved programmatically. We are interested to know how you'd solve the same problem.

## Task

We needed to create a generic parser that parsed validation messages from our API backend, to then display them in an unordered list. We wanted the parser to be as generic as possible, so given validation messages that may nest other validation messages (`n` levels deep) we wanted to nest the `ul` elements in the same structural way.

Please code your solution in the `src/index.js` file provided so that the tests pass. As mentioned we are looking for a generic implementation where if the validation messages were nested differently &ndash; albeit with the same structure &ndash; then the tests would still pass. Tests can be run using the `yarn test` command.

**Tip:** You can use `test.only` in AVA &ndash; same in Jest &ndash; to force only one test to run at a time. If you've done it right, the first test should be super simple, the second test will take the most time to complete, and the third test will automatically pass once the second test passes.
