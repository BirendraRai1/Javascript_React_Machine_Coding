# Testing

## Definition :

    your code matches the required specification

# what is testing:-

    * verifying the functionality
    * test the code
    * edge cases are working
    * check if code is working

## Types of Testing

### Way to you test

- Manual testing
- Automated testing

### Areas of testing

- Unit test : testing a smallest unit of the app .In react it will be component
- functional test/integration test : how your multiple components behave in cohesion
- End to end Testing :-how much closer your application is to the requirement

- Stress testing:-It is about how much load your backend server can take
- Peformance Testing:-It is about how performant your website is or your application is
- Security Testing:- It is about how many bugs could be there so that it could expose sensitive information

### React : unit testing

## Tech:(create-react-app)

- JEST

  - test runner : it finds and excutes all the tests
  - It also provides you feature of describe , test and expect which are given by JEST and globally exposed for create-react-app
  - snapshot testing
  - https://jestjs.io/

- React testing library
  _ emulates Rendering
  _ find element on that emulated UI and also fire event

### What is required to test a react component???

- Snapshot test:
- initial State
- Update to that initial state

### When to write a unit testcase(Recommendation)

- only those component which are critical and complex

## TDD: Test driven Development (It is also known as red-green approach)

`Usecase`: we can apply TDD only when requirements are stable

- first write all the testcases and then write the component
- firstly refactor all your testcases and then optimize your component
