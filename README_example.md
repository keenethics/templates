# Attendance

This project intends simplifying accounting vacations and managing leave-requests.
We are using [Trello](https://trello.com/some-board) to manage issues.

## Development flow

1. Developer takes task from the TODO column on the [board](https://trello.com/some-board)
2. Once finished, task gets moved to "In review" column and pull-request get's created to the master branch
3. One of the team-members reviews pull-request and requests changes if necessary
4. Once pull-request is approved it gets merged to master
5. `master` gets deployed to the staging server and task should be moved to "QA" column
6. QA-engineer performs manual tests and either returns task back to development or moves it to "Ready" column
7. After the demo at the end of the sprint all the tasks get moved to "Done" column

## Running project in development mode

1. Clone repository
2. Make sure you have MongoDB 3.0 and [nvm](https://github.com/creationix/nvm) with appropriate node-version installed
3. `cp config/database.yml.example config/database.yml` and update config with proper values
4. `cp config/secrets.yml.example config/secrets.yml` and update config with proper values
5. Run `npm install` to fetch required development-dependencies
6. Run `npm start` to start application

## Testing

We are using mocha for our tests. To run test-suite you can run `npm test`.

## Deployment

We are using [Heroku](https://heroku.com/) for all the deployments.
You can safely deploy to [staging-server](http://attendance-staging.herokuapp.com/) for QA-engineers to be able to test completed tasks.

## Commit strategy

We use [gitflow](https://atlassian.com/git/tutorials/comparing-workflows) workflow as our commit
strategy. Long story short we create feature or hotfix branches out of `master` branch with names
like `XX-1659` where XX-1659 is a number of ticket in [Jira](https://project.atlassian.net).

Commit message should contain related ticket number and a brief description
(e.g. "XX-1659: fix people unavailable appearing at resourcing greed").

Once task is complete you should:
- make sure you don't leave any redundant commented-out code
- make sure tests (including code-style tests) pass on your branch
- rebase your branch against `master`, squash your commits
- make a pull-request to `master` branch

You should check your open pull-requests at least once a day and rebase them against master in case any conflicts occur.

## Code style

We use [eslint](https://eslint.org/) static code analizer with custom set of rules
to ensure appropriate code style.

