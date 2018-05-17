import React from 'react';
import { APIRequest } from '../apirequest'

global.fetch = require('jest-fetch-mock')
 
describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
 
  it('calls datafinder and returns data to me', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
 
    //assert on the response
    APIRequest('datafinder').then(res => {
      expect(res.data).toEqual('12345')
    })
 
    //assert on the times called and arguments given to fetch
    expect(fetch.mock.calls.length).toEqual(1)
    expect(fetch.mock.calls[0][0]).toEqual('https://cors-anywhere.herokuapp.com/https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=ben&d_last=sigal&d_state=florida')
  })
})