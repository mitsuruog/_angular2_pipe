import {
  describe,
  it,
  expect,
  inject,
  injectAsync,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {InitCapsPipe} from './init-caps.pipe';

describe('Test: InitCapsPipe', () => {

  let testee;

  beforeEach(() => {
    testee = new InitCapsPipe();
  });

  it('"abc"が”Abc”に変換されること', () => {
    expect(testee.transform('abc')).toEqual('Abc');
  });

  it('"abc def"が”Abc Def”に変換されること', () => {
    expect(testee.transform('abc def')).toEqual('Abc Def');
  });

  it('"Abc Def"は変換されないこと', () => {
    expect(testee.transform('Abc Def')).toEqual('Abc Def');
  });

});