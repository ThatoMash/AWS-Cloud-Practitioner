# Troubleshooting a VPC (VPC Flow Logs)

## Introduction
In this lab, I worked through a hands-on troubleshooting scenario focused on Amazon Virtual Private Cloud (VPC). The goal was to identify and resolve networking issues that prevented access to an EC2 web server, while also learning how to create and analyze VPC Flow Logs for deeper visibility into network traffic.

This lab closely mirrors real-world cloud support and networking troubleshooting tasks, where multiple layers (security groups, route tables, and network ACLs) must work together correctly.

---

## Overview
The environment consisted of two VPCs:
- **VPC1** hosting a café web server EC2 instance in a public subnet
- **A separate VPC** hosting a CLI Host EC2 instance used for AWS CLI-based troubleshooting

I used AWS CLI commands exclusively (where possible) to investigate connectivity issues, create VPC Flow Logs, and analyze rejected traffic.

**Key focus areas:**
- VPC Flow Logs creation and analysis
- Network troubleshooting using AWS CLI
- Understanding how security groups, route tables, and network ACLs interact

---

## Architecture
The architecture included the following components:
- Two VPCs
- Public subnet hosting a web server EC2 instance
- Internet Gateway
- Route tables
- Security groups and network ACLs
- S3 bucket for storing VPC Flow Logs
- CLI Host EC2 instance for AWS CLI access

 **Architecture Diagram**  
<img width="834" height="413" alt="image" src="https://github.com/user-attachments/assets/ea21360e-c508-4267-b756-009fa92b94cc" />


---

## Objectives
By completing this lab, I was able to:
- Create and configure VPC Flow Logs
- Troubleshoot EC2 connectivity issues
- Diagnose routing, security group, and network ACL misconfigurations
- Analyze VPC Flow Log data using Linux command-line tools

---

## Tools & Services Used
- Amazon VPC
- Amazon EC2
- VPC Flow Logs
- Amazon S3
- AWS CLI
- EC2 Instance Connect
- Linux utilities (`nmap`, `grep`, `gunzip`, `date`)

---

## Lab Steps

### 1. Connecting to the CLI Host
I connected to the CLI Host EC2 instance using **EC2 Instance Connect** and configured the AWS CLI with the provided credentials and default region (`us-west-2`). This instance was used for all troubleshooting tasks.

📸 **CLI Host Connection Placeholder**  
![CLI Host Connection](images/cli-host-connect.png)

---

### 2. Creating VPC Flow Logs
I created an S3 bucket to store flow log data and then enabled VPC Flow Logs on **VPC1** to capture **ALL** IP traffic.

Steps included:
- Creating an S3 bucket
- Identifying the VPC ID
- Creating a flow log targeting the S3 bucket
- Verifying the flow log status was **ACTIVE**

📸 **VPC Flow Logs Creation Placeholder**  
![VPC Flow Logs](images/vpc-flow-logs.png)

---

### 3. Troubleshooting Connectivity Issues

#### Issue 1: Website Not Loading
When I attempted to access the web server using its public IP address, the page failed to load.

**What I investigated:**
- Verified the EC2 instance was running
- Scanned open ports using `nmap`
- Reviewed security group inbound rules
- Inspected the route table associated with the public subnet

**Root Cause:**
The route table for the public subnet was missing a route to the Internet Gateway.

**Resolution:**
I added a route (`0.0.0.0/0`) pointing to the Internet Gateway. After this fix, the webpage loaded successfully and displayed:

> **"Hello From Your Web Server!"**

📸 **Web Server Success Placeholder**  
![Web Server Access](images/web-server-success.png)

---

#### Issue 2: SSH Access Still Failing
Even after fixing web access, SSH connections using EC2 Instance Connect continued to fail.

**What I investigated:**
- Verified port 22 was allowed in the security group
- Checked Network ACL rules associated with the subnet

**Root Cause:**
A Network ACL rule was explicitly **blocking inbound SSH (port 22)** traffic.

**Resolution:**
I deleted the restrictive NACL entry. After this change, I successfully connected to the instance via EC2 Instance Connect and confirmed the hostname as `web-server`.

📸 **SSH Access Placeholder**  
![SSH Access](images/ssh-access.png)

---

## Analyzing VPC Flow Logs

### Downloading Logs
I downloaded the VPC Flow Logs from the S3 bucket to the CLI Host and extracted the compressed `.gz` files for analysis.

### Log Analysis
Using `grep`, I analyzed the logs to:
- Identify **REJECT** traffic
- Filter failed SSH attempts on port 22
- Match rejected traffic to my public IP address
- Confirm the elastic network interface ID matched the web server instance

I also converted Unix timestamps into human-readable format to verify the timing of rejected connections.

📸 **Flow Log Analysis Placeholder**  
![Flow Log Analysis](images/flow-log-analysis.png)

---

## Key Learnings
- VPC Flow Logs are extremely valuable for diagnosing network issues
- Security groups, route tables, and NACLs must all be configured correctly
- Network ACLs can silently block traffic even when security groups allow it
- AWS CLI is a powerful troubleshooting tool in real-world cloud environments

---

## Conclusion
This lab strengthened my understanding of AWS networking fundamentals and reinforced a structured approach to troubleshooting cloud connectivity issues. By combining VPC Flow Logs with hands-on investigation, I was able to confidently identify and resolve layered network problems.

This experience reflects real-world cloud support and operations tasks and has significantly improved my confidence in troubleshooting AWS VPC environments.

---

✅ **Lab Status: Completed Successfully**

