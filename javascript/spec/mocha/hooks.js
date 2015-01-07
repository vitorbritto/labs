// ============================================================================
// HOOKS
// ============================================================================

describe('hooks', function() {
    before(function() {
        // runs before all tests in this block
    })
    after(function() {
        // runs after all tests in this block
    })
    beforeEach(function() {
        // runs before each test in this block
    })
    afterEach(function() {
        // runs after each test in this block
    })
    // test cases
});

// All hooks can be invoked with an optional description
beforeEach(function() {
    // beforeEach hook
})
beforeEach(function namedFun() {
    // beforeEach:namedFun
})
beforeEach('some description', function() {
    // beforeEach:some description
})
