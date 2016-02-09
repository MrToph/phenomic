import test from "ava"; import "babel-core/register"

import url from "url"

import htmlMetas, { defaultMetas } from "../"

test("html default metas", (t) => {
  t.same(
    htmlMetas(),
    defaultMetas
  )
})

test("html static metas", (t) => {
  t.same(
    htmlMetas({ baseUrl: url.parse("http://domain.ext/"), css: true }),
    [
      ...defaultMetas,
      `<link rel="stylesheet" href="/statinamic-client.css" />`,
    ]
  )
})

test("html static metas with path", (t) => {
  t.same(
    htmlMetas({ baseUrl: url.parse("http://domain.ext/basep/"), css: true }),
    [
      ...defaultMetas,
      `<link rel="stylesheet" href="/basep/statinamic-client.css" />`,
    ]
  )
})
