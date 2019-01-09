import { Problem, Severity } from 'hint/dist/src/lib/types';
import { Category } from 'hint/dist/src/lib/enums/category';

const multipleproblems: Problem[] = [{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 10,
        line: 1
    },
    message: 'This is a problem in line 1 column 10',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 10
    },
    message: 'This is a problem in line 10',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 5
    },
    message: 'This is a problem in line 5',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
},
{
    category: Category.other,
    hintId: 'random-hint',
    location: {
        column: 1,
        line: 1
    },
    message: 'This is a problem in line 1 column 1',
    resource: 'http://myresource.com/',
    severity: Severity.warning,
    sourceCode: ''
}];

const noproblems: Problem[] = [];

export {
    multipleproblems,
    noproblems
};
