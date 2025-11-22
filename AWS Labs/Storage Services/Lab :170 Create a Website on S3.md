# AWS S3: Creating a Static Website with AWS CLI

![AWS](https://img.shields.io/badge/AWS-S3-orange?style=for-the-badge&logo=amazon-aws)
![CLI](https://img.shields.io/badge/AWS-CLI-blue?style=for-the-badge&logo=gnu-bash)
![IAM](https://img.shields.io/badge/AWS-IAM-red?style=for-the-badge&logo=amazon-aws)
![Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)

## 📋 Project Overview

This hands-on lab demonstrates the deployment of a static website to Amazon S3 using AWS Command Line Interface (CLI). The project covers creating S3 buckets, managing IAM users, configuring static website hosting, uploading website files, and automating deployments with bash scripts - all from the command line interface.

## 🎯 Objectives

By completing this lab, the following capabilities were demonstrated:

- ✅ Connect to EC2 instances using AWS Systems Manager Session Manager
- ✅ Configure AWS CLI with credentials and default settings
- ✅ Create S3 buckets using AWS CLI commands
- ✅ Create and configure IAM users programmatically
- ✅ Manage IAM policies and permissions via CLI
- ✅ Configure S3 bucket permissions and access control
- ✅ Enable static website hosting on S3
- ✅ Upload website files with appropriate ACLs
- ✅ Create bash scripts for automated deployments
- ✅ Implement efficient file synchronization
- ✅ Deploy and maintain a production static website

## ⏱️ Duration

**Approximately 45 minutes**

## 🏗️ Architecture Overview


## 📸 Screenshots Documentation

### Task 1: EC2 Connection via Systems Manager

**Screenshot 1: AWS Console - Details Panel**
- *Caption: Clicking "Details" button to reveal lab credentials*
- File: `01-console-details-panel.png`

**Screenshot 2: Instance Session URL**
- *Caption: Copying InstanceSessionUrl value for SSM connection*
- File: `02-instance-session-url.png`

**Screenshot 3: SSM Session Manager Console**
- *Caption: Browser-based SSH session connected as ssm-user*
- File: `03-ssm-console-connection.png`

**Screenshot 4: Switch to ec2-user**
- *Caption: Running 'sudo su -l ec2-user' to switch users*
- File: `04-switch-ec2-user.png`

**Screenshot 5: Verify Home Directory**
- *Caption: Output of 'pwd' command showing /home/ec2-user*
- File: `05-verify-home-directory.png`

### Task 2: AWS CLI Configuration

**Screenshot 6: AWS Configure Command**
- *Caption: Running 'aws configure' to set up CLI credentials*
- File: `06-aws-configure-command.png`

**Screenshot 7: Enter Access Key**
- *Caption: Pasting Access Key ID from lab credentials*
- File: `07-enter-access-key.png`

**Screenshot 8: Enter Secret Key**
- *Caption: Pasting Secret Access Key from lab credentials*
- File: `08-enter-secret-key.png`

**Screenshot 9: Configure Region**
- *Caption: Setting default region to us-west-2*
- File: `09-configure-region.png`

**Screenshot 10: Configure Output Format**
- *Caption: Setting default output format to json*
- File: `10-configure-output-format.png`

**Screenshot 11: Configuration Complete**
- *Caption: AWS CLI configuration successfully completed*
- File: `11-configuration-complete.png`

### Task 3: S3 Bucket Creation

**Screenshot 12: Create Bucket Command**
- *Caption: Running aws s3api create-bucket command with unique bucket name*
- File: `12-create-bucket-command.png`

**Screenshot 13: Bucket Creation Success**
- *Caption: JSON response showing successful bucket creation with Location*
- File: `13-bucket-creation-success.png`

**Screenshot 14: Bucket Name Example**
- *Caption: Using bucket name format: twhitlock256 (initial + lastname + numbers)*
- File: `14-bucket-name-example.png`

### Task 4: IAM User Creation

**Screenshot 15: Create IAM User**
- *Caption: Running 'aws iam create-user' command for awsS3user*
- File: `15-create-iam-user.png`

**Screenshot 16: IAM User Created**
- *Caption: JSON response showing new user awsS3user created*
- File: `16-iam-user-created.png`

**Screenshot 17: Create Login Profile**
- *Caption: Running create-login-profile command with password*
- File: `17-create-login-profile.png`

**Screenshot 18: Login Profile Success**
- *Caption: Confirmation that login profile created successfully*
- File: `18-login-profile-success.png`

**Screenshot 19: Copy Account ID**
- *Caption: AWS Console showing account dropdown with 12-digit Account ID*
- File: `19-copy-account-id.png`

**Screenshot 20: Sign Out**
- *Caption: Signing out of current session*
- File: `20-sign-out.png`

**Screenshot 21: IAM User Sign-In Page**
- *Caption: AWS sign-in page with IAM user radio button selected*
- File: `21-iam-signin-page.png`

**Screenshot 22: Enter Account ID**
- *Caption: Entering 12-digit account ID (no dashes)*
- File: `22-enter-account-id.png`

**Screenshot 23: IAM Login Screen**
- *Caption: Sign in as IAM user screen with username and password fields*
- File: `23-iam-login-screen.png`

**Screenshot 24: awsS3user Credentials**
- *Caption: Entering awsS3user username and Training123! password*
- File: `24-awsS3user-credentials.png`

**Screenshot 25: S3 Console as awsS3user**
- *Caption: S3 console showing no permissions (Access Denied)*
- File: `25-s3-console-no-permissions.png`

**Screenshot 26: List IAM Policies**
- *Caption: Running aws iam list-policies command to find S3 policies*
- File: `26-list-iam-policies.png`

**Screenshot 27: S3 Policies Results**
- *Caption: JSON output showing policies with S3 in PolicyName*
- File: `27-s3-policies-results.png`

**Screenshot 28: Identify AmazonS3FullAccess**
- *Caption: Locating AmazonS3FullAccess policy in results*
- File: `28-identify-s3fullaccess.png`

**Screenshot 29: Attach Policy Command**
- *Caption: Running attach-user-policy command with AmazonS3FullAccess*
- File: `29-attach-policy-command.png`

**Screenshot 30: Policy Attached**
- *Caption: Confirmation that policy successfully attached to awsS3user*
- File: `30-policy-attached.png`

**Screenshot 31: Refresh S3 Console**
- *Caption: Refreshing browser showing bucket now visible with permissions*
- File: `31-refresh-s3-console.png`

### Task 5: S3 Bucket Permissions

**Screenshot 32: Bucket Permissions Tab**
- *Caption: Navigating to bucket Permissions tab*
- File: `32-bucket-permissions-tab.png`

**Screenshot 33: Block Public Access Settings**
- *Caption: Viewing Block public access (bucket settings) section*
- File: `33-block-public-access.png`

**Screenshot 34: Edit Block Public Access**
- *Caption: Clicking "Edit" button for Block public access*
- File: `34-edit-block-access.png`

**Screenshot 35: Uncheck Block All**
- *Caption: Deselecting "Block all public access" checkbox*
- File: `35-uncheck-block-all.png`

**Screenshot 36: Save Changes**
- *Caption: Clicking "Save changes" button*
- File: `36-save-changes-confirmation.png`

**Screenshot 37: Confirm Changes**
- *Caption: Typing "confirm" in confirmation dialog*
- File: `37-confirm-dialog.png`

**Screenshot 38: Object Ownership**
- *Caption: Navigating to Object Ownership section*
- File: `38-object-ownership.png`

**Screenshot 39: Edit Object Ownership**
- *Caption: Clicking "Edit" for Object Ownership settings*
- File: `39-edit-object-ownership.png`

**Screenshot 40: Enable ACLs**
- *Caption: Selecting "ACLs enabled" radio button*
- File: `40-enable-acls.png`

**Screenshot 41: Acknowledge ACLs**
- *Caption: Checking "I acknowledge that ACLs will be restored"*
- File: `41-acknowledge-acls.png`

**Screenshot 42: Permissions Configured**
- *Caption: Success message showing permissions updated*
- File: `42-permissions-configured.png`

### Task 6: Extract Website Files

**Screenshot 43: Navigate to Directory**
- *Caption: Running 'cd ~/sysops-activity-files' command*
- File: `43-navigate-directory.png`

**Screenshot 44: Extract tar.gz File**
- *Caption: Running tar command to extract static-website-v2.tar.gz*
- File: `44-extract-tarball.png`

**Screenshot 45: Extraction Output**
- *Caption: Terminal showing files being extracted*
- File: `45-extraction-output.png`

**Screenshot 46: Change to Website Directory**
- *Caption: Running 'cd static-website' command*
- File: `46-cd-static-website.png`

**Screenshot 47: List Website Files**
- *Caption: Output of 'ls' showing index.html, css/, images/ directories*
- File: `47-list-website-files.png`

### Task 7: Upload Files and Enable Website Hosting

**Screenshot 48: Enable Website Hosting**
- *Caption: Running 'aws s3 website' command to enable static hosting*
- File: `48-enable-website-hosting.png`

**Screenshot 49: Website Hosting Configured**
- *Caption: Confirmation that index.html set as index document*
- File: `49-website-hosting-configured.png`

**Screenshot 50: Upload Files Command**
- *Caption: Running 'aws s3 cp' with --recursive and --acl public-read flags*
- File: `50-upload-files-command.png`

**Screenshot 51: Upload Progress**
- *Caption: Terminal showing files being uploaded to S3*
- File: `51-upload-progress.png`

**Screenshot 52: Upload Complete**
- *Caption: All files successfully uploaded message*
- File: `52-upload-complete.png`

**Screenshot 53: Verify Upload**
- *Caption: Running 'aws s3 ls' to list bucket contents*
- File: `53-verify-upload.png`

**Screenshot 54: Bucket Contents List**
- *Caption: Output showing index.html, css/, images/ in S3 bucket*
- File: `54-bucket-contents-list.png`

**Screenshot 55: S3 Console - Objects**
- *Caption: AWS Console showing uploaded objects in bucket*
- File: `55-s3-console-objects.png`

**Screenshot 56: Properties Tab**
- *Caption: Navigating to bucket Properties tab*
- File: `56-properties-tab.png`

**Screenshot 57: Static Website Hosting Section**
- *Caption: Scrolling to Static website hosting section at bottom*
- File: `57-static-hosting-section.png`

**Screenshot 58: Website Hosting Enabled**
- *Caption: Status showing "Enabled" for Static website hosting*
- File: `58-hosting-enabled-status.png`

**Screenshot 59: Bucket Website Endpoint**
- *Caption: Bucket website endpoint URL displayed*
- File: `59-website-endpoint-url.png`

**Screenshot 60: Click Website URL**
- *Caption: Clicking on bucket website endpoint link*
- File: `60-click-website-url.png`

**Screenshot 61: Café & Bakery Website Live**
- *Caption: Successfully displayed Café & Bakery website in browser*
- File: `61-website-live.png`

**Screenshot 62: Website Original Colors**
- *Caption: Website showing original aquamarine and orange color scheme*
- File: `62-original-colors.png`

### Task 8: Create Deployment Script

**Screenshot 63: View Command History**
- *Caption: Running 'history' command to view recent commands*
- File: `63-view-history.png`

**Screenshot 64: Locate Upload Command**
- *Caption: Finding the 'aws s3 cp' command line in history*
- File: `64-locate-upload-command.png`

**Screenshot 65: Create Script File**
- *Caption: Running 'touch update-website.sh' to create empty file*
- File: `65-create-script-file.png`

**Screenshot 66: Open in VI Editor**
- *Caption: Running 'vi update-website.sh' command*
- File: `66-open-vi-editor.png`

**Screenshot 67: VI Insert Mode**
- *Caption: Pressing 'i' to enter insert mode*
- File: `67-vi-insert-mode.png`

**Screenshot 68: Script Content**
- *Caption: Bash script with shebang and aws s3 cp command*
- File: `68-script-content.png`

**Screenshot 69: Save and Exit VI**
- *Caption: Pressing Esc, typing :wq to save and quit*
- File: `69-save-exit-vi.png`

**Screenshot 70: Make Script Executable**
- *Caption: Running 'chmod +x update-website.sh' command*
- File: `70-make-executable.png`

**Screenshot 71: Verify Permissions**
- *Caption: Running 'ls -l' showing executable permissions*
- File: `71-verify-permissions.png`

**Screenshot 72: Edit index.html**
- *Caption: Opening index.html in VI editor*
- File: `72-edit-index-html.png`

**Screenshot 73: Find Color Code 1**
- *Caption: Locating first 'bgcolor="aquamarine"' line*
- File: `73-find-color-1.png`

**Screenshot 74: Change to Gainsboro**
- *Caption: Changing aquamarine to gainsboro*
- File: `74-change-gainsboro.png`

**Screenshot 75: Find Color Code 2**
- *Caption: Locating 'bgcolor="orange"' line*
- File: `75-find-color-2.png`

**Screenshot 76: Change to Cornsilk**
- *Caption: Changing orange to cornsilk*
- File: `76-change-cornsilk.png`

**Screenshot 77: Find Color Code 3**
- *Caption: Locating second 'bgcolor="aquamarine"' line*
- File: `77-find-color-3.png`

**Screenshot 78: Change Second Aquamarine**
- *Caption: Changing second aquamarine to gainsboro*
- File: `78-change-second-aquamarine.png`

**Screenshot 79: Save HTML Changes**
- *Caption: Saving changes to index.html file*
- File: `79-save-html-changes.png`

**Screenshot 80: Run Deployment Script**
- *Caption: Running './update-website.sh' command*
- File: `80-run-deployment-script.png`

**Screenshot 81: Script Execution Output**
- *Caption: Terminal showing files being uploaded to S3*
- File: `81-script-execution-output.png`

**Screenshot 82: Upload Confirmation**
- *Caption: All files copied successfully message*
- File: `82-upload-confirmation.png`

**Screenshot 83: Refresh Website**
- *Caption: Refreshing Café & Bakery website in browser*
- File: `83-refresh-website.png`

**Screenshot 84: Updated Website Colors**
- *Caption: Website now showing new color scheme (gainsboro and cornsilk)*
- File: `84-updated-colors.png`

**Screenshot 85: Revision Complete**
- *Caption: Successfully deployed first website revision*
- File: `85-revision-complete.png`

### Optional Challenge: S3 Sync Command

**Screenshot 86: AWS S3 Sync Documentation**
- *Caption: Viewing AWS CLI sync command documentation*
- File: `86-sync-documentation.png`

**Screenshot 87: Make Minor HTML Change**
- *Caption: Making small color modification to index.html*
- File: `87-minor-html-change.png`

**Screenshot 88: Update Script with Sync**
- *Caption: Editing script to replace 'cp' with 'sync' command*
- File: `88-update-script-sync.png`

**Screenshot 89: Run Sync Command**
- *Caption: Running 'aws s3 sync' command from terminal*
- File: `89-run-sync-command.png`

**Screenshot 90: Sync Output**
- *Caption: Output showing only changed files uploaded (efficiency)*
- File: `90-sync-output.png`

**Screenshot 91: Sync vs CP Comparison**
- *Caption: Side-by-side showing sync uploaded 1 file vs cp uploaded all files*
- File: `91-sync-vs-cp-comparison.png`

**Screenshot 92: Final Website**
- *Caption: Final version of Café & Bakery website with all updates*
- File: `92-final-website.png`

## 🛠️ Technologies Used

- **Amazon S3** - Object storage and static website hosting
- **AWS CLI** - Command-line interface for AWS services
- **AWS Systems Manager** - Session Manager for EC2 access
- **Amazon EC2** - Virtual machine for CLI operations
- **AWS IAM** - Identity and access management
- **Bash** - Shell scripting for automation
- **VI Editor** - Terminal-based text editor
- **HTML/CSS** - Website content and styling
- **tar/gzip** - File compression and extraction

## 📝 Detailed Implementation

### Task 1: Systems Manager Connection

```bash
# Connection URL format
https://console.aws.amazon.com/systems-manager/session-manager/[instance-id]

# Switch to ec2-user
sudo su -l ec2-user

# Verify directory
pwd
# Output: /home/ec2-user
```

### Task 2: AWS CLI Configuration

```bash
# Configure AWS CLI
aws configure

# Inputs:
AWS Access Key ID: <AccessKey from lab>
AWS Secret Access Key: <SecretKey from lab>
Default region name: us-west-2
Default output format: json
```

**Configuration File Location:**
```
~/.aws/credentials  # Stores access keys
~/.aws/config       # Stores default region and output format
```

### Task 3: S3 Bucket Creation

```bash
# Create S3 bucket in us-west-2
aws s3api create-bucket \
  --bucket twhitlock256 \
  --region us-west-2 \
  --create-bucket-configuration LocationConstraint=us-west-2

# Expected output:
{
    "Location": "http://twhitlock256.s3.amazonaws.com/"
}
```

**Important Notes:**
- Bucket names must be globally unique
- Use naming convention: initial + lastname + random numbers
- Must specify LocationConstraint for non us-east-1 regions

### Task 4: IAM User Management

#### Create IAM User
```bash
# Create new IAM user
aws iam create-user --user-name awsS3user

# Create login profile
aws iam create-login-profile \
  --user-name awsS3user \
  --password Training123!
```

#### Find and Attach S3 Policy
```bash
# List policies containing 'S3'
aws iam list-policies --query "Policies[?contains(PolicyName,'S3')]"

# Attach AmazonS3FullAccess policy
aws iam attach-user-policy \
  --policy-arn arn:aws:iam::aws:policy/AmazonS3FullAccess \
  --user-name awsS3user
```

#### IAM User Login
```yaml
Sign-in Steps:
  1. Copy 12-digit Account ID (no dashes)
  2. Sign out of current session
  3. Select "IAM user" radio button
  4. Enter Account ID
  5. Click "Next"
  6. Enter username: awsS3user
  7. Enter password: Training123!
  8. Click "Sign In"
```

### Task 5: S3 Bucket Permissions

#### Block Public Access
```yaml
Configuration:
  Block all public access: ❌ Disabled
  Reason: Allow public website access
```

#### Object Ownership
```yaml
Configuration:
  ACLs: ✅ Enabled
  Object Ownership: Bucket owner preferred
  Acknowledgment: Required
```

### Task 6: Extract Website Files

```bash
# Navigate to files directory
cd ~/sysops-activity-files

# Extract tarball
tar xvzf static-website-v2.tar.gz

# Enter website directory
cd static-website

# Verify extraction
ls
# Output: index.html  css/  images/
```

**Directory Structure:**
```
static-website/
├── index.html          # Main webpage
├── css/
│   └── styles.css      # Stylesheet
└── images/
    ├── logo.png        # Logo image
    └── cafe.jpg        # Café image
```

### Task 7: Website Deployment

#### Enable Static Website Hosting
```bash
# Configure bucket for website hosting
aws s3 website s3://twhitlock256/ --index-document index.html
```

#### Upload Website Files
```bash
# Upload all files recursively with public-read ACL
aws s3 cp /home/ec2-user/sysops-activity-files/static-website/ \
  s3://twhitlock256/ \
  --recursive \
  --acl public-read
```

**Command Breakdown:**
- `s3 cp`: Copy command
- `--recursive`: Upload all files in directory
- `--acl public-read`: Make objects publicly accessible

#### Verify Upload
```bash
# List bucket contents
aws s3 ls twhitlock256

# Expected output:
# PRE css/
# PRE images/
# 2024-01-15 10:30:00   5432 index.html
```

#### Access Website
```
URL Format:
http://[bucket-name].s3-website-[region].amazonaws.com

Example:
http://twhitlock256.s3-website-us-west-2.amazonaws.com
```

### Task 8: Deployment Automation

#### Create Bash Script

**update-website.sh**
```bash
#!/bin/bash
aws s3 cp /home/ec2-user/sysops-activity-files/static-website/ \
  s3://twhitlock256/ \
  --recursive \
  --acl public-read
```

#### Script Creation Commands
```bash
# Create script file
touch update-website.sh

# Edit in VI
vi update-website.sh
# Press 'i' for insert mode
# Paste script content
# Press 'Esc', type ':wq', press Enter

# Make executable
chmod +x update-website.sh
```

#### Modify Website Content

**HTML Color Changes:**
```html
<!-- BEFORE -->
<td bgcolor="aquamarine">...</td>
<td bgcolor="orange">...</td>

<!-- AFTER -->
<td bgcolor="gainsboro">...</td>
<td bgcolor="cornsilk">...</td>
```

#### Deploy Updates
```bash
# Run deployment script
./update-website.sh

# Refresh browser to see changes
```

### Optional Challenge: S3 Sync

#### Optimize with Sync Command

**Updated Script:**
```bash
#!/bin/bash
aws s3 sync /home/ec2-user/sysops-activity-files/static-website/ \
  s3://twhitlock256/ \
  --acl public-read
```

**Key Differences:**

| Feature | aws s3 cp | aws s3 sync |
|---------|-----------|-------------|
| **Behavior** | Uploads all files every time | Only uploads changed files |
| **Efficiency** | Lower (redundant uploads) | Higher (smart sync) |
| **Use Case** | One-time uploads | Incremental updates |
| **Speed** | Slower for unchanged files | Much faster |
| **Bandwidth** | Higher usage | Lower usage |

**Sync Command Benefits:**
```yaml
Example Scenario:
  Total Files: 50
  Changed Files: 1 (index.html)
  
  cp command:
    Files Uploaded: 50
    Time: ~10 seconds
    
  sync command:
