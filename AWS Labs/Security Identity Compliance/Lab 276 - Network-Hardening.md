# AWS Inspector: Vulnerability Assessment and Remediation

## Project Overview

This lab demonstrates automated security vulnerability scanning using **Amazon Inspector**. You will identify, analyze, and remediate security vulnerabilities in **AWS Lambda functions**, showcasing enterprise-grade security practices for serverless applications.

---

## Lab Objectives

After completing this lab, you will be able to:

- Activate and configure Amazon Inspector  
- Perform automated vulnerability scanning of Lambda functions  
- Analyze and interpret vulnerability findings from security reports  
- Understand CVE (Common Vulnerabilities and Exposures) details  
- Remediate identified vulnerabilities in Lambda functions  
- Validate successful remediation through re-scanning  
- Implement continuous security monitoring practices  
- Work with National Vulnerability Database (NVD) resources  

**Duration:** ~30 minutes

---

## 1. Amazon Inspector Activation

- Navigate to the **Amazon Inspector** service in AWS Console  
- Click **Activate Inspector** in the left panel  
- Confirm activation  
- Initial scan automatically triggered (Lambda functions coverage 100%)  

![Inspector Activation](screenshots/01-activate-inspector.png)  
*TODO: Add screenshot of Inspector activation*

---

## 2. Reviewing Findings

- Navigate to **All findings** in Inspector  
- Review detected vulnerabilities, severity, and affected resources  
- Example: `CVE-2023-32681` in `requests` package  

| Finding | CVE ID | Severity | Resource | Package | Version |
|---------|--------|----------|----------|---------|---------|
| 1 | CVE-2023-32681 | Medium | get-request | requests | 2.20.0 |

![Findings List](screenshots/02-findings-list.png)  
*TODO: Add screenshot of findings list*

---

## 3. Remediation Process

### Step 1: Navigate to Lambda Function
- Open Lambda function `get-request`  
- Access `requirements.txt`  

### Step 2: Update dependencies
```text
# BEFORE (vulnerable)
requests==2.20.0

# AFTER (remediated)
requests
```
# Step 3: Deploy Updated Function

Click Deploy in Lambda console

Inspector automatically triggers re-scan


TODO: Add screenshot of Lambda deployment

Step 4: Verify Remediation

Wait for re-scan

Filter findings to Closed

Confirm CVE-2023-32681 is closed


TODO: Add screenshot of verified remediation

4. Summary

In this lab, you successfully:

Activated Amazon Inspector for AWS account

Performed automated scans on Lambda functions

Identified and analyzed vulnerabilities

Remediated CVE-2023-32681 by updating requests package

Validated remediation with re-scanning

Learned best practices for serverless security monitoring

This lab provides a strong foundation for continuous security monitoring and vulnerability management in AWS serverless environments.
