#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { Workshop2PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
new Workshop2PipelineStack(app, 'CdkWorkshop2PipelineStack');
