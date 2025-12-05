# AWS Cloud Practitioner: Storage Services Study Guide

## Introduction
Welcome to this study repository for the AWS Cloud Practitioner (CLF-C01) certification. This guide summarizes the core AWS Storage Services, highlighting the differences between storage architectures (Block, File, Object), data migration tools, and specific storage classes. These notes provide a visual reference for understanding when to use S3, EBS, EFS, and the Snow Family.

---

## 1. Storage Services Overview
A high-level summary of the primary storage options available in AWS, from serverless object storage to hybrid cloud solutions.


<img width="1920" height="1080" alt="#5 Storage Services 1 " src="https://github.com/user-attachments/assets/1746d10b-3a6e-4784-a4e8-e2b0bcf2361d" />


* **Simple Storage Service (S3):** Unlimited serverless object storage.
* **S3 Glacier:** Low-cost storage for archiving.
* **Elastic Block Store (EBS):** Virtual hard drives for EC2.
* **Elastic File Storage (EFS):** Network file sharing for Linux EC2 instances.
* **Storage Gateway:** Connecting on-premise data to the cloud.

---

## 2. Types of Storage Architecture
Understanding the fundamental difference between Block, File, and Object storage is the key to passing the exam.


<img width="1920" height="1080" alt="#1 Types of Storage Services" src="https://github.com/user-attachments/assets/fb7f240f-49e0-46da-acc5-4fe254c894cb" />


* **Block (EBS):** High performance, attached to one instance at a time.
* **File (EFS):** Shared access, hierarchical structure (folders).
* **Object (S3):** Flat structure with metadata, accessible via API/Web.

---

## 3. Introduction to S3
Amazon S3 is the backbone of AWS storage. It handles data as "Objects" inside "Buckets".


<img width="1920" height="1080" alt="#2 Introduction to S3" src="https://github.com/user-attachments/assets/7e9589eb-b45c-40ad-84da-b0cd7241a548" />


* **Bucket:** The container (must have a globally unique name).
* **Object:** The file itself + Metadata + Key (ID).
* **Capacity:** Unlimited total storage; individual objects up to 5TB.

---

## 4. S3 Storage Classes
S3 offers different tiers to help you save money based on how often you access your data.

<img width="1920" height="1080" alt="#3 S3 Storage Classes" src="https://github.com/user-attachments/assets/9df31f6b-c4e1-45ec-ba44-3eaa9e87274b" />


* **Standard:** Active data, instant access.
* **Intelligent-Tiering:** AI-driven cost optimization.
* **Standard-IA / One-Zone-IA:** Infrequent access options.
* **Glacier / Deep Archive:** Cold storage for long-term backups (cheapest).

---

## 5. Advanced Storage & Migration Services
Tools for moving massive amounts of data and managing specialized file systems.


<img width="1920" height="1080" alt="#4 AWS Snow Family" src="https://github.com/user-attachments/assets/701ccc61-c9e3-44ce-8b72-88765e5b95e1" />


**AWS Snow Family (Data Migration):**
* **Snowcone:** Portable, small data transfer (8-14 TB).
* **Snowball Edge:** Rugged device for large transfers (up to 80 TB).
* **Snowmobile:** Truck shipping container for Exabyte-scale data (100 PB).


<img width="1920" height="1080" alt="#5 Storage Services 2 " src="https://github.com/user-attachments/assets/83845bb4-7f75-4d10-8bfe-7c680b586697" />


**Additional Services:**
* **AWS Backup:** Centralized backup management.
* **Amazon FSx:** High-performance file systems for Windows and Lustre.
* **CloudEndure:** Disaster recovery replication.

---

## Conclusion
Mastering these storage services is essential for the AWS Cloud Practitioner exam. Remember: use **S3** for general web files and backups, **EBS** for your EC2 operating systems, **EFS** for shared Linux files, and **Glacier** for data you rarely touch. Good luck with your studies!

*Study materials and visual aids referenced from ExamPro.*
