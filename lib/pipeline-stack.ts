import * as cdk from '@aws-cdk/core';
import * as codecommit from '@aws-cdk/aws-codecommit';

export class Workshop2PipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new codecommit.Repository(this, 'Workshop2Repo', {
      repositoryName: "Workshop2Repo"
    });

    //Pipeline goes here!!!
  }
}