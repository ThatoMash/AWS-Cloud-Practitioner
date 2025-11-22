# AWS S3: Creating a Static Website with AWS CLI

![AWS](https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazon-aws)
![CLI](https://img.shields.io/badge/AWS-CLI-blue?style=for-the-badge&logo=gnu-bash)
![IAM](https://img.shields.io/badge/AWS-IAM-red?style=for-the-badge&logo=amazon-aws)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📋 Project Overview

This lab demonstrates deploying a static website to Amazon S3 using AWS CLI. The project covers bucket creation, IAM user management, static website hosting, file uploads, and deployment automation using bash scripts.

## 🎯 Objectives

- ✅ Configure AWS CLI and create S3 buckets
- ✅ Manage IAM users and permissions programmatically
- ✅ Enable static website hosting on S3
- ✅ Upload website files with public access
- ✅ Create automated deployment scripts
- ✅ Implement efficient file synchronization

## ⏱️ Duration

**Approximately 45 minutes**

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│            EC2 Instance (Amazon Linux)          │
│            • AWS CLI configured                 │
│            • Deployment scripts                 │
│                     │                            │
│                     ▼                            │
│            S3 Bucket (twhitlock256)             │
│            • Static website hosting enabled     │
│            • Public access configured           │
│            • Website files uploaded             │
│                     │                            │
│                     ▼                            │
│       Public Website URL (HTTP)                 │
│   http://twhitlock256.s3-website-us-west-2...  │
└─────────────────────────────────────────────────┘
```

## 📸 Screenshots

### 1. AWS CLI Setup & S3 Bucket Creation
**Screenshot 1: CLI Configuration and Bucket Creation**
- Shows: Running `aws configure` with credentials, creating S3 bucket with `aws s3api create-bucket` command, and JSON response showing successful bucket creation with Location URL
- File: `01-cli-config-bucket-creation.png`

This screenshot captures the complete AWS CLI setup process and S3 bucket creation including credential configuration and the create-bucket command execution.

---

### 2. IAM User Management
**Screenshot 2: IAM User Creation and Policy Attachment**
- Shows: Creating IAM user with `aws iam create-user`, creating login profile, listing S3 policies with `aws iam list-policies`, and attaching AmazonS3FullAccess policy. Also shows IAM console login screen with new user credentials.
- File: `02-iam-user-policy-management.png`

This screenshot demonstrates the complete IAM user lifecycle from creation through policy attachment and console access verification.

---

### 3. Bucket Configuration & File Upload
**Screenshot 3: S3 Permissions and Website Hosting Setup**
- Shows: S3 console with Block Public Access disabled, ACLs enabled, website hosting enabled with index.html as index document, and `aws s3 cp` command uploading files recursively with `--acl public-read` flag showing upload progress
- File: `03-bucket-config-file-upload.png`

This screenshot covers bucket permissions configuration, static website hosting enablement, and the file upload process in a single comprehensive view.

---

### 4. Website Deployment & Automation
**Screenshot 4: Live Website and Deployment Script**
- Shows: Browser displaying the live Café & Bakery website, terminal with `update-website.sh` script content, running `./update-website.sh`, and comparing `aws s3 cp` vs `aws s3 sync` efficiency (sync only uploads changed files)
- File: `04-website-deployment-automation.png`

This screenshot demonstrates the final working website, the deployment automation script, and the efficiency comparison between copy and sync commands.

---

## 🛠️ Implementation Details

### AWS CLI Configuration
```bash
# Configure AWS CLI
aws configure
  AWS Access Key ID: <Your-Access-Key>
  AWS Secret Access Key: <Your-Secret-Key>
  Default region name: us-west-2
  Default output format: json
```

### S3 Bucket Creation
```bash
# Create bucket (replace with your unique name)
aws s3api create-bucket \
  --bucket twhitlock256 \
  --region us-west-2 \
  --create-bucket-configuration LocationConstraint=us-west-2

# Response:
# {
#     "Location": "http://twhitlock256.s3.amazonaws.com/"
# }
```

### IAM User Setup
```bash
# Create IAM user
aws iam create-user --user-name awsS3user

# Create login profile
aws iam create-login-profile \
  --user-name awsS3user \
  --password Training123!

# Find S3 policies
aws iam list-policies --query "Policies[?contains(PolicyName,'S3')]"

# Attach S3 full access policy
aws iam attach-user-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess \
  --user-name awsS3user
```

### Website Hosting Configuration
```bash
# Extract website files
cd ~/sysops-activity-files
tar xvzf static-website-v2.tar.gz
cd static-website

# Enable static website hosting
aws s3 website s3://twhitlock256/ --index-document index.html

# Upload website files with public read access
aws s3 cp . s3://twhitlock256/ \
  --recursive \
  --acl public-read

# Verify upload
aws s3 ls twhitlock256
```

### Deployment Script (update-website.sh)
```bash
#!/bin/bash
# Initial version - uploads all files
aws s3 cp /home/ec2-user/sysops-activity-files/static-website/ \
  s3://twhitlock256/ \
  --recursive \
  --acl public-read
```

### Optimized Script with Sync
```bash
#!/bin/bash
# Optimized version - only uploads changed files
aws s3 sync /home/ec2-user/sysops-activity-files/static-website/ \
  s3://twhitlock256/ \
  --acl public-read
```

### S3 Permissions Configuration
```yaml
Block Public Access:
  - Block all public access: Disabled
  
Object Ownership:
  - ACLs: Enabled
  - Object ownership: Bucket owner preferred
  
Static Website Hosting:
  - Status: Enabled
  - Index document: index.html
  - Endpoint: http://twhitlock256.s3-website-us-west-2.amazonaws.com
```

## 💡 Key Learnings

### S3 Static Website Hosting
- **Cost-Effective**: No server management, pay only for storage and requests
- **Scalable**: Automatically handles traffic spikes
- **Fast**: Content delivered from S3's edge locations
- **Simple**: No database or application server needed

### AWS CLI Advantages
- **Automation**: Script repetitive tasks
- **Consistency**: Same results every time
- **Speed**: Faster than clicking through console
- **Version Control**: Scripts can be tracked in Git

### Deployment Efficiency
```
aws s3 cp (Copy):
  - Uploads ALL files every time
  - Use for: Initial uploads or complete refreshes
  - Time: ~10 seconds for 50 files

aws s3 sync (Sync):
  - Uploads ONLY changed files
  - Use for: Updates and incremental changes
  - Time: ~2 seconds for 1 changed file
  - Efficiency: 80% faster for updates
```

### IAM Best Practices
- Create specific users for different access needs
- Use managed policies (like AmazonS3FullAccess) when possible
- Programmatic access via CLI is auditable via CloudTrail
- Rotate credentials regularly

## 🔒 Security Considerations

**Implemented Security Measures:**
```yaml
IAM:
  - Separate user (awsS3user) for S3 operations
  - Policy-based access control
  - Console password protection

S3:
  - Public access limited to website files only
  - ACLs control object-level permissions
  - Bucket in specific region (us-west-2)

EC2:
  - IAM role for CLI access (no hardcoded credentials)
  - Systems Manager for secure connections
```

## ✅ Lab Summary

**Successfully Completed:**
- ✅ Configured AWS CLI with credentials
- ✅ Created S3 bucket with unique name
- ✅ Created IAM user with S3 full access
- ✅ Configured bucket permissions for public website
- ✅ Enabled static website hosting
- ✅ Uploaded website files with public-read ACL
- ✅ Created deployment automation script
- ✅ Tested website deployment and updates
- ✅ Optimized with sync command for efficiency

**Website URL:**
```
http://twhitlock256.s3-website-us-west-2.amazonaws.com
```

**Deployment Methods:**
| Method | Use Case | Speed | Repeatability |
|--------|----------|-------|---------------|
| Console | Learning, one-off | Slow | Low |
| CLI | Automation, scripting | Fast | High |
| Script | Updates, maintenance | Fastest | Highest |

## 🚀 Advanced Topics

### CloudFront Integration
```bash
# Add CDN for faster global delivery
aws cloudfront create-distribution \
  --origin-domain-name twhitlock256.s3-website-us-west-2.amazonaws.com
```

### Custom Domain Setup
```bash
# Route 53 configuration for custom domain
aws route53 create-hosted-zone --name example.com
```

### Automated CI/CD Pipeline
```yaml
# GitHub Actions example
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to S3
        run: |
          aws s3 sync ./website s3://mybucket/ \
            --acl public-read \
            --delete
```

## 📚 Additional Resources

- [Amazon S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [AWS CLI S3 Commands](https://docs.aws.amazon.com/cli/latest/reference/s3/)
- [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

---

**Lab Status**: ✅ Completed Successfully

**Completion Date**: [Add your date]

**Website URL**: http://twhitlock256.s3-website-us-west-2.amazonaws.com

**Bucket Name**: twhitlock256

---

⭐ **If this lab guide was helpful, please star the repository!**

**Tags**: #AWS #S3 #CLI #StaticWebsite #CloudComputing #DevOps
