import test from 'node:test';
import assert from 'node:assert/strict';
import { broken, issueBody } from '../action/fix-guard.mjs';

test('only undone, changed and gone fixes count, and the issue carries the restore code', () => {
  const fixes = [
    { url: 'https://a.nl/', field: 'title', status: 'live', new: 'A' },
    { url: 'https://a.nl/b', field: 'meta_description', status: 'undone', new: 'B', seen: 'Old | text', restore: '<meta name="description" content="B">' },
  ];
  const bad = broken(fixes);
  assert.equal(bad.length, 1);
  const body = issueBody('https://a.nl', bad, 'id-1');
  assert.match(body, /^<!-- onpage-fix-guard -->/);
  assert.match(body, /1 SEO fix on https:\/\/a\.nl is no longer live/);
  assert.match(body, /Old \\\| text/);
  assert.match(body, /<meta name="description" content="B">/);
});
