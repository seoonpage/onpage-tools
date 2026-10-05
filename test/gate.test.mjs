import test from 'node:test';
import assert from 'node:assert/strict';
import { globToRegExp, findFiles, urlFor } from '../action/seo-gate.mjs';

test('glob patterns match nested html files', () => {
  assert.ok(globToRegExp('dist/**/*.html').test('dist/index.html'));
  assert.ok(globToRegExp('dist/**/*.html').test('dist/a/b/index.html'));
  assert.ok(!globToRegExp('dist/*.html').test('dist/a/index.html'));
  assert.deepEqual(findFiles('test/site/**/*.html').map((f) => f.replace(/\\/g, '/')), ['test/site/about/index.html', 'test/site/index.html']);
});

test('file paths map to clean public URLs', () => {
  assert.equal(urlFor('test/site/index.html', 'test/site/**/*.html', 'https://acme.example'), 'https://acme.example/');
  assert.equal(urlFor('test/site/about/index.html', 'test/site/**/*.html', 'https://acme.example'), 'https://acme.example/about/');
  assert.equal(urlFor('dist/pricing.html', 'dist/**/*.html', 'https://a.b'), 'https://a.b/pricing');
  assert.equal(urlFor('x.html', 'dist/**/*.html', ''), undefined);
});
