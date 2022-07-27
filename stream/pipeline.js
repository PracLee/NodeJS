// @ts-check

const { log, error } = console

const fs = require('fs')
const stream = require('stream')
const zlib = require('zlib')
const util = require('util')

async function gzip() {
  return util.promisify(stream.pipeline)(
    fs.createReadStream('./big_file_exam'),
    zlib.createGzip(),
    fs.createWriteStream('./big_file_exam.gz')
  )
}

async function gunzip() {
  return util.promisify(stream.pipeline)(
    fs.createReadStream('./big_file_exam.gz'),
    zlib.createGunzip(),
    fs.createWriteStream('./blg_file.unzipped')
  )
}

async function main() {
  await gzip()
  await gunzip()
}
