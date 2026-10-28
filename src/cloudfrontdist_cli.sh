#!/bin/bash
# Create CloudFront Distribution (AWS CLI)
aws cloudfront create-distribution \
  --origin-domain-name my-bucket.s3.amazonaws.com
  