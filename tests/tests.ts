import test from 'ava';
import * as sinon from 'sinon';
import * as proxyquire from 'proxyquire';

const logging = { log() { } };

proxyquire('../src/formatter', { 'hint/dist/src/lib/utils/logging': logging });

import JsonFormatter from '../src/formatter';
import * as problems from './fixtures/list-of-problems';
import { Severity } from 'hint/dist/src/lib/types';

test.beforeEach((t) => {
    sinon.spy(logging, 'log');

    t.context.logger = logging;
});

test.afterEach.always((t) => {
    t.context.logger.log.restore();
});

test(`JSON formatter prints an empty array if no values`, (t) => {
    const formatter = new JsonFormatter();

    formatter.format(problems.noproblems);

    const log = t.context.logger.log;
    const firstCall = log.firstCall;

    t.is(log.callCount, 1);
    t.deepEqual(firstCall.args[0], JSON.stringify([], null, 2));
});

test(`JSON formatter is called once per resource with sorted problems`, (t) => {
    const formatter = new JsonFormatter();

    formatter.format(problems.multipleproblems);

    const sortedMessages = [
        {
            category: 'other',
            hintId: 'random-hint',
            location: {
                column: 1,
                line: 1
            },
            message: 'This is a problem in line 1 column 1',
            resource: 'http://myresource.com/',
            severity: Severity.warning,
            sourceCode: ''
        },
        {
            category: 'other',
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
            category: 'other',
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
            category: 'other',
            hintId: 'random-hint',
            location: {
                column: 1,
                line: 10
            },
            message: 'This is a problem in line 10',
            resource: 'http://myresource.com/',
            severity: Severity.warning,
            sourceCode: ''
        }
    ];

    const messagesJson = [
        {
            issues: 4,
            messages: sortedMessages,
            resource: 'http://myresource.com/'
        }
    ];

    const log = t.context.logger.log;
    const firstCall = log.firstCall;

    t.is(log.callCount, 1);
    t.deepEqual(firstCall.args[0], JSON.stringify(messagesJson, null, 2));
});
