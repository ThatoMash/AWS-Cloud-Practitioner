# AWS Storage Services - Complete Guide

Welcome to the AWS Storage Services learning module! This repository contains comprehensive coverage of all AWS storage solutions, from block storage to data protection services.

![AWS Storage Services](./images/aws-storage-services.png)

## 📚 Module Overview

This module covers the complete portfolio of AWS storage services, helping you understand when and how to use each storage solution for different use cases.

## 🗂️ Course Content

### 1. AWS Storage Services - Portfolio Introduction
- Overview of AWS storage offerings
- Storage service categories
- Choosing the right storage solution
- Cost optimization strategies
- Storage performance characteristics

### 2. AWS Block Storage Services
**Amazon EBS (Elastic Block Store)**
- EBS volume types (gp3, gp2, io2, io1, st1, sc1)
- EBS snapshots and backup strategies
- Volume encryption and security
- Performance optimization
- Use cases: Databases, boot volumes, enterprise applications

**Amazon EC2 Instance Store**
- Temporary block-level storage
- High IOPS performance
- Use cases and limitations

### 3. AWS Object Storage Services
**Amazon S3 (Simple Storage Service)**
- S3 buckets and objects
- Storage classes (Standard, IA, One Zone-IA, Glacier, Deep Archive)
- S3 versioning and lifecycle policies
- S3 security (bucket policies, ACLs, encryption)
- S3 performance optimization
- S3 event notifications

**Amazon S3 Glacier**
- Long-term archival storage
- Retrieval options (Expedited, Standard, Bulk)
- Vault lock and compliance

### 4. AWS Hybrid Storage Services
**AWS Storage Gateway**
- File Gateway - NFS/SMB file shares
- Volume Gateway - iSCSI block storage
- Tape Gateway - Virtual tape library (VTL)
- Integration with on-premises environments

**AWS Snow Family**
- Snowcone - Edge computing and data transfer
- Snowball - Petabyte-scale data migration
- Snowmobile - Exabyte-scale data transfer

### 5. AWS Edge Storage, Data Transfer, and File Transfer Services
**Edge Storage**
- AWS Outposts - On-premises AWS infrastructure
- AWS Local Zones - Low-latency edge locations
- AWS Wavelength - 5G edge computing

**Data Transfer Services**
- AWS DataSync - Automated data transfer
- AWS Transfer Family (SFTP, FTPS, FTP)
- Amazon Kinesis Data Firehose

**File Transfer**
- AWS Transfer Family
- Amazon S3 Transfer Acceleration
- AWS Direct Connect

### 6. AWS Storage Data Protection Services
**Backup and Recovery**
- AWS Backup - Centralized backup management
- EBS snapshots
- S3 versioning and replication
- Cross-region replication (CRR)
- Same-region replication (SRR)

**Data Security**
- Encryption at rest and in transit
- AWS KMS integration
- S3 Object Lock
- Compliance and retention policies

### 7. Storage Cheat Sheets
- Quick reference guides for all storage services
- Service comparison matrices
- Best practices summaries
- Common use case patterns
- Pricing overview



## 🎯 Learning Objectives

By completing this module, you will be able to:

- ✅ Compare and contrast different AWS storage services
- ✅ Select appropriate storage solutions for specific use cases
- ✅ Implement storage security best practices
- ✅ Configure backup and disaster recovery strategies
- ✅ Optimize storage costs and performance
- ✅ Migrate data to AWS using various transfer methods

## 📊 Storage Service Comparison

| Service | Type | Use Case | Durability |
|---------|------|----------|------------|
| **Amazon EBS** | Block | EC2 volumes, databases | 99.999% |
| **Amazon S3** | Object | Static content, backups | 99.999999999% |
| **Amazon EFS** | File | Shared file systems | 99.999999999% |
| **Storage Gateway** | Hybrid | On-prem integration | Varies |
| **Glacier** | Archive | Long-term backup | 99.999999999% |

## 🔑 Key Concepts

### Storage Types
- **Block Storage**: Low-latency, high-performance (EBS)
- **Object Storage**: Scalable, durable (S3)
- **File Storage**: Shared access (EFS, FSx)
- **Hybrid**: Bridge on-prem and cloud

### Storage Classes (S3)
- **S3 Standard**: Frequent access
- **S3 Intelligent-Tiering**: Automatic cost optimization
- **S3 Standard-IA**: Infrequent access
- **S3 Glacier**: Long-term archive
- **S3 Glacier Deep Archive**: Lowest cost archive

## 📝 Study Progress

- [ ] Portfolio Introduction
- [ ] Block Storage Services
- [ ] Object Storage Services
- [ ] Hybrid Storage Services
- [ ] Edge Storage & Data Transfer
- [ ] Data Protection Services
- [ ] Storage Cheat Sheets Review

## 🔗 Essential Resources

- [AWS Storage Services Overview](https://aws.amazon.com/products/storage/)
- [Amazon S3 Documentation](https://docs.aws.amazon.com/s3/)
- [Amazon EBS Documentation](https://docs.aws.amazon.com/ebs/)
- [AWS Storage Blog](https://aws.amazon.com/blogs/storage/)
- [AWS Storage Pricing](https://aws.amazon.com/pricing/)

## 💡 Best Practices

1. **Security First**: Always encrypt data at rest and in transit
2. **Lifecycle Policies**: Automate data movement to lower-cost tiers
3. **Backup Strategies**: Implement automated backups with AWS Backup
4. **Cost Optimization**: Use S3 Intelligent-Tiering and storage analytics
5. **Performance**: Match storage type to workload requirements

## 🧪 Hands-On Labs

- Create and configure S3 buckets with lifecycle policies
- Set up EBS volumes with encryption and snapshots
- Configure Storage Gateway for hybrid cloud
- Implement cross-region replication
- Set up AWS Backup for centralized protection

## 📌 Exam Tips (Cloud Practitioner)

- Understand storage durability vs availability
- Know when to use each storage service
- Remember S3 storage classes and use cases
- Understand the Shared Responsibility Model for storage
- Know backup and disaster recovery options

## 🤝 Contributing

Feel free to contribute by:
- Adding practice questions
- Sharing real-world examples
- Suggesting improvements
- Reporting errors

---

**Module:** 3 - AWS Storage Services  
**Last Updated:** November 2025  
**Status:** In Progress 🔄

*Master AWS Storage Services! ☁️💾*
