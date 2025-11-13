# 🧪 AWS Hands-on Labs Documentation

This document showcases the **hands-on AWS labs** I’ve completed throughout my **AWS Cloud Practitioner** learning journey.  
Each lab includes the **objective**, **AWS services used**, **steps**, and **what I learned**.

---

## 📘 Lab Index
- [Lab 1 – Getting Started with AWS Management Console](#🌩️-lab-1--getting-started-with-aws-management-console)
- [Lab 2 – Launching an EC2 Instance](#💻-lab-2--launching-an-ec2-instance)
- [Lab 3 – Creating an S3 Bucket](#🗄️-lab-3--creating-an-s3-bucket)
- [Lab 4 – Setting up IAM Users and Roles](#🔒-lab-4--setting-up-iam-users-and-roles)
- [Lab 5 – Monitoring Resources with CloudWatch](#🧰-lab-5--monitoring-resources-with-cloudwatch)
- [Lab 6 – Building a Simple VPC Network](#🌐-lab-6--building-a-simple-vpc-network)
- [Lab 7 – Creating an RDS Database Instance](#🧮-lab-7--creating-an-rds-database-instance)
- [Lab 8 – Deploying a Static Website on S3](#🚀-lab-8--deploying-a-static-website-on-s3)
- [Lab 9 – Setting Up a Simple CI/CD Pipeline](#🤖-lab-9--setting-up-a-simple-cicd-pipeline)

---

## 🌩️ Lab 1 – Getting Started with AWS Management Console
**Objective:**  
Explore the AWS Management Console and understand how to access different services.

**Services Used:**  
- AWS Management Console  
- IAM  

**Key Steps:**  
1. Logged into AWS console for the first time.  
2. Navigated through the service categories (Compute, Storage, Networking, etc.).  
3. Customized the console view and pinned commonly used services.

**What I Learned:**  
- How AWS services are grouped by category.  
- How to access global vs regional services.  

[⬆ Back to Top](#📘-lab-index)

---

## 💻 Lab 2 – Launching an EC2 Instance
**Objective:**  
Launch and connect to an EC2 instance.

**Services Used:**  
- Amazon EC2  
- VPC  
- Key Pairs  

**Key Steps:**  
1. Created a new EC2 instance using the AWS Free Tier.  
2. Configured the instance type, security group, and key pair.  
3. Connected to the instance using SSH.

**What I Learned:**  
- How to provision and manage virtual servers in the cloud.  
- The importance of key pairs and security groups for access control.  

[⬆ Back to Top](#📘-lab-index)

---

## 🗄️ Lab 3 – Creating an S3 Bucket
**Objective:**  
Store and retrieve files using Amazon S3.

**Services Used:**  
- Amazon S3  

**Key Steps:**  
1. Created an S3 bucket with a unique name.  
2. Uploaded and organized objects (files).  
3. Configured permissions and bucket policies.

**What I Learned:**  
- S3 bucket structure and object storage concepts.  
- How to manage access to S3 data.  

[⬆ Back to Top](#📘-lab-index)

---

## 🔒 Lab 4 – Setting up IAM Users and Roles
**Objective:**  
Create IAM users and roles to control access to AWS resources.

**Services Used:**  
- AWS IAM  

**Key Steps:**  
1. Created IAM users and groups.  
2. Attached predefined policies like “AmazonS3FullAccess.”  
3. Tested permissions and login access.  

**What I Learned:**  
- AWS shared responsibility model.  
- How IAM helps enforce least-privilege access.  

[⬆ Back to Top](#📘-lab-index)

---

## 🧰 Lab 5 – Monitoring Resources with CloudWatch
**Objective:**  
Use CloudWatch to monitor metrics and create alarms.

**Services Used:**  
- Amazon CloudWatch  
- Amazon EC2  

**Key Steps:**  
1. Viewed EC2 metrics in CloudWatch dashboard.  
2. Created a custom alarm for CPU usage.  
3. Configured notifications via SNS (optional).

**What I Learned:**  
- CloudWatch’s role in monitoring and alerting.  
- Importance of proactive resource monitoring.  

[⬆ Back to Top](#📘-lab-index)

---

## 🌐 Lab 6 – Building a Simple VPC Network
**Objective:**  
Design a Virtual Private Cloud with public and private subnets.

**Services Used:**  
- Amazon VPC  
- Internet Gateway  
- Route Tables  

**Key Steps:**  
1. Created a new VPC and subnets.  
2. Configured routing for internet access.  
3. Attached an EC2 instance to a public subnet.  

**What I Learned:**  
- How VPCs isolate and secure cloud networks.  
- Basics of routing and IP addressing in AWS.  

[⬆ Back to Top](#📘-lab-index)

---

## 🧮 Lab 7 – Creating an RDS Database Instance
**Objective:**  
Deploy a managed database using Amazon RDS.

**Services Used:**  
- Amazon RDS  
- MySQL  

**Key Steps:**  
1. Created a new RDS instance.  
2. Configured storage, engine, and security groups.  
3. Connected the database from an EC2 instance.  

**What I Learned:**  
- Benefits of managed databases.  
- RDS automation for backups and scaling.  

[⬆ Back to Top](#📘-lab-index)

---

## 🚀 Lab 8 – Deploying a Static Website on S3
**Objective:**  
Host a static website using Amazon S3.

**Services Used:**  
- Amazon S3  
- Amazon CloudFront (optional for CDN)

**Key Steps:**  
1. Uploaded HTML/CSS files to S3 bucket.  
2. Enabled static website hosting.  
3. Configured public access and tested the URL.  

**What I Learned:**  
- Hosting and distribution of static content in AWS.  
- How S3 and CloudFront work together.  

[⬆ Back to Top](#📘-lab-index)

---

## 🤖 Lab 9 – Setting Up a Simple CI/CD Pipeline
**Objective:**  
Automate code deployment using AWS Developer Tools.

**Services Used:**  
- AWS CodeCommit  
- AWS CodeBuild  
- AWS CodeDeploy  

**Key Steps:**  
1. Pushed sample code to CodeCommit repository.  
2. Built a pipeline connecting CodeBuild and CodeDeploy.  
3. Verified successful deployment.

**What I Learned:**  
- Basics of continuous integration and deployment.  
- How AWS simplifies DevOps pipelines.  

[⬆ Back to Top](#📘-lab-index)

