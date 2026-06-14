// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app() {
    return {
      name: 'signsecure-payload-dsc',
      // removal: input?.stage === 'production' ? 'retain' : 'remove',
      // protect: ['production'].includes(input?.stage),
      home: 'aws',
      providers: {
        aws: {
          region: 'ap-south-1',
        },
      },
    }
  },
  async run() {
    new sst.aws.Nextjs('SignSecure-Payload-DSC', {
      server: {
        layers: ['arn:aws:lambda:ap-south-1:408466861325:layer:node-sharp-layer:2'],
        install: ['sharp'],
      },
      permissions: [
        {
          actions: ['s3:*'],
          resources: ['*'],
        },
        {
          actions: ['cloudfront:*'],
          resources: ['*'],
        },
      ],
    })
  },
})
