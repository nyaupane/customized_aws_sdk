/// <reference lib="webworker" />
/// <reference types="aws-sdk" />
const window = self;

importScripts('assets/js/aws-sdk.js');

addEventListener('message', async ({ data }) => {

    const AWS = window.AWS;
});