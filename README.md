# Test Doubles

Example tests demonstrating using the magical `jest.fn()` to create dummies, mocks, stubs and spies.

The `Kennel` constructor function expects objects in the animals array to conform to an interface, which the `Animal` constructor implements.

Using `jest.fn`, we can test the `Kennel` constructor in isolation without relying on any external implementations of the expected interface (i.e. `Animal`)

## Setup

- clone the repository: `git clone git@github.com:MCRcodes/test-doubles.git`
- install dependencies: `npm install`

## Running Tests
- `npm test` runs the unit tests with Jest
